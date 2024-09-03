import { Coordinates } from "./Coordinates"

export interface PublicPlanet {
    id: string
    name: string
    owner: {
        id: string
        name: string
    }
    coordinates: Coordinates
}
