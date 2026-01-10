import { FleetShipName } from "./FleetShipName.js"

export type FleetShips = {
    [shipName in FleetShipName]?: {
        name: shipName
        count: number
    }
}

//    {
//        lightFighter: { name: "lightFighter", count: 150 },
//        battleShip: { name: "battleShip", count: 10 },
//    }
