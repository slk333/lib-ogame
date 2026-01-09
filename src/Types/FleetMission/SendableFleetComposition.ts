import { SendableShipName } from "./SendableShipName.js"

export type SendableFleetComposition = {
    [shipName in SendableShipName]?: {
        name: shipName
        count: number
    }
}

//    {
//        lightFighter: { name: "lightFighter", count: 150 },
//        battleShip: { name: "battleShip", count: 10 },
//    }
