/* Jison generated parser as commonjs module *//* Jison generated parser */var parse = (function(){var parser = {log: function log() {
    if (this.DEBUG) {
        print.apply(null, arguments);
    }
},
EOF: '$end',
yy: {},
productions_: [0,["orderly_schema",2],["orderly_schema",1],["named_entries",3],["named_entries",1],["named_entries",0],["unnamed_entries",3],["unnamed_entries",1],["unnamed_entries",0],["named_entry",3],["named_entry",3],["unnamed_entry",2],["unnamed_entry",2],["definition_prefix",2],["definition_prefix",2],["definition_prefix",1],["definition_prefix",1],["definition_prefix",1],["definition_prefix",6],["definition_prefix",5],["definition_prefix",5],["definition_prefix",4],["string_prefix",2],["string_suffix",2],["definition_suffix",5],["csv_property_names",3],["csv_property_names",1],["optional_extra_properties",3],["optional_extra_properties",0],["optional_requires",3],["optional_requires",0],["optional_optional_marker",1],["optional_optional_marker",0],["optional_additional_marker",1],["optional_additional_marker",0],["optional_enum_values",1],["optional_enum_values",0],["optional_default_value",2],["optional_default_value",0],["optional_range",5],["optional_range",4],["optional_range",4],["optional_range",3],["optional_range",0],["property_name",1],["property_name",1],["optional_perl_regex",1],["optional_perl_regex",0],["JSONString",1],["JSONNumber",1],["JSONNullLiteral",1],["JSONBooleanLiteral",1],["JSONBooleanLiteral",1],["JSONText",1],["JSONValue",1],["JSONValue",1],["JSONValue",1],["JSONValue",1],["JSONValue",1],["JSONValue",1],["JSONObject",2],["JSONObject",3],["JSONMember",3],["JSONMemberList",1],["JSONMemberList",3],["JSONArray",2],["JSONArray",3],["JSONElementList",1],["JSONElementList",3]],
performAction: function anonymous(yytext, yylineno, yy) {
    var Type = yy.Type;
    switch (arguments[3]) {
      case 1:
        return arguments[4][arguments[4].length - 2 + 1 - 1];
        break;
      case 2:
        return arguments[4][arguments[4].length - 1 + 1 - 1];
        break;
      case 3:
        this.yyval = arguments[4][arguments[4].length - 3 + 3 - 1];
        this.yyval.unshift(arguments[4][arguments[4].length - 3 + 1 - 1]);
        break;
      case 4:
        this.yyval = [arguments[4][arguments[4].length - 1 + 1 - 1]];
        break;
      case 5:
        this.yyval = [];
        break;
      case 6:
        this.yyval = arguments[4][arguments[4].length - 3 + 3 - 1];
        arguments[4][arguments[4].length - 3 + 3 - 1].unshift(arguments[4][arguments[4].length - 3 + 1 - 1]);
        break;
      case 7:
        this.yyval = [arguments[4][arguments[4].length - 1 + 1 - 1]];
        break;
      case 8:
        this.yyval = [];
        break;
      case 9:
        this.yyval = [arguments[4][arguments[4].length - 3 + 2 - 1], arguments[4][arguments[4].length - 3 + 1 - 1]];
        Type.addOptionals(arguments[4][arguments[4].length - 3 + 1 - 1], arguments[4][arguments[4].length - 3 + 3 - 1]);
        break;
      case 10:
        this.yyval = [arguments[4][arguments[4].length - 3 + 2 - 1], arguments[4][arguments[4].length - 3 + 1 - 1]];
        Type.addOptionals(arguments[4][arguments[4].length - 3 + 1 - 1], arguments[4][arguments[4].length - 3 + 3 - 1]);
        break;
      case 11:
        this.yyval = arguments[4][arguments[4].length - 2 + 1 - 1];
        Type.addOptionals(this.yyval, arguments[4][arguments[4].length - 2 + 2 - 1]);
        break;
      case 12:
        this.yyval = arguments[4][arguments[4].length - 2 + 1 - 1];
        Type.addOptionals(this.yyval, arguments[4][arguments[4].length - 2 + 2 - 1]);
        break;
      case 13:
        this.yyval = new Type("integer", arguments[4][arguments[4].length - 2 + 2 - 1]);
        break;
      case 14:
        this.yyval = new Type("number", arguments[4][arguments[4].length - 2 + 2 - 1]);
        break;
      case 15:
        this.yyval = new Type("boolean");
        break;
      case 16:
        this.yyval = new Type("null");
        break;
      case 17:
        this.yyval = new Type("any");
        break;
      case 18:
        this.yyval = new Type("array", arguments[4][arguments[4].length - 6 + 6 - 1], arguments[4][arguments[4].length - 6 + 3 - 1], arguments[4][arguments[4].length - 6 + 5 - 1]);
        break;
      case 19:
        this.yyval = new Type("array", arguments[4][arguments[4].length - 5 + 5 - 1], arguments[4][arguments[4].length - 5 + 3 - 1]);
        break;
      case 20:
        this.yyval = new Type("object", null, arguments[4][arguments[4].length - 5 + 3 - 1], arguments[4][arguments[4].length - 5 + 5 - 1]);
        break;
      case 21:
        this.yyval = new Type(arguments[4][arguments[4].length - 4 + 3 - 1]);
        break;
      case 22:
        this.yyval = new Type("string", arguments[4][arguments[4].length - 2 + 2 - 1]);
        break;
      case 23:
        this.yyval = arguments[4][arguments[4].length - 2 + 2 - 1];
        this.yyval.pattern = arguments[4][arguments[4].length - 2 + 1 - 1];
        break;
      case 24:
        this.yyval = {enum: arguments[4][arguments[4].length - 5 + 1 - 1], defvalue: arguments[4][arguments[4].length - 5 + 2 - 1], requires: arguments[4][arguments[4].length - 5 + 3 - 1], optional: arguments[4][arguments[4].length - 5 + 4 - 1], extras: arguments[4][arguments[4].length - 5 + 5 - 1]};
        break;
      case 25:
        this.yyval = arguments[4][arguments[4].length - 3 + 1 - 1];
        this.yyval.push(arguments[4][arguments[4].length - 3 + 3 - 1]);
        break;
      case 26:
        this.yyval = [arguments[4][arguments[4].length - 1 + 1 - 1]];
        break;
      case 27:
        this.yyval = arguments[4][arguments[4].length - 3 + 2 - 1];
        break;
      case 28:
        this.yyval = null;
        break;
      case 29:
        this.yyval = arguments[4][arguments[4].length - 3 + 2 - 1];
        break;
      case 30:
        this.yyval = null;
        break;
      case 31:
        this.yyval = true;
        break;
      case 32:
        this.yyval = null;
        break;
      case 33:
        this.yyval = true;
        break;
      case 34:
        this.yyval = null;
        break;
      case 35:
        this.yyval = arguments[4][arguments[4].length - 1 + 1 - 1];
        break;
      case 36:
        this.yyval = null;
        break;
      case 37:
        this.yyval = arguments[4][arguments[4].length - 2 + 2 - 1];
        break;
      case 38:
        this.yyval = yy.NOVALUE;
        break;
      case 39:
        this.yyval = [arguments[4][arguments[4].length - 5 + 2 - 1], arguments[4][arguments[4].length - 5 + 4 - 1]];
        break;
      case 40:
        this.yyval = [arguments[4][arguments[4].length - 4 + 2 - 1], null];
        break;
      case 41:
        this.yyval = [null, arguments[4][arguments[4].length - 4 + 3 - 1]];
        break;
      case 42:
        this.yyval = null;
        break;
      case 43:
        this.yyval = null;
        break;
      case 44:
        this.yyval = arguments[4][arguments[4].length - 1 + 1 - 1];
        break;
      case 45:
        this.yyval = yytext;
        break;
      case 46:
        this.yyval = yytext.substr(1, yytext.length - 2);
        break;
      case 47:
        this.yyval = null;
        break;
      case 48:
        this.yyval = yytext;
        break;
      case 49:
        this.yyval = Number(yytext);
        break;
      case 50:
        this.yyval = null;
        break;
      case 51:
        this.yyval = true;
        break;
      case 52:
        this.yyval = false;
        break;
      case 53:
        return this.yyval = arguments[4][arguments[4].length - 1 + 1 - 1];
        break;
      case 54:
        this.yyval = arguments[4][arguments[4].length - 1 + 1 - 1];
        break;
      case 55:
        this.yyval = arguments[4][arguments[4].length - 1 + 1 - 1];
        break;
      case 56:
        this.yyval = arguments[4][arguments[4].length - 1 + 1 - 1];
        break;
      case 57:
        this.yyval = arguments[4][arguments[4].length - 1 + 1 - 1];
        break;
      case 58:
        this.yyval = arguments[4][arguments[4].length - 1 + 1 - 1];
        break;
      case 59:
        this.yyval = arguments[4][arguments[4].length - 1 + 1 - 1];
        break;
      case 60:
        this.yyval = {};
        break;
      case 61:
        this.yyval = arguments[4][arguments[4].length - 3 + 2 - 1];
        break;
      case 62:
        this.yyval = [arguments[4][arguments[4].length - 3 + 1 - 1], arguments[4][arguments[4].length - 3 + 3 - 1]];
        break;
      case 63:
        this.yyval = {};
        this.yyval[arguments[4][arguments[4].length - 1 + 1 - 1][0]] = arguments[4][arguments[4].length - 1 + 1 - 1][1];
        break;
      case 64:
        this.yyval = arguments[4][arguments[4].length - 3 + 1 - 1];
        arguments[4][arguments[4].length - 3 + 1 - 1][arguments[4][arguments[4].length - 3 + 3 - 1][0]] = arguments[4][arguments[4].length - 3 + 3 - 1][1];
        break;
      case 65:
        this.yyval = [];
        break;
      case 66:
        this.yyval = arguments[4][arguments[4].length - 3 + 2 - 1];
        break;
      case 67:
        this.yyval = [arguments[4][arguments[4].length - 1 + 1 - 1]];
        break;
      case 68:
        this.yyval = arguments[4][arguments[4].length - 3 + 1 - 1];
        arguments[4][arguments[4].length - 3 + 1 - 1].push(arguments[4][arguments[4].length - 3 + 3 - 1]);
        break;
      default:;
    }
},
table: [{"orderly_schema":1,"unnamed_entry":2,"definition_prefix":3,"INTEGER":[["s",4]],"NUMBER":[["s",5]],"BOOLEAN":[["s",6]],"NULL":[["s",7]],"ANY":[["s",8]],"ARRAY":[["s",9]],"OBJECT":[["s",10]],"UNION":[["s",11]],"string_prefix":12,"STRING":[["s",13]]},{"$end":[["a"]]},{";":[["s",14]],"$end":[["r",2]]},{"definition_suffix":15,"optional_enum_values":16,"JSONArray":17,"[":[["s",18]],"=":[["r",36]],"<":[["r",36]],"?":[["r",36]],"`":[["r",36]],";":[["r",36]],"$end":[["r",36]],"}":[["r",36]],"]":[["r",36]]},{"optional_range":19,"{":[["s",20]],"STRING_LIT":[["r",43]],"PROPERTY":[["r",43]],"[":[["r",43]],"=":[["r",43]],"<":[["r",43]],"?":[["r",43]],"`":[["r",43]],";":[["r",43]],"$end":[["r",43]],"REGEX":[["r",43]],"]":[["r",43]],"}":[["r",43]]},{"optional_range":21,"{":[["s",20]],"STRING_LIT":[["r",43]],"PROPERTY":[["r",43]],"[":[["r",43]],"=":[["r",43]],"<":[["r",43]],"?":[["r",43]],"`":[["r",43]],";":[["r",43]],"$end":[["r",43]],"REGEX":[["r",43]],"]":[["r",43]],"}":[["r",43]]},{"STRING_LIT":[["r",15]],"PROPERTY":[["r",15]],"[":[["r",15]],"=":[["r",15]],"<":[["r",15]],"?":[["r",15]],"`":[["r",15]],";":[["r",15]],"$end":[["r",15]],"]":[["r",15]],"}":[["r",15]]},{"STRING_LIT":[["r",16]],"PROPERTY":[["r",16]],"[":[["r",16]],"=":[["r",16]],"<":[["r",16]],"?":[["r",16]],"`":[["r",16]],";":[["r",16]],"$end":[["r",16]],"]":[["r",16]],"}":[["r",16]]},{"STRING_LIT":[["r",17]],"PROPERTY":[["r",17]],"[":[["r",17]],"=":[["r",17]],"<":[["r",17]],"?":[["r",17]],"`":[["r",17]],";":[["r",17]],"$end":[["r",17]],"]":[["r",17]],"}":[["r",17]]},{"{":[["s",22]],"[":[["s",23]]},{"{":[["s",24]]},{"{":[["s",25]]},{"string_suffix":26,"optional_perl_regex":27,"REGEX":[["s",28]],"[":[["r",47]],"=":[["r",47]],"<":[["r",47]],"?":[["r",47]],"`":[["r",47]],";":[["r",47]],"$end":[["r",47]],"}":[["r",47]],"]":[["r",47]]},{"optional_range":29,"{":[["s",20]],"STRING_LIT":[["r",43]],"PROPERTY":[["r",43]],"[":[["r",43]],"=":[["r",43]],"<":[["r",43]],"?":[["r",43]],"`":[["r",43]],";":[["r",43]],"$end":[["r",43]],"REGEX":[["r",43]],"]":[["r",43]],"}":[["r",43]]},{"$end":[["r",1]]},{";":[["r",11]],"$end":[["r",11]],"]":[["r",11]],"}":[["r",11]]},{"optional_default_value":30,"=":[["s",31]],"<":[["r",38]],"?":[["r",38]],"`":[["r",38]],";":[["r",38]],"$end":[["r",38]],"}":[["r",38]],"]":[["r",38]]},{"=":[["r",35]],"<":[["r",35]],"?":[["r",35]],"`":[["r",35]],";":[["r",35]],"$end":[["r",35]],"}":[["r",35]],"]":[["r",35]]},{"]":[["s",32]],"JSONElementList":33,"JSONValue":34,"JSONNullLiteral":35,"NULL":[["s",36]],"JSONBooleanLiteral":37,"TRUE":[["s",38]],"FALSE":[["s",39]],"JSONString":40,"STRING_LIT":[["s",41]],"JSONNumber":42,"NUMBER_LIT":[["s",43]],"JSONObject":44,"{":[["s",45]],"JSONArray":46,"[":[["s",18]]},{"STRING_LIT":[["r",13]],"PROPERTY":[["r",13]],"[":[["r",13]],"=":[["r",13]],"<":[["r",13]],"?":[["r",13]],"`":[["r",13]],";":[["r",13]],"$end":[["r",13]],"]":[["r",13]],"}":[["r",13]]},{"JSONNumber":47,",":[["s",48]],"NUMBER_LIT":[["s",43]]},{"STRING_LIT":[["r",14]],"PROPERTY":[["r",14]],"[":[["r",14]],"=":[["r",14]],"<":[["r",14]],"?":[["r",14]],"`":[["r",14]],";":[["r",14]],"$end":[["r",14]],"]":[["r",14]],"}":[["r",14]]},{"unnamed_entries":49,"unnamed_entry":50,"definition_prefix":3,"INTEGER":[["s",4]],"NUMBER":[["s",5]],"BOOLEAN":[["s",6]],"NULL":[["s",7]],"ANY":[["s",8]],"ARRAY":[["s",9]],"OBJECT":[["s",10]],"UNION":[["s",11]],"string_prefix":12,"STRING":[["s",13]],"}":[["r",8]]},{"unnamed_entry":51,"definition_prefix":3,"INTEGER":[["s",4]],"NUMBER":[["s",5]],"BOOLEAN":[["s",6]],"NULL":[["s",7]],"ANY":[["s",8]],"ARRAY":[["s",9]],"OBJECT":[["s",10]],"UNION":[["s",11]],"string_prefix":12,"STRING":[["s",13]]},{"named_entries":52,"named_entry":53,"definition_prefix":54,"INTEGER":[["s",4]],"NUMBER":[["s",5]],"BOOLEAN":[["s",6]],"NULL":[["s",7]],"ANY":[["s",8]],"ARRAY":[["s",9]],"OBJECT":[["s",10]],"UNION":[["s",11]],"string_prefix":55,"STRING":[["s",13]],"}":[["r",5]]},{"unnamed_entries":56,"unnamed_entry":50,"definition_prefix":3,"INTEGER":[["s",4]],"NUMBER":[["s",5]],"BOOLEAN":[["s",6]],"NULL":[["s",7]],"ANY":[["s",8]],"ARRAY":[["s",9]],"OBJECT":[["s",10]],"UNION":[["s",11]],"string_prefix":12,"STRING":[["s",13]],"}":[["r",8]]},{";":[["r",12]],"$end":[["r",12]],"]":[["r",12]],"}":[["r",12]]},{"definition_suffix":57,"optional_enum_values":16,"JSONArray":17,"[":[["s",18]],"=":[["r",36]],"<":[["r",36]],"?":[["r",36]],"`":[["r",36]],";":[["r",36]],"$end":[["r",36]],"}":[["r",36]],"]":[["r",36]]},{"[":[["r",46]],"=":[["r",46]],"<":[["r",46]],"?":[["r",46]],"`":[["r",46]],";":[["r",46]],"$end":[["r",46]],"}":[["r",46]],"]":[["r",46]]},{"STRING_LIT":[["r",22]],"PROPERTY":[["r",22]],"REGEX":[["r",22]],"[":[["r",22]],"=":[["r",22]],"<":[["r",22]],"?":[["r",22]],"`":[["r",22]],";":[["r",22]],"$end":[["r",22]],"]":[["r",22]],"}":[["r",22]]},{"optional_requires":58,"<":[["s",59]],"?":[["r",30]],"`":[["r",30]],";":[["r",30]],"$end":[["r",30]],"}":[["r",30]],"]":[["r",30]]},{"JSONValue":60,"JSONNullLiteral":35,"NULL":[["s",36]],"JSONBooleanLiteral":37,"TRUE":[["s",38]],"FALSE":[["s",39]],"JSONString":40,"STRING_LIT":[["s",41]],"JSONNumber":42,"NUMBER_LIT":[["s",43]],"JSONObject":44,"{":[["s",45]],"JSONArray":46,"[":[["s",18]]},{"=":[["r",65]],"<":[["r",65]],"?":[["r",65]],"`":[["r",65]],";":[["r",65]],"$end":[["r",65]],"}":[["r",65]],"]":[["r",65]],",":[["r",65]]},{"]":[["s",61]],",":[["s",62]]},{"]":[["r",67]],",":[["r",67]]},{"<":[["r",54]],"?":[["r",54]],"`":[["r",54]],";":[["r",54]],"$end":[["r",54]],"]":[["r",54]],",":[["r",54]],"}":[["r",54]]},{"<":[["r",50]],"?":[["r",50]],"`":[["r",50]],";":[["r",50]],"$end":[["r",50]],"]":[["r",50]],",":[["r",50]],"}":[["r",50]]},{"<":[["r",55]],"?":[["r",55]],"`":[["r",55]],";":[["r",55]],"$end":[["r",55]],"]":[["r",55]],",":[["r",55]],"}":[["r",55]]},{"<":[["r",51]],"?":[["r",51]],"`":[["r",51]],";":[["r",51]],"$end":[["r",51]],"]":[["r",51]],",":[["r",51]],"}":[["r",51]]},{"<":[["r",52]],"?":[["r",52]],"`":[["r",52]],";":[["r",52]],"$end":[["r",52]],"]":[["r",52]],",":[["r",52]],"}":[["r",52]]},{"<":[["r",56]],"?":[["r",56]],"`":[["r",56]],";":[["r",56]],"$end":[["r",56]],"]":[["r",56]],",":[["r",56]],"}":[["r",56]]},{"[":[["r",48]],"=":[["r",48]],"<":[["r",48]],"?":[["r",48]],"`":[["r",48]],";":[["r",48]],"REGEX":[["r",48]],",":[["r",48]],"$end":[["r",48]],":":[["r",48]],"}":[["r",48]],">":[["r",48]],"]":[["r",48]]},{"<":[["r",57]],"?":[["r",57]],"`":[["r",57]],";":[["r",57]],"$end":[["r",57]],"]":[["r",57]],",":[["r",57]],"}":[["r",57]]},{",":[["r",49]],"}":[["r",49]],"<":[["r",49]],"?":[["r",49]],"`":[["r",49]],";":[["r",49]],"$end":[["r",49]],"]":[["r",49]]},{"<":[["r",58]],"?":[["r",58]],"`":[["r",58]],";":[["r",58]],"$end":[["r",58]],"]":[["r",58]],",":[["r",58]],"}":[["r",58]]},{"}":[["s",63]],"JSONMemberList":64,"JSONMember":65,"JSONString":66,"STRING_LIT":[["s",41]]},{"<":[["r",59]],"?":[["r",59]],"`":[["r",59]],";":[["r",59]],"$end":[["r",59]],"]":[["r",59]],",":[["r",59]],"}":[["r",59]]},{",":[["s",67]]},{"JSONNumber":68,"}":[["s",69]],"NUMBER_LIT":[["s",43]]},{"}":[["s",70]]},{";":[["s",71]],"}":[["r",7]]},{"]":[["s",72]]},{"}":[["s",73]]},{";":[["s",74]],"}":[["r",4]]},{"property_name":75,"JSONString":76,"STRING_LIT":[["s",41]],"PROPERTY":[["s",77]]},{"property_name":78,"JSONString":76,"STRING_LIT":[["s",41]],"PROPERTY":[["s",77]]},{"}":[["s",79]]},{";":[["r",23]],"$end":[["r",23]],"}":[["r",23]],"]":[["r",23]]},{"optional_optional_marker":80,"?":[["s",81]],"`":[["r",32]],";":[["r",32]],"$end":[["r",32]],"}":[["r",32]],"]":[["r",32]]},{"csv_property_names":82,"property_name":83,"JSONString":76,"STRING_LIT":[["s",41]],"PROPERTY":[["s",77]]},{"<":[["r",37]],"?":[["r",37]],"`":[["r",37]],";":[["r",37]],"$end":[["r",37]],"}":[["r",37]],"]":[["r",37]]},{"=":[["r",66]],"<":[["r",66]],"?":[["r",66]],"`":[["r",66]],";":[["r",66]],"$end":[["r",66]],"}":[["r",66]],"]":[["r",66]],",":[["r",66]]},{"JSONValue":84,"JSONNullLiteral":35,"NULL":[["s",36]],"JSONBooleanLiteral":37,"TRUE":[["s",38]],"FALSE":[["s",39]],"JSONString":40,"STRING_LIT":[["s",41]],"JSONNumber":42,"NUMBER_LIT":[["s",43]],"JSONObject":44,"{":[["s",45]],"JSONArray":46,"[":[["s",18]]},{"`":[["r",60]],"<":[["r",60]],"?":[["r",60]],";":[["r",60]],"$end":[["r",60]],"]":[["r",60]],",":[["r",60]],"}":[["r",60]]},{"}":[["s",85]],",":[["s",86]]},{"}":[["r",63]],",":[["r",63]]},{":":[["s",87]]},{"JSONNumber":88,"}":[["s",89]],"NUMBER_LIT":[["s",43]]},{"}":[["s",90]]},{"STRING_LIT":[["r",42]],"PROPERTY":[["r",42]],"[":[["r",42]],"=":[["r",42]],"<":[["r",42]],"?":[["r",42]],"`":[["r",42]],";":[["r",42]],"$end":[["r",42]],"REGEX":[["r",42]],"]":[["r",42]],"}":[["r",42]]},{"optional_additional_marker":91,"*":[["s",92]],"{":[["r",34]],"STRING_LIT":[["r",34]],"PROPERTY":[["r",34]],"[":[["r",34]],"=":[["r",34]],"<":[["r",34]],"?":[["r",34]],"`":[["r",34]],";":[["r",34]],"$end":[["r",34]],"]":[["r",34]],"}":[["r",34]]},{"unnamed_entries":93,"unnamed_entry":50,"definition_prefix":3,"INTEGER":[["s",4]],"NUMBER":[["s",5]],"BOOLEAN":[["s",6]],"NULL":[["s",7]],"ANY":[["s",8]],"ARRAY":[["s",9]],"OBJECT":[["s",10]],"UNION":[["s",11]],"string_prefix":12,"STRING":[["s",13]],"}":[["r",8]]},{"optional_range":94,"{":[["s",20]],"STRING_LIT":[["r",43]],"PROPERTY":[["r",43]],"[":[["r",43]],"=":[["r",43]],"<":[["r",43]],"?":[["r",43]],"`":[["r",43]],";":[["r",43]],"$end":[["r",43]],"REGEX":[["r",43]],"]":[["r",43]],"}":[["r",43]]},{"optional_additional_marker":95,"*":[["s",92]],"{":[["r",34]],"STRING_LIT":[["r",34]],"PROPERTY":[["r",34]],"[":[["r",34]],"=":[["r",34]],"<":[["r",34]],"?":[["r",34]],"`":[["r",34]],";":[["r",34]],"$end":[["r",34]],"]":[["r",34]],"}":[["r",34]]},{"named_entries":96,"named_entry":53,"definition_prefix":54,"INTEGER":[["s",4]],"NUMBER":[["s",5]],"BOOLEAN":[["s",6]],"NULL":[["s",7]],"ANY":[["s",8]],"ARRAY":[["s",9]],"OBJECT":[["s",10]],"UNION":[["s",11]],"string_prefix":55,"STRING":[["s",13]],"}":[["r",5]]},{"definition_suffix":97,"optional_enum_values":16,"JSONArray":17,"[":[["s",18]],"=":[["r",36]],"<":[["r",36]],"?":[["r",36]],"`":[["r",36]],";":[["r",36]],"$end":[["r",36]],"}":[["r",36]],"]":[["r",36]]},{"[":[["r",44]],"=":[["r",44]],"<":[["r",44]],"?":[["r",44]],"`":[["r",44]],";":[["r",44]],"REGEX":[["r",44]],",":[["r",44]],"}":[["r",44]],">":[["r",44]]},{"[":[["r",45]],"=":[["r",45]],"<":[["r",45]],"?":[["r",45]],"`":[["r",45]],";":[["r",45]],"REGEX":[["r",45]],",":[["r",45]],"}":[["r",45]],">":[["r",45]]},{"string_suffix":98,"optional_perl_regex":27,"REGEX":[["s",28]],"[":[["r",47]],"=":[["r",47]],"<":[["r",47]],"?":[["r",47]],"`":[["r",47]],";":[["r",47]],"$end":[["r",47]],"}":[["r",47]],"]":[["r",47]]},{"STRING_LIT":[["r",21]],"PROPERTY":[["r",21]],"[":[["r",21]],"=":[["r",21]],"<":[["r",21]],"?":[["r",21]],"`":[["r",21]],";":[["r",21]],"$end":[["r",21]],"]":[["r",21]],"}":[["r",21]]},{"optional_extra_properties":99,"`":[["s",100]],";":[["r",28]],"$end":[["r",28]],"}":[["r",28]],"]":[["r",28]]},{"`":[["r",31]],";":[["r",31]],"$end":[["r",31]],"}":[["r",31]],"]":[["r",31]]},{">":[["s",101]],",":[["s",102]]},{",":[["r",26]],">":[["r",26]]},{"]":[["r",68]],",":[["r",68]]},{"`":[["r",61]],"<":[["r",61]],"?":[["r",61]],";":[["r",61]],"$end":[["r",61]],"]":[["r",61]],",":[["r",61]],"}":[["r",61]]},{"JSONMember":103,"JSONString":66,"STRING_LIT":[["s",41]]},{"JSONValue":104,"JSONNullLiteral":35,"NULL":[["s",36]],"JSONBooleanLiteral":37,"TRUE":[["s",38]],"FALSE":[["s",39]],"JSONString":40,"STRING_LIT":[["s",41]],"JSONNumber":42,"NUMBER_LIT":[["s",43]],"JSONObject":44,"{":[["s",45]],"JSONArray":46,"[":[["s",18]]},{"}":[["s",105]]},{"STRING_LIT":[["r",40]],"PROPERTY":[["r",40]],"[":[["r",40]],"=":[["r",40]],"<":[["r",40]],"?":[["r",40]],"`":[["r",40]],";":[["r",40]],"$end":[["r",40]],"REGEX":[["r",40]],"]":[["r",40]],"}":[["r",40]]},{"STRING_LIT":[["r",41]],"PROPERTY":[["r",41]],"[":[["r",41]],"=":[["r",41]],"<":[["r",41]],"?":[["r",41]],"`":[["r",41]],";":[["r",41]],"$end":[["r",41]],"REGEX":[["r",41]],"]":[["r",41]],"}":[["r",41]]},{"optional_range":106,"{":[["s",20]],"STRING_LIT":[["r",43]],"PROPERTY":[["r",43]],"[":[["r",43]],"=":[["r",43]],"<":[["r",43]],"?":[["r",43]],"`":[["r",43]],";":[["r",43]],"$end":[["r",43]],"REGEX":[["r",43]],"]":[["r",43]],"}":[["r",43]]},{"{":[["r",33]],"STRING_LIT":[["r",33]],"PROPERTY":[["r",33]],"[":[["r",33]],"=":[["r",33]],"<":[["r",33]],"?":[["r",33]],"`":[["r",33]],";":[["r",33]],"$end":[["r",33]],"]":[["r",33]],"}":[["r",33]]},{"}":[["r",6]]},{"STRING_LIT":[["r",19]],"PROPERTY":[["r",19]],"[":[["r",19]],"=":[["r",19]],"<":[["r",19]],"?":[["r",19]],"`":[["r",19]],";":[["r",19]],"$end":[["r",19]],"]":[["r",19]],"}":[["r",19]]},{"STRING_LIT":[["r",20]],"PROPERTY":[["r",20]],"[":[["r",20]],"=":[["r",20]],"<":[["r",20]],"?":[["r",20]],"`":[["r",20]],";":[["r",20]],"$end":[["r",20]],"]":[["r",20]],"}":[["r",20]]},{"}":[["r",3]]},{";":[["r",9]],"}":[["r",9]]},{";":[["r",10]],"}":[["r",10]]},{";":[["r",24]],"$end":[["r",24]],"}":[["r",24]],"]":[["r",24]]},{"JSONObject":107,"{":[["s",45]]},{"?":[["r",29]],"`":[["r",29]],";":[["r",29]],"$end":[["r",29]],"}":[["r",29]],"]":[["r",29]]},{"property_name":108,"JSONString":76,"STRING_LIT":[["s",41]],"PROPERTY":[["s",77]]},{"}":[["r",64]],",":[["r",64]]},{"}":[["r",62]],",":[["r",62]]},{"STRING_LIT":[["r",39]],"PROPERTY":[["r",39]],"[":[["r",39]],"=":[["r",39]],"<":[["r",39]],"?":[["r",39]],"`":[["r",39]],";":[["r",39]],"$end":[["r",39]],"REGEX":[["r",39]],"]":[["r",39]],"}":[["r",39]]},{"STRING_LIT":[["r",18]],"PROPERTY":[["r",18]],"[":[["r",18]],"=":[["r",18]],"<":[["r",18]],"?":[["r",18]],"`":[["r",18]],";":[["r",18]],"$end":[["r",18]],"]":[["r",18]],"}":[["r",18]]},{"`":[["s",109]]},{",":[["r",25]],">":[["r",25]]},{";":[["r",27]],"$end":[["r",27]],"}":[["r",27]],"]":[["r",27]]}],
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], table = this.table, yytext = "", yylineno = 0, EOF = this.EOF;
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;

    function lex() {
        var token;
        token = self.lexer.lex();
        return token || EOF;
    }

    var symbol, state, action, a, r, yyval = {}, p, len, ip = 0, newState;
    symbol = lex();
    while (true) {
        this.log("stack:", JSON.stringify(stack), "\n\t\t\tinput:", this.lexer._input);
        this.log("vstack:", JSON.stringify(vstack));
        state = stack[stack.length - 1];
        action = table[state] && table[state][symbol];
        if (typeof action == "undefined" || !action.length || !action[0]) {
            throw new Error("Parse error on line " + yylineno + ". Unexpected symbol: " + symbol + ".\n stack:" + JSON.stringify(stack) + ", input:" + this.lexer.upcomingInput());
        }
        this.log("action:", action);
        if (action.length > 1) {
            throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
        }
        a = action[0];
        switch (a[0]) {
          case "s":
            stack.push(symbol);
            ++ip;
            yytext = this.lexer.yytext;
            yylineno = this.lexer.yylineno;
            symbol = lex();
            vstack.push(null);
            stack.push(a[1]);
            break;
          case "r":
            len = this.productions_[a[1]][1];
            this.log("reduce by: ", a[1]);
            yyval.yyval = vstack[vstack.length - len];
            r = this.performAction.call(yyval, yytext, yylineno, this.yy, a[1], vstack);
            if (r != undefined) {
                return r;
            }
            this.log("yyval=", JSON.stringify(yyval.yyval));
            if (len) {
                this.log("produciton length:", len);
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[a[1]][0]);
            vstack.push(yyval.yyval);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
          case "a":
            this.log("stack:", stack, "\n\tinput:", this.lexer._input);
            this.log("vstack:", JSON.stringify(vstack));
            return true;
          default:;
        }
    }
    return true;
}};/* Jison generated lexer */
var lexer = (function(){var lexer = ({EOF:"",
setInput:function (input) {
    this._input = input;
    this._more = this._less = this.done = false;
    this.yylineno = this.yyleng = 0;
    this.yytext = "";
    return this;
},
input:function () {
    var ch = this._input[0];
    this._input = this._input.slice(1);
    return ch;
},
unput:function (ch) {
    this._input = ch + this._input;
    return this;
},
more:function () {
    this._more = true;
    return this;
},
upcomingInput:function () {
    return this._input.substr(0, 20) + (this._input.length > 20 ? "..." : "");
},
next:function () {
    if (this.done) {
        return this.EOF;
    }
    if (!this._input) {
        this.done = true;
    }
    var token, match, lines;
    if (!this._more) {
        this.yytext = "";
    }
    for (var i = 0; i < this.rules.length; i++) {
        match = this._input.match(this.rules[i]);
        if (match) {
            lines = match[0].match(/\n/g);
            if (lines) {
                this.yylineno += lines.length;
            }
            this.yytext += match[0];
            this.yyleng = this.yytext.length;
            this._more = false;
            this._input = this._input.slice(match[0].length);
            token = this.performAction.call(this, this.yy, i);
            if (token) {
                return token;
            } else {
                return;
            }
        }
    }
    if (this._input == this.EOF) {
        return this.EOF;
    } else {
        throw new Error("Lexical error on line " + this.yylineno + ": No match found for input: " + this.upcomingInput());
    }
},
lex:function () {
    var r = this.next();
    if (r != undefined) {
        return r;
    } else {
        return this.lex();
    }
}});
lexer.performAction = function anonymous(yy) {
    switch (arguments[1]) {
      case 0:
        break;
      case 1:
        break;
      case 2:
        break;
      case 3:
        return ";";
        break;
      case 4:
        return ",";
        break;
      case 5:
        return "{";
        break;
      case 6:
        return "}";
        break;
      case 7:
        return "[";
        break;
      case 8:
        return "]";
        break;
      case 9:
        return "`";
        break;
      case 10:
        return "<";
        break;
      case 11:
        return ">";
        break;
      case 12:
        return ":";
        break;
      case 13:
        return "OBJECT";
        break;
      case 14:
        return "INTEGER";
        break;
      case 15:
        return "NUMBER";
        break;
      case 16:
        return "NULL";
        break;
      case 17:
        return "BOOLEAN";
        break;
      case 18:
        return "ANY";
        break;
      case 19:
        return "ARRAY";
        break;
      case 20:
        return "UNION";
        break;
      case 21:
        return "STRING";
        break;
      case 22:
        return "TRUE";
        break;
      case 23:
        return "FALSE";
        break;
      case 24:
        this.yytext = this.yytext.substr(1, this.yyleng - 2);
        return "STRING_LIT";
        break;
      case 25:
        return "NUMBER_LIT";
        break;
      case 26:
        return "PROPERTY";
        break;
      case 27:
        return "?";
        break;
      case 28:
        return "*";
        break;
      case 29:
        return "=";
        break;
      case 30:
        return "REGEX";
        break;
      default:;
    }
};
lexer.rules = [/^\s+/, /^\/\/[^\n]*/, /^#[^\n]*/, /^;/, /^,/, /^\{/, /^\}/, /^\[/, /^\]/, /^`/, /^</, /^>/, /^:/, /^object\b/, /^integer\b/, /^number\b/, /^null\b/, /^boolean\b/, /^any\b/, /^array\b/, /^union\b/, /^string\b/, /^true\b/, /^false\b/, /^"(?:\\["bfnrt\/\\]|\\u[a-fA-F0-9]{4}|[^"\\])*"/, /^-?(?:[0-9]|[1-9][0-9]+)(?:\.[0-9]+)?(?:[eE][-+]?[0-9]+)?\b/, /^[A-Za-z_0-9-]+/, /^\?/, /^\*/, /^=/, /^\/(?:[^\/]|\/)*\//];return lexer;})()
parser.lexer = lexer; return parser; })();
exports.parser = parse;
exports.parse = function () { return parse.parse.apply(parse, arguments); }
exports.main = function commonjsMain(args) {
    var cwd = require("file").path(require("file").cwd());
    if (!args[1]) {
        throw new Error("Usage: " + args[0] + " FILE");
    }
    var source = cwd.join(args[1]).read({charset: "utf-8"});
    this.parse(source);
}
if (require.main === module.id) exports.main(require("system").args);
