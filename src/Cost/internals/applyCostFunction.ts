import { ResourceCost } from "../../Types/ResourceCost.js"

export function applyCostFunction(
    achievedLevel: number,
    costFunction: (level: number) => ResourceCost
) {
    let metal = 0
    let crystal = 0
    let deuterium = 0

    for (let level = 1; level <= achievedLevel; level++) {
        const levelCost = costFunction(level)
        metal += levelCost.metal
        crystal += levelCost.crystal
        deuterium += levelCost.deuterium
    }

    return { metal, crystal, deuterium }
}
