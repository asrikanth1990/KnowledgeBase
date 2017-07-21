describe("adding two numbers", function() {
    it("should add two numbers correctly", function() {
        var cal1 = new calculator();
        expect(cal1.add(1, 2)).toBe(4);
    })
})