export interface PlayerScore {
    playerID: string
    playerName: string
    points: number
    ranking: number
}

export type RankingDictionary = Record<PlayerScore["playerID"], PlayerScore>
