#!/usr/bin/env narwhal

var fs = require("file"),
    assert = require("assert"),
    parser = require("../lib/orderly/parse").parser;

// set parser's shared scope
parser.yy = require("../lib/orderly/scope");

exports["test // comment"] = function () {
    var orderly = "// comment \nobject { string foo };";
    assert.ok(parser.parse(orderly));
};
exports["test # comment"] = function () {
    var orderly = "# comment \nobject { string foo };";
    assert.ok(parser.parse(orderly));
};

// positive test cases
var path = fs.path(fs.join(fs.dirname(module.id), "positive_cases"));
path.list().forEach(function (file, i, e) {
    var f = fs.path(path.join(file));
    if (f.extension() === ".orderly") {
        exports["test "+f.basename(".orderly")] = function () {
            var parsed = parser.parse(f.read({charset: "utf-8"}));
            var schema = fs.path(path.join(f.basename(".orderly")+".jsonschema")).read({charset: "utf-8"});
            assert.deepEqual(parsed, JSON.parse(schema));
        };
    }
});

// negative test cases
var npath = fs.path(fs.join(fs.dirname(module.id), "negative_cases"));
npath.list().forEach(function (file, i, e) {
    var f = fs.path(npath.join(file));
    if (f.extension() === ".orderly") {
        exports["test "+f.basename(".orderly")] = function () {
            assert["throws"](function () { parser.parse(f.read({charset: "utf-8"})); });
        };
    }
});

if (require.main === module.id)
    require("os").exit(require("test").run(exports)); 
