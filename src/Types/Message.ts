export interface Message {
    readonly id: string
    readonly emittedAt: string

    readonly sender: PlayerPublicInfo
    readonly recipient: PlayerPublicInfo

    readonly status: "unread" | "read"
    readonly content: string

    readonly expireAt: string
}

interface PlayerPublicInfo {
    id: string
    name: string
}
