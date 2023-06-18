import NewEntity from "../Entity/index";
import { world } from "../index";
export default class NewPlayer extends NewEntity {
  constructor(copyFrom) {
    super(copyFrom);
    this.player = copyFrom;
  }
  get name() {
    return this.player.name;
  }
  get nameTag() {
    return this.player.nameTag;
  }
  setNameTag(nameTag) {
    this.player.nameTag = nameTag;
  }
  kick(reason) {
    return this.player.runCommand(`kick "${this.player.name}" ${reason}`) ? true : false;
  }
  kickAsync(reason) {
    return new Promise((resolve, reject) => {
      this.player.runCommandAsync(`kick "${this.player.name}" ${reason}`).then(() => resolve(true)).catch((e) => reject(e));
    });
  }
  getInventory() {
    return this.getComponent("inventory");
  }
  getSelectedSlot() {
    return this.player.selectedSlot;
  }
  setSelectedSlot(slot) {
    this.player.selectedSlot = slot;
  }
  getTotalXpNeededForNextLevel() {
    return this.player.totalXpNeededForNextLevel;
  }
  getXpEarnedAtCurrentLevel() {
    return this.player.xpEarnedAtCurrentLevel;
  }
  addExperience(amount) {
    return this.player.addExperience(amount);
  }
  addLevels(amount) {
    return this.player.addLevels(amount);
  }
  getItemCooldown(itemCategory) {
    return this.player.getItemCooldown(itemCategory);
  }
  getSpawnPoint() {
    return this.player.getSpawnPosition();
  }
  setSpawnPoint(spawnPoint, dimensionId) {
    const dimension = world.getDimension(dimensionId);
    this.player.setSpawn(spawnPoint, dimension);
  }
  getTotalXp() {
    return this.player.getTotalXp();
  }
  isOperator() {
    return this.player.isOp();
  }
  setOperator(status) {
    this.player.setOp(status);
  }
  playSound(soundID, soundOptions) {
    this.player.playSound(soundID, soundOptions);
  }
  postClientMessage(id, value) {
    this.player.postClientMessage(id, value);
  }
  resetLevel() {
    this.player.resetLevel();
  }
  sendMessage(message) {
    this.player.sendMessage(message);
  }
  startItemCooldown(itemCategory, tickDuration) {
    this.player.startItemCooldown(itemCategory, tickDuration);
  }
  static convertToNewPlayer(copyFrom) {
    if (copyFrom instanceof Array) {
      return copyFrom.map((v) => new NewPlayer(v));
    } else {
      return new NewPlayer(copyFrom);
    }
  }
}
//# sourceMappingURL=index.js.map
