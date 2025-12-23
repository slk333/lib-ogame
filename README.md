# lib-ogame

`lib-ogame` provides **functions** and **types** related to the original OGame browser game.

> [!TIP]  
> Durations are expressed in seconds. Productions are expressed per second.

## costs

Get the cost of structures, ships and defenses:

```typescript
getStructureCost("crystalMine", 9)
/* { metal: 2061, crystal: 1030, deuterium: 0 } */

getShipCost("lightFighter")
/* { metal: 3000, crystal: 1000, deuterium: 0 } */

getDefenseCost("rocketLauncher")
/* { metal: 2000, crystal: 0, deuterium: 0 } */
```

Get the compounded cost of a structure from level 0 to `n`.

```ts
getStructureCompoundedCost("crystalMine", 9)
/* { metal: 5413, crystal: 2705, deuterium: 0 } */
```

## construction time

Get the construction time for structures, ships and defenses, in seconds:

```ts
getStructureConstructionTime({
    structureName: "researchLab",
    level: 5,
    roboticsFactory: 3,
    naniteFactory: 0,
})
/* 2304 seconds */

getShipConstructionTime({
    shipName: "lightFighter",
    shipyard: 5,
    naniteFactory: 1,
})
/* 480 seconds */

getDefenseConstructionTime({
    defenseName: "rocketLauncher",
    shipyard: 5,
    naniteFactory: 1,
})
/* 240 seconds */
```

## production

Get the production for a given mine and its level, per second:

```typescript
getMetalMineProduction(25)
/* 2.25722222 metal (per second) */

getCrystalMineProduction(25)
/* 1.50472222 crystal (per second) */

getDeuteriumSynthesizerProduction(25, 0)
/* 1.08333333 deuterium (per second) at 0°C */

getDeuteriumSynthesizerProduction(25, -130)
/* 1.47472222 deuterium (per second) at -130°C */
```

The _Deuterium Synthesizer_ takes into account the planet's _max temperature_. The temperature defaults to 0°C if omitted.

## Misc

### format resources: short format

Format the resource into a compact representation. Used in cost panels:

```typescript
formatResourceShort(601)
/* "601" */

formatResourceShort(1201)
/* "1.2K" */

formatResourceShort(51_600)
/* "51K" */

formatResourceShort(1_200_000)
/* "1.2M" */
```

### format time interval

Format the duration into a compact representation:

```typescript
formatTimeInterval(0)
/* "Done" */

formatTimeInterval(45)
/* "45s" */

formatTimeInterval(65)
/* "1m 5s " */

formatTimeInterval(3661)
/* "1h 1m " */

formatTimeInterval(90061)
/* "1d 1h " */
```

### planet temperature

Get a randomized max-temperature for a planet at position `i`. This temperature is used for calculating the deuterium production.

```typescript
getRandomTemperatureForPosition(15)
/* -121 */
```

# derive data from a planet

### resources at date

Currently, the date should be provided as a `Date` object:

```typescript
computeResourcesForPlanetAtDate(planet, date)
/* { metal: 51908, crystal: 25767, deuterium: 10372 } 
/* expects a Date */
```

### production

Compute the planet's resource production, per second.

```typescript
computeProductionForPlanet(planet)
/* { metalProduction: 0.5302, crystalProduction: 0.2133, deuteriumProduction: 0.1036 } */
```

### costs and durations helpers

These helpers detect the structure's current level:

```typescript
computeStructureUpgradeCostForPlanet(planet, "metalMine")
/* { metal: 26273, crystal: 6568, deuterium: 0 } */

computeStructureUpgradeTimeForPlanet(planet, "metalMine")
/* 1970 seconds */
```

# Planet interface

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
    lastSnapshot: {
        date: string // ISO
        resources: ResourcesRecord
    }
    pendingStructure: {
        name: StructureName
        completionDate: string // ISO
    } | null
    pendingShipyardUnit: {
        shipyardUnit: ShipyardUnit
        completionDate: string // ISO
    } | null
    structureQueue: StructureName[]
    shipyardQueue: ScheduledShipyardOrder[]
}
```

example data

```typescript
const samplePlanet: Planet = {
    id: "a94bfc77",
    name: "Homeworld",
    owner: {
        id: "bb9f2151",
        name: "Geologist Alpha",
    },
    coordinates: { galaxy: 1, system: 100, position: 8, type: "planet" },
    structures: {
        metalMine: { name: "metalMine", level: 15 },
        crystalMine: { name: "crystalMine", level: 12 },
        deuteriumSynthesizer: { name: "deuteriumSynthesizer", level: 10 },
        roboticsFactory: { name: "roboticsFactory", level: 5 },
        /* ... */
    },
    ships: {
        lightFighter: { name: "lightFighter", count: 50 },
        heavyFighter: { name: "heavyFighter", count: 0 },
        cruiser: { name: "cruiser", count: 0 },
        /* ... */
    },
    lastSnapshot: {
        date: new Date("2025-05-29T10:00:00.000Z").toISOString(),
        resources: { metal: 50000, crystal: 25000, deuterium: 10000 },
    }
    pendingStructure: null,
    pendingShipyardUnit: null,
    structureQueue: [],
    shipyardQueue: [],
}
```
