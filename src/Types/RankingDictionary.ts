export interface PlayerScore {
    playerID: string
    playerName: string
    points: number
    economyPoints: number // structures
    militaryPoints: number // ships + defense

    ranking: number
}
export interface PlanetScore {
    playerID: string
    playerName: string
    points: number
    economyPoints: number // structures
    militaryPoints: number // ships + defense
}

export type RankingDictionary = Record<PlayerScore["playerID"], PlayerScore>
