export interface PlayerScore {
    playerID: string
    playerName: string
    points: number
    ranking: number
}
export interface PlanetScore {
    playerID: string
    playerName: string
    points: number
}

export type RankingDictionary = Record<PlayerScore["playerID"], PlayerScore>
