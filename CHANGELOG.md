# Changelog

## 2.5.7

### Fixed

-   `TentativeFleetMission` now correctly uses `carriedResources` instead of `cargoHold`

## 2.5.6

### Added

-   **Cargo capacity helper:** `computeCargoCapacityForShips` calculates cargo capacity for a a given set of ships.
-   **Types:** `SendableFleetComposition` and `SendableShipName` types exclude non-sendable ships (Solar Satellite, Crawler).

### Changed

-   `FleetMission` now uses `SendableFleetComposition` to exclude non sendable ships.
