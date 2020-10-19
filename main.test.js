//👉 Write your tests below here:
const { addObjects } = require("./main");

it("should add two objects", function (){
    const actual = addObjects({a: 1, b: 1}, {a: 1, b: 1});
    
    expect(actual).toEqual({a:2, b: 2})
})