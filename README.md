# YourBridge

A privacy-first HomeKit bridge.

## Phase 1

The first milestone is intentionally tiny:

- YourBridge bridge
- One Contact Sensor
- HAP-NodeJS protocol implementation
- No Ring
- No SmartThings
- No Fire TV
- No cloud integration

## Architecture

Apple Home
    |
    v
YourBridge
    |
    v
HAP Engine
    |
    v
Contact Sensor

## Goal

Prove that a minimal YourBridge accessory can be
published to Apple Home.

## Privacy

YourBridge should avoid unnecessary external services
and should only communicate with third-party device
services when the user explicitly enables an integration.