import * as Minecraft from "@minecraft/server";
import BlockBreak from "./blockBreak";

export const blockBreak = BlockBreak;

//  Handler  \\

const { world: { afterEvents, beforeEvents } } = Minecraft;

afterEvents.blockBreak.subscribe((ev) => {
    blockBreak.call(ev);
});