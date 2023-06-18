import * as Minecraft from "@minecraft/server";
import BlockBreak from "./blockBreak";
export const blockBreak = BlockBreak;
const { world: { afterEvents, beforeEvents } } = Minecraft;
afterEvents.blockBreak.subscribe((ev) => {
  blockBreak.call(ev);
});
//# sourceMappingURL=index.js.map
