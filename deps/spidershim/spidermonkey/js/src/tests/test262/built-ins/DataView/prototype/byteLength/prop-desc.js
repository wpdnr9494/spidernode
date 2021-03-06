// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-get-dataview.prototype.bytelength
es6id: 24.2.4.2
description: >
  "byteLength" property of DataView.prototype
info: |
  24.2.4.2 get DataView.prototype.byteLength

  DataView.prototype.byteLength is an accessor property whose set accessor
  function is undefined.

  Section 17: Every accessor property described in clauses 18 through 26 and in
  Annex B.2 has the attributes {[[Enumerable]]: false, [[Configurable]]: true }
includes: [propertyHelper.js]
---*/

var desc = Object.getOwnPropertyDescriptor(DataView.prototype, "byteLength");

assert.sameValue(desc.set, undefined);
assert.sameValue(typeof desc.get, "function");

verifyNotEnumerable(DataView.prototype, "byteLength");
verifyConfigurable(DataView.prototype, "byteLength");

reportCompare(0, 0);
