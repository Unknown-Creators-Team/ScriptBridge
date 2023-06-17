import * as Minecraft from "../wrapper/server/index";

const { world, system } = Minecraft;

world.afterEvents.blockBreak.subscribe(blockBreak => {
    const { block, player } = blockBreak;
    player.sendMessage(block.typeId);
});