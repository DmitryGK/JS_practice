import {calculatorReducer, div, mult, sub, sum} from "./tasks";

test('sum should be correct', () => {

    const state = 10
    const num = 5

    const result = sum(state, num)

    expect(result).toBe(15)
})

test('sub', () => {
    expect(sub(10,5)).toBe(5)
})

test('div', () => {
    expect(div(10,5)).toBe(2)
})

test('mult', () => {
    expect(mult(10,5)).toBe(50)
})

test('sum of two numbers with calculatorReducer', () => {
    expect(calculatorReducer(3,
        {type: "SUM", num: 5})).toBe(8)
})
test('sub of two numbers with calculatorReducer', () => {
    expect(calculatorReducer(5,
        {type: "SUB", num: 3})).toBe(2)
})
test('div of two numbers with calculatorReducer', () => {
    expect(calculatorReducer(10,
        {type: "DIV", num: 5})).toBe(2)
})
test('mult of two numbers with calculatorReducer', () => {
    expect(calculatorReducer(3,
        {type: "MULT", num: 5})).toBe(15)
})