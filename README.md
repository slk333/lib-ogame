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

## Resources at Date

```typescript
const futureDate = new Date("2025-05-29T11:00:00.000Z") // 1 hour later
computeResourcesForPlanetAtDate(samplePlanet, futureDate)
/* { metalAmount: 51908, crystalAmount: 25767, deuteriumAmount: 10372 } */
```

## Resources Production

```typescript
computeProductionForPlanet(samplePlanet)
/* { metalProduction_s: 0.5302, crystalProduction_s: 0.2133, deuteriumProduction_s: 0.1036 } */
```

## Upgrade Cost for Structure on Planet

```typescript
computeStructureUpgradeCostForPlanet(samplePlanet, "metalMine")
/* { metalAmount: 26273, crystalAmount: 6568, deuteriumAmount: 0 } */
```

## Upgrade Time for Structure on Planet

```typescript
computeStructureUpgradeTimeForPlanet(samplePlanet, "metalMine")
/* 1970 */
```

## Upgrade Cost for Structure at Level

```typescript
getStructureUpgradeCost("crystalMine", 9)
/* { metalAmount: 2061, crystalAmount: 1030, deuteriumAmount: 0 } */
```

## Upgrade Time for Structure at Level

```typescript
getStructureConstructionTime("researchLab", 5, 3, 0)
/* 2304 */
```

## Ship Cost

```typescript
getShipCost("lightFighter")
/* { metalAmount: 3000, crystalAmount: 1000, deuteriumAmount: 0 } */
```

## Defense Cost

```typescript
getDefenseCost("rocketLauncher")
/* { metalAmount: 2000, crystalAmount: 0, deuteriumAmount: 0 } */
```

## Shipyard Unit Construction Time

```typescript
getShipyardUnitConstructionTime(
    { name: "lightFighter", type: "ship" },
    5, // shipyardLevel
    1 // naniteLevel
)
/* 480 */
```

## Format Resource Number

```typescript
formatResourceAmount(1234567)
/* "1.2M" */
```
