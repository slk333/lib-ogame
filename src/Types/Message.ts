import type { Planet, ResourcesRecord } from "../index.js"
import type { PublicPlayer } from "./PublicPlayer.js"

interface BaseMessage {
    readonly id: string
    readonly emittedAt: string

    readonly sender: PublicPlayer
    readonly recipient: PublicPlayer

    readonly status: "unread" | "read"
    readonly summary: string

    readonly expireAt: Date
    // timestamp for firestore periodic deletion, set to return date + 24hours
    // set type to Date so it's stored as Timestamp in the DB
}

export type SpyReportPlanetData = Pick<Planet, "name" | "coordinates" | "structures" | "ships"> & {
    resources: ResourcesRecord // current resources at the time of the report
}

export interface SpyReportMessage extends BaseMessage {
    readonly type: "spyReport"
    readonly planetData: SpyReportPlanetData
}
export interface PlayerMessage extends BaseMessage {
    readonly type: "playerMessage"
    readonly fullMessage: string
}
export interface SystemMessage extends BaseMessage {
    readonly type: "systemMessage"
    readonly fullMessage: string
}

export type Message = SpyReportMessage | PlayerMessage | SystemMessage
