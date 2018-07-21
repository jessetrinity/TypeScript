/// <reference path="fourslash.ts" />

////dummy text

verify.generateTypes(
    // would like to test against the real "global" but that may vary between node versions.
    { value: { Array, Boolean, Date, Math, Number, RegExp, String, Symbol }, outputBaseline: "global" },
    { value: require("lodash"), outputBaseline: "lodash" },
);
