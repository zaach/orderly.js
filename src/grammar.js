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
            ["//[^\n]*", "/* skip comment */"],
            ["#[^\n]*", "/* skip comment */"],
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
            ["\/(?:[^/]|\/)*\/", "return 'REGEX';"]
        ]
    },

    "tokens": "STRING_LIT NUMBER_LIT PROPERTY STRING NUMBER OBJECT ANY ARRAY BOOLEAN UNION INTEGER REGEX ? * = { } [ ] , : ; ` < > TRUE FALSE NULL",

    "bnf": {
        "orderly_schema": [ "named_entry ;",
                            "named_entry",
                            "unnamed_entry ;",
                            "unnamed_entry" ],

        "named_entries": [ "named_entry ; named_entries",
                           "named_entry",
                           "" ],

        "unnamed_entries": [ "unnamed_entry ; unnamed_entries",
                             "unnamed_entry",
                             "" ],

        "named_entry": [ "definition_prefix property_name definition_suffix",
                         "string_prefix property_name string_suffix" ],

        "unnamed_entry": [ "definition_prefix definition_suffix",
                           "string_prefix string_suffix" ],

        "definition_prefix": [ "INTEGER optional_range",
                               "NUMBER optional_range",
                               "BOOLEAN",
                               "NULL",
                               "ANY",
                               "ARRAY { unnamed_entries } optional_additional_marker optional_range",
                               "ARRAY [ unnamed_entry ] optional_range",
                               "OBJECT { named_entries } optional_additional_marker",
                               "UNION { unnamed_entries }" ],

        "string_prefix": [ "STRING optional_range" ],

        "string_suffix": [ "optional_perl_regex definition_suffix" ],

        "definition_suffix": [ "optional_enum_values optional_default_value optional_requires optional_optional_marker optional_extra_properties" ],

        "csv_property_names": [ "property_name , csv_property_names",
                                "property_name" ],

        "optional_extra_properties": [ "` JSONObject `",
                                       "" ],

        "optional_requires": [ "< csv_property_names >",
                               "" ],

        "optional_optional_marker": [ "?",
                                      "" ],

        "optional_additional_marker": [ "*",
                                        "" ],

        "optional_enum_values": [ "JSONArray",
                                  "" ],

        "optional_default_value": [ "= JSONValue",
                                    "" ],

        "optional_range": [ "{ JSONNumber , JSONNumber }",
                            "{ JSONNumber , }",
                            "{ , }",
                            "" ],

        "property_name": [ "JSONString",
                           "PROPERTY" ],

        "optional_perl_regex": [ "REGEX",
                                 "" ],


        "JSONString": [[ "STRING_LIT", "$$ = yytext;" ]],

        "JSONNumber": [[ "NUMBER_LIT", "$$ = Number(yytext);" ]],

        "JSONNullLiteral": [[ "NULL", "$$ = null;" ]],

        "JSONBooleanLiteral": [[ "TRUE", "$$ = true;" ],
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

    }
};

var options = {type: "slr", moduleType: "commonjs", moduleName: "orderly"};

exports.main = function main (args) {
    var cwd = fs.path(fs.cwd()),
        parser = new Parser(exports.grammar, options);
        //code = new Parser(exports.grammar, options).generate(),
        //stream = cwd.join(options.moduleName+".js").open("w");
    //stream.print(code).close();
};

if (require.main === module.id)
    exports.main(system.args);

