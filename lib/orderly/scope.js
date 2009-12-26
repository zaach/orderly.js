// these exports are exposed through the yy namespace within parsing/lexing actions

exports.NOVALUE = {};

exports.Type = function () {
    return this.init.apply(this, arguments);
};

exports.Type.prototype = {
    init: function (type, range, entries, additional) {
        this.json = {};
        this.json.type = type;

        if (range) {
            this.addRange(range);
        }
        if (entries) {
            this.addEntries(entries);
        }
        if (additional) {
            this.json.additionalProperties = true;
        }
        return this.json;
    },
    addEntries: function (entries) {
        if (this.json.type === "array") {
            this.json.items = entries;
        } else if (entries.length) {
            this.json.properties = {};
            for (var i=0;i<entries.length;i++) {
                this.json.properties[entries[i][0]] = entries[i][1];
            }
        }
    },
    addRange: function (tuple) {
        var suf = this.json.type === 'array' ? 'Items' : this.json.type === 'string' ? 'Length' : 'imum';
        if (tuple[0] !== null) this.json['min'+suf] = tuple[0];
        if (tuple[1] !== null) this.json['max'+suf] = tuple[1];
    }
};

exports.Type.addOptionals = function (type, o) {
    if (o.extras) {
        var prop;
        for (prop in o.extras) if (o.extras.hasOwnProperty(prop))
            type[prop] = o.extras[prop];
    }
    if (o.optional) {
        type.optional = true;
    }
    if (o.enum) {
        type.enum = o.enum;
    }
    if (o.requires) {
        type.requires = o.requires.length > 1 ? o.requires : o.requires[0];
    }
    if (o.defvalue !== exports.NOVALUE) {
        type["default"] = o.defvalue;
    }
    if (o.pattern) {
        type.pattern = o.pattern;
    }
};

