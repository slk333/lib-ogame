export function getStructureDisplayName(structureName: string): string {
    switch (structureName) {
        case "metalMine":
            return "Metal Mine"
        case "crystalMine":
            return "Crystal Mine"
        case "deuteriumSynthesizer":
            return "Deuterium Synthesizer"
        case "roboticsFactory":
            return "Robotics Factory"
        case "shipyard":
            return "Shipyard"
        case "researchLab":
            return "Research Lab"
        case "naniteFactory":
            return "Nanite Factory"
        default:
            return structureName
    }
}
