import {
  Accessory,
  Service,
  Characteristic,
  uuid
} from "@homebridge/hap-nodejs";

import { createContactSensor } from "./contact-sensor.js";

export function createYourBridge() {
  const bridge = new Accessory(
    "YourBridge",
    uuid.generate("yourbridge:bridge")
  );

  const information = bridge.getService(
    Service.AccessoryInformation
  );

  information
    .setCharacteristic(
      Characteristic.Manufacturer,
      "YourBridge"
    )
    .setCharacteristic(
      Characteristic.Model,
      "YourBridge Bridge"
    )
    .setCharacteristic(
      Characteristic.SerialNumber,
      "YB-001"
    )
    .setCharacteristic(
      Characteristic.FirmwareRevision,
      "0.1.0"
    );

  const contactSensor = createContactSensor();

  bridge.addBridgedAccessory(contactSensor);

  return bridge;
}