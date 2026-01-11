import { Coordinates } from "../Coordinates.js"
import { PublicMoon } from "../PublicMoon.js"
import { PublicPlanet } from "../PublicPlanet.js"

export type DebrisField = {
    coordinates: Coordinates
    type: "debrisField"
}
export type ExpeditionSite = {
    coordinates: Coordinates
    type: "expeditionSite"
}

export type FleetDestination = PublicPlanet | DebrisField | ExpeditionSite | PublicMoon
