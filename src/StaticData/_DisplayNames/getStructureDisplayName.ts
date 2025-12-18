import { StructureName } from "../../Types/Structure/StructureName.js"

const STRUCTURE_DISPLAY_NAMES: Record<StructureName, string> = {
    metalMine: "Metal Mine",
    crystalMine: "Crystal Mine",
    deuteriumSynthesizer: "Deuterium Synthesizer",
    roboticsFactory: "Robotics Factory",
    shipyard: "Shipyard",
    researchLab: "Research Lab",
    naniteFactory: "Nanite Factory",
}

export function getStructureDisplayName(structureName: StructureName): string {
    return STRUCTURE_DISPLAY_NAMES[structureName]
}
