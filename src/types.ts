export interface ResourceCost {
    metalAmount: number
    crystalAmount: number
    deuteriumAmount: number
}

export enum Structure {
    MetalMine = "metalMine",
    CrystalMine = "crystalMine",
    DeuteriumSynthesizer = "deuteriumSynthesizer",
    RoboticsFactory = "roboticsFactory",
    Shipyard = "shipyard",
    ResearchLab = "researchLab",
    NaniteFactory = "naniteFactory",
}
