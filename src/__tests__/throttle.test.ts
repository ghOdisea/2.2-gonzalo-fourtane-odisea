import throttle from "../throttle"


describe( 'throttler', () => {

    const ms = 200
    const restar = jest.fn((a: number,b: number) => { return a - b})

    it('should be defined', () => {
        expect( throttle ).toBeDefined()
    })
    it('should return the correct operation', () => {
        expect (restar(10, 6)).toBe(4)
    } )
    it('should be called just one time', () => {
        throttle(restar,ms)
        throttle(restar,ms)
        throttle(restar,ms)
        throttle(restar,ms)
        expect (restar).toHaveBeenCalledTimes(1)
    } )
})