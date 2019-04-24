import { logBase } from '../src/log-base'

describe('sum()', () => {
  it('should find log base 2', () => {
    expect(logBase(2, 8)).toEqual(3)
  })

  it('should find log base 8', () => {
    expect(logBase(8, 64)).toEqual(2)
  })

  it('should find log base 10', () => {
    expect(logBase(10, 10000)).toEqual(4)
  })

  it('should find log base 20', () => {
    expect(logBase(20, 400)).toEqual(2)
  })
})
