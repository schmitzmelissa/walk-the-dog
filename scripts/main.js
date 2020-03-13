//==============================================================================
// The following code demonstrates how to bind device position to an object.
//
// Project setup:
// - Insert an object
// - Make sure the Device Motion capability is added in the properties
//==============================================================================

// Use export keyword to make a symbol available in scripting debug console
export const Diagnostics = require('Diagnostics');

// Load in the required modules
const DeviceMotion = require('DeviceMotion');
const Scene = require('Scene');
const Patches = require('Patches');
const Reactive = require('Reactive');

// // Locate the dog object in the Scene
// const dog = Scene.root.find('dog_positioningObject');
//
// // Locate the device object in the Scene
// const device = Scene.root.find('device_positioningObject');
//
// // Store a reference to the transform of the dog and the world transform of
// // the DeviceMotion module
// const dogTransform = dog.transform;
// const deviceWorldTransform = device.worldTransform;
//
// // Bind the y rotation of the device to the dog
// // dogTransform.rotationY = deviceWorldTransform.rotationZ;
//
// // Bind the x and z position of the device to the dog
// // dogTransform.position = Reactive.point(deviceWorldTransform.x, 0, deviceWorldTransform.z);
// // dogTransform.x = deviceWorldTransform.x;
// // dogTransform.z = Reactive.neg(deviceWorldTransform.y);
// const distance = -1.0
// dogTransform.x = Reactive.add(deviceWorldTransform.x, Reactive.mul(distance, Reactive.sin(deviceWorldTransform.rotationY))); // dog_x = device_x + d*cos(a) || dog_y = device_y + d*sin(a)
// dogTransform.z = Reactive.add(deviceWorldTransform.z, Reactive.mul(distance, Reactive.cos(deviceWorldTransform.rotationY)));
//
// Diagnostics.watch("dogX - ", dogTransform.x);
// Diagnostics.watch("dogY - ", dogTransform.y);
// Diagnostics.watch("dogZ - ", dogTransform.z);
// Diagnostics.watch("deviceX - ", deviceWorldTransform.x);
// Diagnostics.watch("deviceY - ", deviceWorldTransform.y);
// Diagnostics.watch("deviceZ - ", deviceWorldTransform.z);
