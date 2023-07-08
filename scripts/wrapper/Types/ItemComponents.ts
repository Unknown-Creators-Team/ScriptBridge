import * as Minecraft from "@minecraft/server"

export default interface ItemComponents {
    "minecraft:cooldown": Minecraft.ItemCooldownComponent,
    "cooldown": Minecraft.ItemCooldownComponent,
    "minecraft:durability": Minecraft.ItemDurabilityComponent,
    "durability": Minecraft.ItemDurabilityComponent,
    "minecraft:enchantments": Minecraft.ItemEnchantsComponent,
    "enchantments": Minecraft.ItemEnchantsComponent,
    "minecraft:food": Minecraft.ItemFoodComponent,
    "food": Minecraft.ItemFoodComponent,
}