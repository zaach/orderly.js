Orderly.js
==========

A CommonJS module that compiles Orderly to JSONSchema
------------------------------------------------------
> [Orderly](http://orderly-json.org/) is a textual format for describing JSON. Orderly can be compiled into JSONSchema. It is designed to be easy to read and write.

Usage
-----
    var orderly = require("orderly");

    var orderlySource = "array {};";

    var jsonSchemaSource = orderly.compile(orderlySource);

    var jsonSchemaObject = orderly.parse(orderlySource);

    print(JSON.stringify(jsonSchemaObject));


Usage from a web page
-----
The minified, web version of orderly.js is found in `web/orderly.js`. Just include it in your web page to use the `orderly` object:

    <script src="json2.js"></script>
    <script src="orderly.js"></script>
    <script>
        var orderlySource = "array {};";
        var jsonSchemaSource = orderly.compile(orderlySource);
        var jsonSchemaObject = orderly.parse(orderlySource);
    </script>

Orderly.js includes it's own JSON parser, but you'll need a JSON stringifier such as [json2.js](http://json.org/json2.js) in order to compile to JSON Schema.


License
-------

> Copyright (c) 2009 Zachary Carter
> 
>  Permission is hereby granted, free of
> charge, to any person  obtaining a
> copy of this software and associated
> documentation  files (the "Software"),
> to deal in the Software without 
> restriction, including without
> limitation the rights to use,  copy,
> modify, merge, publish, distribute,
> sublicense, and/or sell  copies of the
> Software, and to permit persons to
> whom the  Software is furnished to do
> so, subject to the following 
> conditions:
> 
>  The above copyright notice and this
> permission notice shall be  included
> in all copies or substantial portions
> of the Software.
> 
>  THE SOFTWARE IS PROVIDED "AS IS",
> WITHOUT WARRANTY OF ANY KIND,  EXPRESS
> OR IMPLIED, INCLUDING BUT NOT LIMITED
> TO THE WARRANTIES  OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND 
> NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT  HOLDERS BE
> LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY,  WHETHER IN AN ACTION OF
> CONTRACT, TORT OR OTHERWISE, ARISING 
> FROM, OUT OF OR IN CONNECTION WITH THE
> SOFTWARE OR THE USE OR  OTHER DEALINGS
> IN THE SOFTWARE.
