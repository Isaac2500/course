import { createGame, Game } from "./bowling";
describe('A bowling game', () => {
    

    let game: Game
    
    beforeEach(()=>{
        game = createGame()
    })

    it('can roll a ball',()=>{
        let game: Game = createGame()
        game = game.roll(0)
    })

    it('can play gutter game',() => {
        for (let i = 0; i < 20; i++) {
            game = game.roll(0)
            
        }

        expect(game.score()).toBe(0)
    })

    it('can roll a game with all ones', () => {
        for (let i = 0; i < 20; i++) {
            game = game.roll(0)
            
        }

        expect(game.score()).toBe(20)
    })

    it('can roll a spare', () => {
        game = game.roll(5)
                game.roll(5)
                game.roll(3)

        
    })
});

