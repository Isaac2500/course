import { Gender } from "../../../src/pokemon/dtos/metadata"
import { Pokemon } from "../../../src/pokemon/dtos/pokemon.dto"
import { PokemonData } from "../../../src/pokemon/dtos/pokemonInfo.dto"

export const pokemonMock: PokemonData = {
  id: 445,
  pokedexNumber: 570,
  name: "garchomp",
  weight: 950,
  height: 19,
  types: ['dragon', 'ground'],
  sprites: {
    normal: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/445.png",
    female: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/female/445.png",
    shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/445.png",
    femaleShiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/445.png"
  },
  stats: {
    hp: {
      base: 108,
      maxEvs: 0
    },
    attack: {
      base: 130,
      maxEvs: 3
    },
    defense: {
      base: 95,
      maxEvs: 0
    },
    specialAttack: {
      base: 80,
      maxEvs: 0
    },
    specialDefense: {
      base: 85,
      maxEvs: 0
    },
    speed: {
      base: 102,
      maxEvs: 0
    }
  },
  moves: [
    { name: 'swords-dance', level: 0 },
    { name: 'cut', level: 0 },
    { name: 'sand-attack', level: 1 },
    { name: 'headbutt', level: 0 },
    { name: 'tackle', level: 1 },
    { name: 'body-slam', level: 0 },
    { name: 'take-down', level: 15 },
    { name: 'bite', level: 27 },
    { name: 'roar', level: 0 },
    { name: 'flamethrower', level: 0 },
    { name: 'surf', level: 0 },
    { name: 'hyper-beam', level: 0 },
    { name: 'strength', level: 0 },
    { name: 'dragon-rage', level: 1 },
    { name: 'earthquake', level: 0 },
    { name: 'dig', level: 40 },
    { name: 'toxic', level: 0 },
    { name: 'double-team', level: 0 },
    { name: 'fire-blast', level: 0 },
    { name: 'swift', level: 0 },
    { name: 'rest', level: 0 },
    { name: 'rock-slide', level: 0 },
    { name: 'slash', level: 28 },
    { name: 'substitute', level: 0 },
    { name: 'snore', level: 0 },
    { name: 'protect', level: 0 },
    { name: 'scary-face', level: 0 },
    { name: 'mud-slap', level: 0 },
    { name: 'outrage', level: 0 },
    { name: 'sandstorm', level: 1 },
    { name: 'endure', level: 0 },
    { name: 'false-swipe', level: 0 },
    { name: 'swagger', level: 0 },
    { name: 'fury-cutter', level: 0 },
    { name: 'attract', level: 0 },
    { name: 'sleep-talk', level: 0 },
    { name: 'return', level: 0 },
    { name: 'frustration', level: 0 },
    { name: 'dragon-breath', level: 1 },
    { name: 'iron-tail', level: 0 },
    { name: 'hidden-power', level: 0 },
    { name: 'twister', level: 0 },
    { name: 'rain-dance', level: 0 },
    { name: 'sunny-day', level: 0 },
    { name: 'crunch', level: 48 },
    { name: 'rock-smash', level: 0 },
    { name: 'whirlpool', level: 0 },
    { name: 'facade', level: 0 },
    { name: 'brick-break', level: 0 },
    { name: 'secret-power', level: 0 },
    { name: 'rock-tomb', level: 0 },
    { name: 'sand-tomb', level: 19 },
    { name: 'aerial-ace', level: 0 },
    { name: 'dragon-claw', level: 33 },
    { name: 'mud-shot', level: 0 },
    { name: 'natural-gift', level: 0 },
    { name: 'fling', level: 0 },
    { name: 'poison-jab', level: 0 },
    { name: 'aqua-tail', level: 0 },
    { name: 'dragon-pulse', level: 0 },
    { name: 'dragon-rush', level: 55 },
    { name: 'earth-power', level: 0 },
    { name: 'giga-impact', level: 0 },
    { name: 'shadow-claw', level: 0 },
    { name: 'fire-fang', level: 1 },
    { name: 'rock-climb', level: 0 },
    { name: 'draco-meteor', level: 0 },
    { name: 'iron-head', level: 0 },
    { name: 'stone-edge', level: 0 },
    { name: 'captivate', level: 0 },
    { name: 'stealth-rock', level: 0 },
    { name: 'hone-claws', level: 0 },
    { name: 'round', level: 0 },
    { name: 'incinerate', level: 0 },
    { name: 'bulldoze', level: 0 },
    { name: 'dragon-tail', level: 0 },
    { name: 'dual-chop', level: 24 },
    { name: 'confide', level: 0 },
    { name: 'laser-focus', level: 0 },
    { name: 'brutal-swing', level: 0 },
    { name: 'stomping-tantrum', level: 0 },
    { name: 'breaking-swipe', level: 0 },
    { name: 'scale-shot', level: 0 },
    { name: 'scorching-sands', level: 0 }
  ]
}

export const GarchompMock : Pokemon = {
  id: 445,
  pokedexNumber: 570,
  name: "garchomp",
  weight: 950,
  height: 19,
  isShiny: false,
  gender: Gender.MALE,
  customName: 'myPokemon',
  types: ['dragon', 'ground'],
  sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/445.png",
  stats: {
    hp: {
      base: 108,
      maxEvs: 0
    },
    attack: {
      base: 130,
      maxEvs: 3
    },
    defense: {
      base: 95,
      maxEvs: 0
    },
    specialAttack: {
      base: 80,
      maxEvs: 0
    },
    specialDefense: {
      base: 85,
      maxEvs: 0
    },
    speed: {
      base: 102,
      maxEvs: 0
    }
  },
  moves: [
    { name: 'swords-dance', level: 0 },
    { name: 'cut', level: 0 },
    { name: 'sand-attack', level: 1 },
    { name: 'headbutt', level: 0 },
  ]
}