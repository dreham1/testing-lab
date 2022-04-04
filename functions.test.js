const { returnTwo, greeting, add } = require("testing-lab/functions.js");
const { multiply, divide } = require("./functions");



test('expect returnTwo function to equal 2', () => {
    expect(returnTwo()).toBe(2);
})

test('expect greeting james to equal hello james', () => {
    expect(greeting('james')).toBe(`hello, james`)
    expect(greeting('Dre')).toBe(`hello, Dre`)
})


test('test if 1 and 2 equal 3, 5 + 9 equals 14', () => {
    expect(add(1, 2)).toEqual(3)
    expect(add(5, 9)).toEqual(14);
})

test('test multiply function if 5 * 6 equal 30, 12 * 12 equal 144', () => {
    expect(multiply(5, 6)).toEqual(30)
    expect(multiply(12, 12)).toEqual(144)
})

test('test if 50 divided by 2 equal 25 and 1000 / 80 equals 12.5', () => {
    expect(divide(50, 2)).toEqual(25)
    expect(divide(1000, 80)).toEqual(12.5)
})



describe('math functions', () => {

    test('test if 1 and 2 equal 3, 5 + 9 equals 14', () => {
        expect(add(1, 2)).toEqual(3)
        expect(add(5, 9)).toEqual(14);
    })
    
    test('test multiply function if 5 * 6 equal 30, 12 * 12 equal 144', () => {
        expect(multiply(5, 6)).toEqual(30)
        expect(multiply(12, 12)).toEqual(144)
    })
    
    test('test if 50 divided by 2 equal 25 and 1000 / 80 equals 12.5', () => {
        expect(divide(50, 2)).toEqual(25)
        expect(divide(1000, 80)).toEqual(12.5)
    })


})
