import * as AfterEvents from "./AfterEvents/index";
import NewPlayer from "../Player/index";
export default class World {
  constructor(copyFrom) {
    this.world = copyFrom;
  }
  get afterEvents() {
    return AfterEvents;
  }
  get beforeEvents() {
    return this.world.beforeEvents;
  }
  broadcastClientMessage(id, value) {
    this.world.broadcastClientMessage(id, value);
  }
  getAbsoluteTime() {
    return this.world.getAbsoluteTime();
  }
  getAllPlayers() {
    return NewPlayer.convertToNewPlayer(this.world.getAllPlayers());
  }
  getDefaultSpawnPosition() {
    return this.world.getDefaultSpawnPosition();
  }
  getDimension(dimensionId) {
    return this.world.getDimension(dimensionId);
  }
  getDynamicProperty(identifier) {
    return this.world.getDynamicProperty(identifier);
  }
  getEntity(id) {
    return this.world.getEntity(id);
  }
  getPlayers(options) {
    return NewPlayer.convertToNewPlayer(this.world.getPlayers(options));
  }
  getTime() {
    return this.world.getTime();
  }
  playMusic(trackID, musicOptions) {
    this.world.playMusic(trackID, musicOptions);
  }
  playSound(soundID, location, soundOptions) {
    this.world.playSound(soundID, location, soundOptions);
  }
  queueMusic(trackID, musicOptions) {
    this.world.queueMusic(trackID, musicOptions);
  }
  removeDynamicProperty(identifier) {
    return this.world.removeDynamicProperty(identifier);
  }
  sendMessage(message) {
    this.world.sendMessage(message);
  }
  setDefaultSpawnPosition(position) {
    this.world.setDefaultSpawn(position);
  }
  setDynamicProperty(identifier, value) {
    this.world.setDynamicProperty(identifier, value);
  }
  setTime(timeOfDay) {
    this.world.setTime(timeOfDay);
  }
  stopMusic() {
    this.world.stopMusic();
  }
}
//# sourceMappingURL=index.js.map
