# lib-ogame

This library provides a collection of functions to help with calculations related to the game OGame.

## Sample Planet Definition

```typescript
// Assuming global availability of types: Planet, StructureName, ShipName, ResourcesRecord, Coordinates, PlanetStructure, ShipyardUnit, ScheduledShipyardOrder

const samplePlanet /*: Planet */ = {
    id: "planetAlpha",
    name: "Alpha Centauri Bb",
    owner: {
        id: "player123",
        name: "GalacticOverlord",
    },
    coordinates: { galaxy: 1, system: 100, position: 7, type: "planet" },
    structures: {
        metalMine: { name: "metalMine", level: 15 },
        crystalMine: { name: "crystalMine", level: 12 },
        deuteriumSynthesizer: { name: "deuteriumSynthesizer", level: 10 },
        roboticsFactory: { name: "roboticsFactory", level: 5 },
        shipyard: { name: "shipyard", level: 6 },
        researchLab: { name: "researchLab", level: 7 },
        naniteFactory: { name: "naniteFactory", level: 2 },
    },
    ships: {
        lightFighter: { name: "lightFighter", count: 50 },
        heavyFighter: { name: "heavyFighter", count: 0 },
        cruiser: { name: "cruiser", count: 0 },
        battleship: { name: "battleship", count: 0 },
        battlecruiser: { name: "battlecruiser", count: 0 },
        bomber: { name: "bomber", count: 0 },
        destroyer: { name: "destroyer", count: 0 },
        deathstar: { name: "deathstar", count: 0 },
        reaper: { name: "reaper", count: 0 },
        pathfinder: { name: "pathfinder", count: 0 },
        smallCargo: { name: "smallCargo", count: 10 },
        largeCargo: { name: "largeCargo", count: 0 },
        colonyShip: { name: "colonyShip", count: 0 },
        recycler: { name: "recycler", count: 0 },
        espionageProbe: { name: "espionageProbe", count: 0 },
        solarSatellite: { name: "solarSatellite", count: 0 },
        crawler: { name: "crawler", count: 0 },
    },
    resources: { metalAmount: 50000, crystalAmount: 25000, deuteriumAmount: 10000 },
    snapshotDate: new Date("2025-05-29T10:00:00.000Z").toISOString(),
    pendingStructure: null,
    pendingShipyardUnit: null,
    structureQueue: [],
    shipyardQueue: [],
}
```

## computeResourcesForPlanetAtDate

```typescript
// Uses the global samplePlanet defined above.
// Assumes computeResourcesForPlanetAtDate and related production functions are available.

const futureDate = new Date("2025-05-29T11:00:00.000Z") // 1 hour later
const resourcesAtFutureDate = computeResourcesForPlanetAtDate(samplePlanet, futureDate)
console.log(resourcesAtFutureDate)
```

Output:

```
{ metalAmount: 51908, crystalAmount: 25767, deuteriumAmount: 10372 }
```

## computeProductionForPlanet

```typescript
// Uses the global samplePlanet defined above.
// Assumes computeProductionForPlanet and related production functions are available.

const productionRates = computeProductionForPlanet(samplePlanet)
console.log({
    metalProduction_s: parseFloat(productionRates.metalProduction_s.toFixed(4)),
    crystalProduction_s: parseFloat(productionRates.crystalProduction_s.toFixed(4)),
    deuteriumProduction_s: parseFloat(productionRates.deuteriumProduction_s.toFixed(4)),
})
```

Output:

```
{ metalProduction_s: 0.5302, crystalProduction_s: 0.2133, deuteriumProduction_s: 0.1036 }
```

## computeHasEnoughResources

```typescript
// Assumes computeHasEnoughResources and ResourcesRecord type are available.

const available = { metalAmount: 1000, crystalAmount: 500, deuteriumAmount: 100 }
const cost = { metalAmount: 800, crystalAmount: 400, deuteriumAmount: 50 }
const hasEnough = computeHasEnoughResources(available, cost)
console.log(hasEnough)
```

Output:

```
true
```

## computeStructureUpgradeCostForPlanet

```typescript
// Uses the global samplePlanet defined above.
// Assumes computeStructureUpgradeCostForPlanet and getStructureUpgradeCost are available.

const upgradeCost = computeStructureUpgradeCostForPlanet(samplePlanet, "metalMine")
console.log(upgradeCost)
```

Output:

```
{ metalAmount: 26273, crystalAmount: 6568, deuteriumAmount: 0 }
```

## computeStructureUpgradeTimeForPlanet

```typescript
// Uses the global samplePlanet defined above.
// Assumes computeStructureUpgradeTimeForPlanet and getStructureConstructionTime are available.

const upgradeTime = computeStructureUpgradeTimeForPlanet(samplePlanet, "metalMine")
console.log(upgradeTime)
```

Output:

```
1970
```

## getStructureUpgradeCost

```typescript
// Assumes getStructureUpgradeCost, StructureName, ResourceCost types are available.
// And specific cost functions like getCrystalMineCost are available.

const costForCrystalMineLvl9 = getStructureUpgradeCost("crystalMine", 9)
console.log(costForCrystalMineLvl9)
```

Output:

```
{ metalAmount: 2061, crystalAmount: 1030, deuteriumAmount: 0 }
```

## getStructureConstructionTime

```typescript
// Assumes getStructureConstructionTime, getStructureUpgradeCost, StructureName types are available.

const researchLabTime = getStructureConstructionTime("researchLab", 5, 3, 0)
console.log(researchLabTime)
```

Output:

```
2304
```

## getShipCost

```typescript
// Assumes getShipCost, ShipName, ResourceCost types are available.

const lightFighterCost = getShipCost("lightFighter")
console.log(lightFighterCost)
```

Output:

```
{ metalAmount: 3000, crystalAmount: 1000, deuteriumAmount: 0 }
```

## getDefenseCost

```typescript
// Assumes getDefenseCost, DefenseName, ResourceCost types are available.

const rocketLauncherCost = getDefenseCost("rocketLauncher")
console.log(rocketLauncherCost)
```

Output:

```
{ metalAmount: 2000, crystalAmount: 0, deuteriumAmount: 0 }
```

## getShipyardUnitConstructionTime

```typescript
// Assumes getShipyardUnitConstructionTime, ShipyardUnit, getShipCost types are available.
// This example uses specific levels for shipyard and nanite factory, not from samplePlanet.

const lightFighterBuildTime = getShipyardUnitConstructionTime(
    { name: "lightFighter", type: "ship" },
    5, // shipyardLevel
    1 // naniteLevel
)
console.log(lightFighterBuildTime)
```

Output:

```
480
```

## formatResourceAmount

```typescript
// Assumes formatResourceAmount is available.

const formattedAmount = formatResourceAmount(1234567)
console.log(formattedAmount)
```

Output:

```
"1.2M"
```
