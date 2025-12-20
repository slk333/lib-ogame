interface PointsRecord {
    overall: number
    economy: number // structures
    military: number // ships + defense
    technology: number
}

export interface PlayerScore {
    player: {
        id: string
        name: string
    }
    points: PointsRecord
    ranking: number
}

export interface PlanetScore {
    player: {
        id: string
        name: string
    }
    points: PointsRecord
}

/* the string is the player ID  */
export type PlayerScores = Record<string, PlayerScore>
