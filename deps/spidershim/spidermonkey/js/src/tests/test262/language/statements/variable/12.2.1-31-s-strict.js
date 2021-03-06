'use strict';
// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 12.2.1-31-s
description: >
    eval as local var identifier defined twice throws SyntaxError in
    strict mode
flags: [onlyStrict]
---*/


assert.throws(SyntaxError, function() {
    eval('function foo() { var eval, eval;}');
});

reportCompare(0, 0);
