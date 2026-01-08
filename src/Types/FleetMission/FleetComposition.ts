import { ShipName } from "../Shipyard/ShipName.js"

export type FleetComposition = {
    [shipName in ShipName]?: {
        name: ShipName
        count: number
    }
}

//    {
//        lightFighter: { name: "lightFighter", count: 150 },
//        battleShip: { name: "battleShip", count: 10 },
//    }
