// Generates parse.js
// $ narwhal src/grammar.js lib/orderly/parse.js

var Parser = require("jison").Parser;
var system = require("system");
var fs = require("file");

exports.grammar = {
    "comment": "Adapted from Orderly Normative Grammar",
    "author": "Zach Carter",

    "lex": {
        "macros": {
            "digit": "[0-9]",
            "esc": "\\\\",
            "int": "-?(?:[0-9]|[1-9][0-9]+)",
            "exp": "(?:[eE][-+]?[0-9]+)",
            "frac": "(?:\\.[0-9]+)"
        },
        "rules": [
            ["\\s+", "/* skip whitespace */"],
            ["\\/\\/[^\\n]*", "/* skip comment */"],
            ["#[^\\n]*", "/* skip comment */"],
            [";", "return ';'"],
            [",", "return ','"],
            ["\\{", "return '{'"],
            ["\\}", "return '}'"],
            ["\\[", "return '['"],
            ["\\]", "return ']'"],
            ["`", "return '`'"],
            ["<", "return '<'"],
            [">", "return '>'"],
            [":", "return ':'"],
            ["object\\b", "return 'OBJECT'"],
            ["integer\\b", "return 'INTEGER'"],
            ["number\\b", "return 'NUMBER'"],
            ["null\\b", "return 'NULL'"],
            ["boolean\\b", "return 'BOOLEAN'"],
            ["any\\b", "return 'ANY'"],
            ["array\\b", "return 'ARRAY'"],
            ["union\\b", "return 'UNION'"],
            ["string\\b", "return 'STRING'"],
            ["true\\b", "return 'TRUE'"],
            ["false\\b", "return 'FALSE'"],
            ["\"(?:{esc}[\"bfnrt/{esc}]|{esc}u[a-fA-F0-9]{4}|[^\"{esc}])*\"", "yytext = yytext.substr(1,yyleng-2); return 'STRING_LIT';"],
            ["{int}{frac}?{exp}?\\b", "return 'NUMBER_LIT';"],
            ["[A-Za-z_0-9-]+", "return 'PROPERTY';"],
            ["\\?", "return '?'"],
            ["\\*", "return '*'"],
            ["=", "return '='"],
            ["\\/(?:[^/]|\\/)*\\/", "return 'REGEX';"]
        ]
    },

    "tokens": "STRING_LIT NUMBER_LIT PROPERTY STRING NUMBER OBJECT ANY ARRAY BOOLEAN UNION INTEGER REGEX ? * = { } [ ] , : ; ` < > TRUE FALSE NULL",

    "bnf": {
        "orderly_schema": [[ "unnamed_entry ;", "return $1;" ],
                           [ "unnamed_entry",   "return $1;" ]],

        "named_entries": [[ "named_entry ; named_entries", "$$ = $3; $$.unshift($1);" ],
                          [ "named_entry",                 "$$ = [$1];" ],
                          [ "",                            "$$ = [];" ]],

        "unnamed_entries": [[ "unnamed_entry ; unnamed_entries", "$$ = $3; $3.unshift($1);" ],
                            [ "unnamed_entry",                   "$$ = [$1];" ],
                            [ "",                                "$$ = [];" ]],

        "named_entry": [[ "definition_prefix property_name definition_suffix", "$$ = [$2, $1]; Type.addOptionals($1, $3);" ],
                        [ "string_prefix property_name string_suffix",         "$$ = [$2, $1]; Type.addOptionals($1, $3);" ]],

        "unnamed_entry": [[ "definition_prefix definition_suffix", "$$ = $1; Type.addOptionals($$, $2);" ],
                          [ "string_prefix string_suffix",         "$$ = $1; Type.addOptionals($$, $2);" ]],

        "definition_prefix": [[ "INTEGER optional_range",    "$$ = new Type('integer', $2);" ],
                              [ "NUMBER optional_range",     "$$ = new Type('number', $2);" ],
                              [ "BOOLEAN",                   "$$ = new Type('boolean');" ],
                              [ "NULL",                      "$$ = new Type('null');" ],
                              [ "ANY",                       "$$ = new Type('any');" ],
                              [ "ARRAY { unnamed_entries } optional_additional_marker optional_range",
                                                             "$$ = new Type('array', $6, $3, $5);" ],
                              [ "ARRAY [ unnamed_entry ] optional_range",
                                                             "$$ = new Type('array', $5, $3);" ],
                              [ "OBJECT { named_entries } optional_additional_marker",
                                                             "$$ = new Type('object', null, $3, $5);" ],
                              [ "UNION { unnamed_entries }", "$$ = new Type($3);" ]],

        "string_prefix": [[ "STRING optional_range", "$$ = new Type('string', $2);" ]],

        "string_suffix": [[ "optional_perl_regex definition_suffix", "$$ = $2; $$.pattern = $1;" ]],

        "definition_suffix": [[ "optional_enum_values optional_default_value optional_requires optional_optional_marker optional_extra_properties",
                                    "$$ = {'enums': $1, 'defaultv': $2, 'requires': $3, 'optional': $4, 'extras': $5};" ]],

        "csv_property_names": [[ "csv_property_names , property_name", "$$ = $1; $$.push($3);" ],
                               [ "property_name",                      "$$ = [$1];" ]],

        "optional_extra_properties": [[ "` JSONObject `", "$$ = $2;" ],
                                      [ "",               "$$ = null;" ]],

        "optional_requires": [[ "< csv_property_names >", "$$ = $2;" ],
                              [ "",                       "$$ = null;" ]],

        "optional_optional_marker": [[ "?", "$$ = true;" ],
                                     [ "",  "$$ = null;" ]],

        "optional_additional_marker": [[ "*", "$$ = true;" ],
                                       [ "",  "$$ = null;" ]],

        "optional_enum_values": [[ "JSONArray", "$$ = $1;" ],
                                 [ "",          "$$ = null;" ]],

        "optional_default_value": [[ "= JSONValue", "$$ = $2;" ],
                                   [ "",            "$$ = yy.NOVALUE;" ]],

        "optional_range": [[ "{ JSONNumber , JSONNumber }", "$$ = [$2, $4];" ],
                           [ "{ JSONNumber , }",            "$$ = [$2, null];" ],
                           [ "{ , JSONNumber }",            "$$ = [null, $3];" ],
                           [ "{ , }",                       "$$ = null;" ],
                           [ "",                            "$$ = null;" ]],

        "property_name": [[ "JSONString", "$$ = $1;" ],
                          [ "PROPERTY",   "$$ = yytext;" ]],

        "optional_perl_regex": [[ "REGEX", "$$ = yytext.substr(1, yytext.length-2);" ],
                                [ "",      "$$ = null;" ]],


        "JSONString": [[ "STRING_LIT", "$$ = yytext;" ]],

        "JSONNumber": [[ "NUMBER_LIT", "$$ = Number(yytext);" ]],

        "JSONNullLiteral": [[ "NULL", "$$ = null;" ]],

        "JSONBooleanLiteral": [[ "TRUE",  "$$ = true;" ],
                               [ "FALSE", "$$ = false;" ]],


        "JSONText": [[ "JSONValue", "return $$ = $1;" ]],

        "JSONValue": [[ "JSONNullLiteral",    "$$ = $1;" ],
                      [ "JSONBooleanLiteral", "$$ = $1;" ],
                      [ "JSONString",         "$$ = $1;" ],
                      [ "JSONNumber",         "$$ = $1;" ],
                      [ "JSONObject",         "$$ = $1;" ],
                      [ "JSONArray",          "$$ = $1;" ]],

        "JSONObject": [[ "{ }", "$$ = {};" ],
                       [ "{ JSONMemberList }", "$$ = $2;" ]],

        "JSONMember": [[ "JSONString : JSONValue", "$$ = [$1, $3];" ]],

        "JSONMemberList": [[ "JSONMember", "$$ = {}; $$[$1[0]] = $1[1];" ],
                           [ "JSONMemberList , JSONMember", "$$ = $1; $1[$3[0]] = $3[1];" ]],

        "JSONArray": [[ "[ ]", "$$ = [];" ],
                      [ "[ JSONElementList ]", "$$ = $2;" ]],

        "JSONElementList": [[ "JSONValue", "$$ = [$1];" ],
                            [ "JSONElementList , JSONValue", "$$ = $1; $1.push($3);" ]]

    },

    "actionInclude": "var Type = yy.Type;"
};

var options = {type: "slr", moduleType: "commonjs", moduleName: "parser"};

exports.main = function main (args) {
    var cwd = fs.path(fs.cwd()),
        parser = new Parser(exports.grammar, options),
        source = parser.generate(),
        stream = cwd.join(args[1] || options.moduleName+".js").open("w");
    stream.print(source).close();
};

if (require.main === module)
    exports.main(system.args);

