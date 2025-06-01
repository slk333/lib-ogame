Various **functions** and **types** related to the original Ogame browser game.

# costs and durations

### Structure

```typescript
getStructureUpgradeCost("crystalMine", 9)
/* { metalAmount: 2061, crystalAmount: 1030, deuteriumAmount: 0 } */

getStructureConstructionTime(
    "researchLab",
    5, // level
    3, // roboticsFactory
    0 //  naniteFactory
)
/* 2304 seconds*/
```

### Shipyard

```typescript
getShipCost("lightFighter")
/* { metalAmount: 3000, crystalAmount: 1000, deuteriumAmount: 0 } */

getDefenseCost("rocketLauncher")
/* { metalAmount: 2000, crystalAmount: 0, deuteriumAmount: 0 } */

getShipyardUnitConstructionTime(
    { name: "lightFighter", type: "ship" },
    5, // shipyardLevel
    1 // naniteLevel
)
/* 480 seconds*/
```

# production

```typescript
getMetalMineProduction_s(25)
/* 2.25694444 metal per second */

getCrystalMineProduction_s(25)
/* 1.50472222 crystal per second */

getDeuteriumProduction_s(25)
/* 1.08333333 deuterium per second */
/* fixed temperature: 0°C */
```

# derive data from planet

### Resources at date

```typescript
computeResourcesForPlanetAtDate(planet, date)
/* { metalAmount: 51908, crystalAmount: 25767, deuteriumAmount: 10372 } 
/* expects a Date */
```

### production

```typescript
computeProductionForPlanet(planet)
/* { metalProduction_s: 0.5302, crystalProduction_s: 0.2133, deuteriumProduction_s: 0.1036 } */
```

### costs and durations

```typescript
computeStructureUpgradeCostForPlanet(planet, "metalMine")
/* { metalAmount: 26273, crystalAmount: 6568, deuteriumAmount: 0 } */

computeStructureUpgradeTimeForPlanet(planet, "metalMine")
/* 1970 seconds */
```

# planet shape

```ts
export interface Planet {
    id: string
    name: string
    owner: {
        id: string
        name: string
    }
    coordinates: Coordinates
    structures: Record<StructureName, PlanetStructure>
    ships: Record<ShipName, { name: ShipName; count: number }>
    resources: ResourcesRecord
    snapshotDate: string
    pendingStructure: {
        name: StructureName
        completionDate: string
    } | null
    pendingShipyardUnit: {
        shipyardUnit: ShipyardUnit
        completionDate: string
    } | null
    structureQueue: StructureName[]
    shipyardQueue: ScheduledShipyardOrder[]
}
```

```typescript
const samplePlanet: Planet = {
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
        /* ... */
    },
    resources: { metalAmount: 50000, crystalAmount: 25000, deuteriumAmount: 10000 },
    snapshotDate: new Date("2025-05-29T10:00:00.000Z").toISOString(),
    pendingStructure: null,
    pendingShipyardUnit: null,
    structureQueue: [],
    shipyardQueue: [],
}
```

# misc

### Format resources

```typescript
formatResourceAmount(1234567)
/* "1.2M" */
```
