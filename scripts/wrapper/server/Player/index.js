import * as Minecraft from "@minecraft/server";

const { world, system } = Minecraft;

Minecraft.Player.prototype.addTags = function(tags) {
    tags.forEach((tag) => this.addTag(tag));
}

Minecraft.Player.prototype.removeTags = function(tags) {
    tags.forEach((tag) => this.removeTag(tag));
}