import { Coordinates } from "./Coordinates.js"

export interface PublicPlanet {
    id: string
    name: string
    owner: {
        id: string
        name: string
    }
    coordinates: Coordinates
}
