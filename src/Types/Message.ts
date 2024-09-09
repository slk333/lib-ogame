export interface Message {
    readonly id: string
    readonly emittedAt: string

    readonly sender: PlayerPublicInfo
    readonly recipient: PlayerPublicInfo

    readonly status: "unread" | "read"
    readonly content: string

    readonly expireAt: Date
    // timestamp for firestore periodic deletion, set to return date + 24hours
    // set type to Date so it's stored as Timestamp in the DB
}

interface PlayerPublicInfo {
    id: string
    name: string
}
