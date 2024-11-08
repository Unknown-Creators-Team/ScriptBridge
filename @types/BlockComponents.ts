import * as Minecraft from "@minecraft/server";

export default interface BlockComponents {
    "minecraft:piston": Minecraft.BlockPistonComponent,
    "minecraft:recordPlayer": Minecraft.BlockRecordPlayerComponent,
    "minecraft:sign": Minecraft.BlockSignComponent
}

// export default interface BlockComponents {
//     "minecraft:piston": Minecraft.BlockPistonComponent,
//     "piston": Minecraft.BlockPistonComponent,
//     "minecraft:recordPlayer": Minecraft.BlockRecordPlayerComponent,
//     "recordPlayer": Minecraft.BlockRecordPlayerComponent,
//     "minecraft:sign": Minecraft.BlockSignComponent,
//     "sign": Minecraft.BlockSignComponent,
// }