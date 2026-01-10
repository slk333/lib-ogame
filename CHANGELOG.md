# Changelog

## 2.5.9

### Changes

-   rename `computeCargoCapacityForShips` to `getCargoCapacityForShips`

### Added

-   **Cargo capacity helper:** `resourcesFitCargoCapacity`

## 2.5.8

### Changed

-   use `FleetShips` instead of `SendableFleetComposition`
-   use `FleetShipName` instead of `SendableShipName`.

## 2.5.7

### Fixed

-   `TentativeFleetMission` now correctly uses `carriedResources` instead of `cargoHold`

## 2.5.6

### Added

-   **Cargo capacity helper:** `computeCargoCapacityForShips` calculates cargo capacity for a a given set of ships.
