# Changelog

## 2.5.10

### Fixes

-   correctly export helper functions

## 2.5.9

### Changes

-   renamed: `computeCargoCapacityForShips()` -> `getCargoCapacityForShips()`

### Added

-   **Cargo capacity helper:** `resourcesFitCargoCapacity()`

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
