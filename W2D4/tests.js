describe("filter", function () {
    it("takes a string and return the filtered result", function () {
        assert.equal("This house is nice!", "This house is not nice!".filter('not'));
    });
    it("takes a array of string and return the filtered result", function () {
        assert.equal("house is nice!", "This house is not nice!".filter(['This','not']));
    });
});

describe("bubbleSort", function () {
    it("takes an empty array and return empty array", function () {
        assert.deepEqual([], [].bubbleSort());
    });
    it("takes an array of 6 numbers and return bubble sorted array", function () {
        assert.deepEqual([-2, 0, 1, 3, 4, 6], [6,4,0, 3,-2,1].bubbleSort());
    });
});