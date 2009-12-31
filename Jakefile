#!/usr/bin/env narwhal
 
var FILE = require("file"),
    ENV = require("system").env,
    OS = require("os"),
    jake = require("jake");

var cwd = FILE.path(FILE.cwd());

jake.task("build", ["build_commonjs", "build_web"]);

jake.task("build_commonjs", function () {
    OS.system(['narwhal', 'src/grammar.js', 'lib/orderly/parse.js']);
});

jake.task("build_web", function () {
    var parse = cwd.join('lib', 'orderly', 'parse.js'),
        scope = cwd.join('lib', 'orderly', 'scope.js'),
        orderly = cwd.join('lib', 'orderly.js');

    var source = ["var orderly = (function(){var exports={};"];
    source.push(parse.read({charset: "utf-8"}),
        scope.read({charset: "utf-8"}),
        orderly.read({charset: "utf-8"}),
        "return exports;})()");

    source = require("jsmin").encode(source.join("\n"));

    var stream = cwd.join('web', 'orderly.js').open("w");
    stream.print(source).close();
});

jake.task("test", function () {
    OS.system(['narwhal', 'tests/all-tests.js']);
});
