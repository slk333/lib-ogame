// production
export {
    getMetalMineProduction_s,
    getCrystalMineProduction_s,
    getDeuteriumProduction_s,
} from "./Production/production.js"
// cost
export { getStructureUpgradeCost, getStructureCompoundedCost } from "./Cost/structureCost.js"
export { getStructureConstructionTime } from "./ConstructionTime/constuctionTime.js"
// util
export type { StructureName, PlanetStructure } from "./types.js"
export type { FirestorePlayer } from "./ogameclassic_types.js"
