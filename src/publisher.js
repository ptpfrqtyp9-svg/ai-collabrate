import { Accessory } from "@homebridge/hap-nodejs";

const PUBLISH_INFO = {
  username: "AA:BB:CC:DD:EE:01",
  pincode: "031-45-154",
  category: Accessory.Categories.BRIDGE
};

export async function publishYourBridge(bridge) {
  if (!bridge) {
    throw new TypeError("publishYourBridge requires a bridge.");
  }

  await bridge.publish(PUBLISH_INFO);

  console.log("YourBridge is now published.");
  console.log(`Name: ${bridge.displayName}`);
  console.log(`HAP username: ${PUBLISH_INFO.username}`);
}
