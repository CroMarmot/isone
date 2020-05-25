"use strict";

require("mocha");
const assert = require("assert");
const isOne = require("./");

describe("isOne", function() {
  it("should return true if the number is 1", function() {
    assert(isOne(1));
  });

  it("should return false if the number is not 1", function() {
    assert(!isOne(1 + 1));
    assert(!isOne(0));
    assert(!isOne(-1));
    assert(!isOne(100000000));
  });

  it("should return false if the number is not 1 big number", function() {
    assert(!isOne(1000000000));
  }).timeout(1000000);

  it("should return false if the number is not 1 very big number", function() {
    assert(!isOne(10000000000));
  }).timeout(1000000);

  it("should return false if the number is not a number at all", function() {
    assert(!isOne(null));
    assert(!isOne(NaN));
    assert(!isOne(undefined));
    assert(!isOne("1"));
    assert(!isOne({prop: "1"}));
  });
});
