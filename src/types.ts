export interface ResourceCost {
    metalAmount: number
    crystalAmount: number
    deuteriumAmount: number
}

export const enum Structure {
    MetalMine = "metalMine",
    CrystalMine = "crystalMine",
    DeuteriumSynthesizer = "deuteriumSynthesizer",
    RoboticsFactory = "roboticsFactory",
    Shipyard = "shipyard",
    ResearchLab = "researchLab",
    NaniteFactory = "naniteFactory",
}
