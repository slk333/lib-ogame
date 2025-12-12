# lib-ogame

`lib-ogame` provides **functions** and **types** related to the original OGame browser game.

> [!TIP]  
> Durations are expressed in seconds. Productions are expressed per second.

## costs

Get the cost of structures, ships and defense:

```typescript
getStructureCost("crystalMine", 9)
/* { metal: 2061, crystal: 1030, deuterium: 0 } */

getShipCost("lightFighter")
/* { metal: 3000, crystal: 1000, deuterium: 0 } */

getDefenseCost("rocketLauncher")
/* { metal: 2000, crystal: 0, deuterium: 0 } */
```

Get the compounded cost up to level `n`. Note: the value is slightly the real cost, since the

```ts
getStructureCompoundedCost("crystalMine", 9)
/* { metal: 5413, crystal: 2705, deuterium: 0 } */
```

## construction time

Get the construction time of structures, ships and defense, in seconds:

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

Get the production of the _Metal Mine_, the _Crystal Mine_, and the _Deuterium Synthesizer_, per second.

At this time, the library assumes the planet's temperature is 0°C

```typescript
getMetalMineProduction(25)
/* 2.25694444 metal per second */

getCrystalMineProduction(25)
/* 1.50472222 crystal per second */

getDeuteriumProduction(25)
/* 1.08333333 deuterium per second */
```

## Misc

### format resources

```typescript
formatResourceAmount(1234567)
/* "1.2M" */
```

# derive data from a planet

### resources at date

Currently, the date should be provided as a `Date` object:

```typescript
computeResourcesAtDateForPlanet(planet, date)
/* { metal: 51908, crystal: 25767, deuterium: 10372 } 
/* expects a Date */
```

### production

computer the resource production, per second.

```typescript
computeProductionForPlanet(planet)
/* { metalProduction: 0.5302, crystalProduction: 0.2133, deuteriumProduction: 0.1036 } */
```

### costs and durations helpers

the helpers detect the given structure current level:

```typescript
computeStructureCostForPlanet(planet, "metalMine")
/* { metal: 26273, crystal: 6568, deuterium: 0 } */

computeStructureConstructionTimeForPlanet(planet, "metalMine")
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
