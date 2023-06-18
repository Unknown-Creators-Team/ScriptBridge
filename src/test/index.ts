import * as Minecraft from "../wrapper/server/index";

const { world } = Minecraft;

world.afterEvents.blockBreak.subscribe("test", blockBreak => {
    const { block, player, brokenBlockPermutation } = blockBreak;
    player.sendMessage(brokenBlockPermutation.type.id + ` | ${blockBreak.getHandItem().typeId}`);
});