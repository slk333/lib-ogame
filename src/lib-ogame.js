/* 
Formulas
https://board.fr.ogame.gameforge.com/index.php?thread/710820-options-formules/
https://board.en.ogame.gameforge.com/index.php?thread/548906-formula-thread-v3/
https://archive.ph/p5Ktw
*/

/* 1.0 Cost */
function getMetalMineCost(targetLevel) {
	/* 60 M, 15 C */
	const metalAmount = Math.trunc(60 * 1.5 ** (targetLevel - 1))
	const crystalAmount = Math.trunc(15 * 1.5 ** (targetLevel - 1))
	return { metalAmount, crystalAmount }
}
function getCrystalMineCost(targetLevel) {
	/* 48 M, 24 C */
	const metalAmount = Math.trunc(48 * 1.6 ** (targetLevel - 1))
	const crystalAmount = Math.trunc(24 * 1.6 ** (targetLevel - 1))
	return { metalAmount, crystalAmount }
}

function getDeuteriumMineCost(targetLevel) {
	/* 225 M, 75 C */
	const metalAmount = Math.trunc(225 * 1.5 ** (targetLevel - 1))
	const crystalAmount = Math.trunc(75 * 1.5 ** (targetLevel - 1))
	return { metalAmount, crystalAmount }
}

function getRoboticsFactoryCost(targetLevel) {
	/* 400 M, 120 C, 200 D. */
	const baseCost = {
		baseMetalCost: 400,
		baseCrystalCost: 120,
		baseDeuteriumCost: 200,
	}
	return getFacilityCost(targetLevel, baseCost)
}

function getResearchLabCost(targetLevel) {
	/* 200 M, 400 C, 200 D */
	const baseCost = {
		baseMetalCost: 200,
		baseCrystalCost: 400,
		baseDeuteriumCost: 200,
	}
	return getFacilityCost(targetLevel, baseCost)
}
function getShipyardCost(targetLevel) {
	/* 400 M, 200 C, 100 D */
	const baseCost = {
		baseMetalCost: 400,
		baseCrystalCost: 200,
		baseDeuteriumCost: 100,
	}
	return getFacilityCost(targetLevel, baseCost)
}
function getNaniteFactoryCost(targetLevel) {
	/* 	1 000 000 M, 500 000 C, 100 000 D*/
	const baseCost = {
		baseMetalCost: 1_000_000,
		baseCrystalCost: 500_000,
		baseDeuteriumCost: 100_000,
	}
	return getFacilityCost(targetLevel, baseCost)
}

function getFacilityCost(targetLevel, baseCost) {
	const { baseMetalCost, baseCrystalCost, baseDeuteriumCost } = baseCost
	const metalAmount = Math.trunc(baseMetalCost * 2 ** (targetLevel - 1))
	const crystalAmount = Math.trunc(baseCrystalCost * 2 ** (targetLevel - 1))
	const deuteriumAmount = Math.trunc(baseDeuteriumCost * 2 ** (targetLevel - 1))
	return { metalAmount, crystalAmount, deuteriumAmount }
}

/* 1.1  Production */
export function getMetalMineProduction_s(currentLevel) {
	const metalProduction_s = Math.trunc(30 * currentLevel * 1.1 ** currentLevel) / 3600
	return metalProduction_s
}
export function getCrystalMineProduction_s(currentLevel) {
	const crystalProduction_s = Math.trunc(20 * currentLevel * 1.1 ** currentLevel) / 3600
	return crystalProduction_s
}
export function getDeuteriumProduction_s(currentLevel) {
	const deuteriumProduction_s = Math.trunc(10 * currentLevel * 1.1 ** currentLevel * 1.44) / 3600
	return deuteriumProduction_s
}

/* 1.2  Construction Time */
export function getStructureConstructionTime(name, targetLevel, roboticsFactoryLevel, naniteFactoryLevel) {
	const { metalAmount, crystalAmount } = getStructureUpgradeCost(name, targetLevel)
	const resourceAmount = metalAmount + crystalAmount /* ex 60 + 15 */
	let lowLevelEasing = Math.max(4 - targetLevel / 2, 1)
	if (name === "naniteFactory") lowLevelEasing = 1
	const constructionTime_h = resourceAmount / 2500 / lowLevelEasing / (1 + roboticsFactoryLevel) / 2 ** naniteFactoryLevel
	const constructionTime_s = Math.trunc(constructionTime_h * 3600)
	return constructionTime_s
}

function computeStructureCompoundedCost(achievedLevel, costFunction, growthCoefficient) {
	const metalNextLevelCost = costFunction(achievedLevel + 1).metalAmount ?? 0
	const metalBaseCost = costFunction(1).metalAmount ?? 0
	const metalCompoundedCost = (metalNextLevelCost - metalBaseCost) / growthCoefficient

	const crystalNextLevelCost = costFunction(achievedLevel + 1).crystalAmount ?? 0
	const crystalBaseCost = costFunction(1).crystalAmount ?? 0
	const crystalCompoundedCost = (crystalNextLevelCost - crystalBaseCost) / growthCoefficient

	const deuteriumNextLevelCost = costFunction(achievedLevel + 1).deuteriumAmount ?? 0
	const deuteriumBaseCost = costFunction(1).deuteriumAmount ?? 0
	const deuteriumCompoundedCost = (deuteriumNextLevelCost - deuteriumBaseCost) / growthCoefficient

	return { metalCompoundedCost, crystalCompoundedCost, deuteriumCompoundedCost }
}

export function getStructureCompoundedCost(name, achievedLevel) {
	/*   { 
	metalCompoundedCost, 
	crystalCompoundedCost, 
	deuteriumCompoundedCost 
	}
 */

	switch (name) {
		case "metalMine":
			return computeStructureCompoundedCost(achievedLevel, getMetalMineCost, 0.5)

		case "crystalMine":
			return computeStructureCompoundedCost(achievedLevel, getCrystalMineCost, 0.6)

		case "deuteriumSynthesizer":
			return computeStructureCompoundedCost(achievedLevel, getDeuteriumMineCost, 0.5)

		case "roboticsFactory":
			return computeStructureCompoundedCost(achievedLevel, getRoboticsFactoryCost, 1)

		case "shipyard":
			return computeStructureCompoundedCost(achievedLevel, getShipyardCost, 1)

		case "researchLab":
			return computeStructureCompoundedCost(achievedLevel, getResearchLabCost, 1)

		case "naniteFactory":
			return computeStructureCompoundedCost(achievedLevel, getNaniteFactoryCost, 1)

		default:
			break
	}
	//   const baseCost = 60
	//   const increase = 0.5
	//   const compoundCost = (metalCostForMine(mineLvl + 1) - baseCost) / increase
	//   return Math.trunc(compoundCost / 1000)
}

export function getStructureUpgradeCost(name, targetLevel) {
	switch (name) {
		case "metalMine":
			return getMetalMineCost(targetLevel)

		case "crystalMine":
			return getCrystalMineCost(targetLevel)

		case "deuteriumSynthesizer":
			return getDeuteriumMineCost(targetLevel)

		case "roboticsFactory":
			return getRoboticsFactoryCost(targetLevel)

		case "shipyard":
			return getShipyardCost(targetLevel)

		case "researchLab":
			return getResearchLabCost(targetLevel)

		case "naniteFactory":
			return getNaniteFactoryCost(targetLevel)

		default:
			break
	}
}
