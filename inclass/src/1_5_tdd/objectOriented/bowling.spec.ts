import { bowling } from "./bowling";
describe('A bowling game', () => {

    let game: bowling
    beforeEach(()=>{
        game = new bowling()
    })

    it('can play gutter game',() => {
        for (let i = 0; i < 20; i++) {
            game.roll(0)
        }

        expect(game.calculateScore()).toBe(0)
    })

    it('can play a game with all ones', () => {
        for (let i = 0; i < 20; i++) {
            game.roll(1)
        }

        expect(game.calculateScore()).toBe(20)
    })

    
})