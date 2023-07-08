import * as Minecraft from "@minecraft/server";
import "../wrapper/index";

const { world, system } = Minecraft;

system.runInterval(() => {
    world.getPlayers().forEach((p) => {
        p.onScreenDisplay.setActionBar(`TPS: ${system.getTPS()} | ${system.getDeltaTime().toFixed(2)}`);
    });
});