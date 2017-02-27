// |reftest| skip-if(!this.hasOwnProperty('Intl')||!this.hasOwnProperty('addIntlExtras')) -- needs Intl, needs addIntlExtras
// Copyright 2016 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
esid: sec-Intl.PluralRules.prototype.resolvedOptions
description: >
    Tests that the object returned by
    Intl.PluralRules.prototype.resolvedOptions  has the right
    properties.
author: Zibi Braniecki
includes: [testIntl.js]
---*/

var actual = new Intl.PluralRules().resolvedOptions();

var actual2 = new Intl.PluralRules().resolvedOptions();
if (actual2 === actual) {
    $ERROR("resolvedOptions returned the same object twice.");
}

// this assumes the default values where the specification provides them
mustHaveProperty(actual, "locale", isCanonicalizedStructurallyValidLanguageTag);
mustHaveProperty(actual, "type", ["cardinal"]);
mustNotHaveProperty(actual, "currency");
mustNotHaveProperty(actual, "currencyDisplay");
mustHaveProperty(actual, "minimumIntegerDigits", [1]);
mustHaveProperty(actual, "minimumFractionDigits", [0]);
mustHaveProperty(actual, "maximumFractionDigits", [3]);
mustNotHaveProperty(actual, "minimumSignificantDigits");
mustNotHaveProperty(actual, "maximumSignificantDigits");

reportCompare(0, 0);
