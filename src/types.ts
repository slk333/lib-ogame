export interface ResourceCost {
    metalAmount: number
    crystalAmount: number
    deuteriumAmount: number
}

export type StructureName =
    | "metalMine"
    | "crystalMine"
    | "deuteriumSynthesizer"
    | "roboticsFactory"
    | "shipyard"
    | "researchLab"
    | "naniteFactory"

export interface PlanetStructure {
    level: number
    name: StructureName
}
