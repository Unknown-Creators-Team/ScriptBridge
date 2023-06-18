import * as Minecraft from "@minecraft/server";

import NewPlayer from "./Player/index";
import NewWorld from "./World/index";
import NewSystem from "./System/index"

export const Player = NewPlayer;
export const world = new NewWorld(Minecraft.world);
export const system = new NewSystem();