import { Coordinates } from "./Coordinates.js"

export interface PublicMoon {
    id: string
    name: string
    owner: {
        id: string
        name: string
    }
    coordinates: Coordinates
    type: "Moon"
}
