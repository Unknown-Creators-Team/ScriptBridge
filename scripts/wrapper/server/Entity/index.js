export default class NewEntity {
  constructor(copyFrom) {
    this.entity = copyFrom;
  }
  getDimension() {
    return this.entity.dimension;
  }
  getId() {
    return this.entity.id;
  }
  getTypeId() {
    return this.entity.typeId;
  }
  isEntity() {
    return this instanceof NewEntity;
  }
  addEffect(effectType, duration, options) {
    return this.entity.addEffect(effectType, duration, options);
  }
  addTag(tag) {
    return this.entity.addTag(tag);
  }
  addTags(tags) {
    return tags.map((tag) => this.entity.addTag(tag));
  }
  removeTag(tag) {
    return this.entity.removeTag(tag);
  }
  removeTags(tags) {
    return tags.map((tag) => this.entity.removeTag(tag));
  }
  getTags() {
    return this.entity.getTags();
  }
  applyDamage(amount, options) {
    return this.applyDamage(amount, options);
  }
  applyImpulse(vector) {
    this.applyImpulse(vector);
  }
  applyKnockback(directionX, directionZ, horizontalStrength, verticalStrength) {
    this.applyKnockback(directionX, directionZ, horizontalStrength, verticalStrength);
  }
  clearVelocity() {
    this.clearVelocity();
  }
  extinguishFire(useEffects) {
    return this.entity.extinguishFire(useEffects);
  }
  getBlockFromViewDirection(options) {
    return this.entity.getBlockFromViewDirection(options);
  }
  getComponent(componentId) {
    return this.entity.getComponent(componentId);
  }
  getComponents() {
    return this.entity.getComponents();
  }
  getDynamicProperty(identifier) {
    return this.entity.getDynamicProperty(identifier);
  }
  getEffect(effectType) {
    return this.entity.getEffect(effectType);
  }
  getEffects() {
    return this.entity.getEffects();
  }
  getEntitiesFromViewDirection(options) {
    return this.entity.getEntitiesFromViewDirection(options);
  }
  getHeadLocation() {
    return this.entity.getHeadLocation();
  }
  getRotation() {
    return this.entity.getRotation();
  }
  getVelocity() {
    return this.entity.getVelocity();
  }
  getViewDirection() {
    return this.entity.getViewDirection();
  }
  hasComponent(componentId) {
    return this.entity.hasComponent(componentId);
  }
  hasTag(tag) {
    return this.entity.hasTag(tag);
  }
  kill() {
    return this.entity.kill();
  }
  playAnimation(animationName, options) {
    return this.entity.playAnimation(animationName, options);
  }
  removeDynamicProperty(identifier) {
    return this.entity.removeDynamicProperty(identifier);
  }
  removeEffect(effectType) {
    return this.entity.removeEffect(effectType);
  }
  runCommand(commandString) {
    return this.entity.runCommand(commandString);
  }
  runCommandAsync(commandString) {
    return this.entity.runCommandAsync(commandString);
  }
  setDynamicProperty(identifier, value) {
    return this.entity.setDynamicProperty(identifier, value);
  }
  setOnFire(seconds, useEffects) {
    return this.entity.setOnFire(seconds, useEffects);
  }
  setRotation(rotation) {
    this.entity.setRotation(rotation);
  }
  teleport(location, teleportOptions) {
    this.entity.teleport(location, teleportOptions);
  }
  tryTeleport(location, teleportOptions) {
    return this.entity.tryTeleport(location, teleportOptions);
  }
}
//# sourceMappingURL=index.js.map
