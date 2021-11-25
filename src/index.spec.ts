import { greeter } from './index'

describe('greeter function', () => {
  test('a greet should start with Hello', () => {
    expect(greeter('Rodolfo').startsWith('Hello')).toBe(true)
  })
})
