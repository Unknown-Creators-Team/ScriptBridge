import NewPlayer from "../../Player/index";
const _NewBlockBreak = class {
  constructor(copyFrom) {
    this.event = copyFrom;
  }
  get block() {
    return this.event.block;
  }
  get player() {
    return NewPlayer.convertToNewPlayer(this.event.player);
  }
  get dimension() {
    return this.event.dimension;
  }
  get brokenBlockPermutation() {
    return this.event.brokenBlockPermutation;
  }
  getHandItem() {
    return this.player.getInventory().container.getItem(this.player.getSelectedSlot());
  }
  static call(event) {
    _NewBlockBreak.callbackList.forEach((callback) => {
      callback(new this(event));
    });
  }
  static subscribe(id, callback) {
    _NewBlockBreak.callbackList.set(id, callback);
    return id;
  }
  static unsubscribe(id) {
    return _NewBlockBreak.callbackList.delete(id);
  }
};
let NewBlockBreak = _NewBlockBreak;
NewBlockBreak.callbackList = /* @__PURE__ */ new Map();
export {
  NewBlockBreak as default
};
//# sourceMappingURL=blockBreak.js.map
