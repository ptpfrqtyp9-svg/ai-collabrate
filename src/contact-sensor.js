import {
  Accessory,
  Service,
  Characteristic,
  uuid
} from "@homebridge/hap-nodejs";

export function createContactSensor(
  name = "YourBridge Contact Sensor"
) {
  const accessory = new Accessory(
    name,
    uuid.generate(`yourbridge:${name}`)
  );

  const information = accessory.getService(
    Service.AccessoryInformation
  );

  information
    .setCharacteristic(
      Characteristic.Manufacturer,
      "YourBridge"
    )
    .setCharacteristic(
      Characteristic.Model,
      "Contact Sensor"
    )
    .setCharacteristic(
      Characteristic.SerialNumber,
      "YB-CS-001"
    )
    .setCharacteristic(
      Characteristic.FirmwareRevision,
      "0.1.0"
    );

  const sensor = accessory.addService(
    Service.ContactSensor,
    name
  );

  sensor
    .getCharacteristic(
      Characteristic.ContactSensorState
    )
    .onGet(async () => 0);

  return accessory;
}