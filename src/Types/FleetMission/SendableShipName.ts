import { ShipName } from "../Shipyard/ShipName.js"

export type SendableShipName = Exclude<ShipName, "solarSatellite" | "crawler">
