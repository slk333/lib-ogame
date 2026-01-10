import { ShipName } from "../Shipyard/ShipName.js"

export type FleetShipName = Exclude<ShipName, "solarSatellite" | "crawler">
