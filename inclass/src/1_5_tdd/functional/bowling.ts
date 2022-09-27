//the code
type State = {score : number}

export const createGame = (state : State = {score: 0}) => Object.freeze({
    roll: (pins: number) => createGame({score: state.score+pins}),
    score: () => state.score
})

export type Game = ReturnType<typeof createGame>