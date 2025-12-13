# Copilot instructions (lib-ogame)

## Project shape (what this repo is)
- `lib-ogame` is a **pure TypeScript utility library**: cost, production, and construction-time formulas + shared domain types.
- Public API is a flat set of functions/types re-exported from [src/index.ts](../src/index.ts).
- Conventions from README: **durations are seconds**; productions are **per second** (see [README.md](../README.md)).

## Key directories and patterns
- `src/Cost/`: `get*Cost(...)` functions; shared helpers in `src/Cost/internals/` (e.g. [applyCostFunction](../src/Cost/internals/applyCostFunction.ts)).
- `src/ConstructionTime/`: time formulas in seconds; ship/defense share shipyard math via the internal helper [_getShipyardConstructionTime.ts](../src/ConstructionTime/_getShipyardConstructionTime.ts).
- `src/Production/`: mine production functions (`getMetalMineProduction`, etc.).
- `src/Helpers/`: “planet-aware” convenience helpers that compose the primitives (e.g. [computeResourcesForPlanetAtDate](../src/Helpers/computeResourcesForPlanetAtDate.ts), [computeStructureUpgradeTimeForPlanet](../src/Helpers/computeStructureUpgradeTimeForPlanet.ts)).
- `src/Types/` + `src/Collections/`: domain types are mostly derived from `as const` name arrays (e.g. [structureNames](../src/Collections/structureNames.ts) → [StructureName](../src/Types/Structure/StructureName.ts)).

## TypeScript / module conventions (important)
- Repo is **ESM** (`"type": "module"`) with `tsconfig` set to `module: "NodeNext"`.
- **Always use `.js` specifiers in TS imports/exports** (NodeNext emit), e.g. `import { Planet } from "../Types/Planet.js"`.
- Prefer adding new public surface area via [src/index.ts](../src/index.ts) (functions as values + `export type` for types).
- Many files are intentionally simple, synchronous, and deterministic; avoid introducing I/O, timers, or environment dependencies.

## Domain data conventions
- `Planet.lastSnapshot.date` and other dates in types are **ISO strings** (see [src/Types/Planet.ts](../src/Types/Planet.ts)).
- Helpers that compute “at date” take a real `Date` and convert from the ISO snapshot internally (see [computeResourcesForPlanetAtDate](../src/Helpers/computeResourcesForPlanetAtDate.ts)).

## Developer workflows
- Install: `npm ci`
- Build types + JS into `dist/`: `npm run build` (cleans with `rimraf`, then `tsc -p tsconfig.json`).
- Run the lightweight “test” script (currently a smoke/demo runner, not assertions): `npm test` (runs `tsx ./src/_Tests/test.ts`).
- Lint: `npm run lint` (ESLint v9 flat config in [eslint.config.mjs](../eslint.config.mjs); `dist/` is ignored).
- Formatting: Prettier settings are in [.prettierrc.json](../.prettierrc.json) (notably `tabWidth: 4`, `semi: false`).

## When changing formulas / adding names
- If you add a new structure/ship/defense name, update the relevant `src/Collections/*Names.ts` and let the union type update automatically.
- If you add a new top-level API, wire it through [src/index.ts](../src/index.ts) so consumers get it from `@slk333/lib-ogame`.
