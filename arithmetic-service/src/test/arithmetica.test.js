const {add} = require("../arithmetica")

test('2 + 3 is equal to 5', () => {
    expect(add(2,3)).toBe(5);
});

test('200000000 + 300000000 is equal to 5', () => {
    expect(add(200000000,300000000)).toBe(500000000);
});


test('4000 + 800 is equal to 5', () => {
    expect(add(4000,800)).toBe(4800);
});