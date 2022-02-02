AFRAME.registerComponent("car-model", {
  schema: {
    modelRef: { type: "string", default: "../assets/car/scene.gltf" }
  },
  init: function() {
    this.el.setAttribute("gltf-model", this.data.modelRef);
  position = { x: 0, y: 50, z: 80 };
     rotation = { x: 0, y: -100, z: 0 };
    this.el.setAttribute("position", position);
    this.el.setAttribute("rotation", rotation);
  }
});