import * as Minecraft from "@minecraft/server";

const { world, system } = Minecraft;

Minecraft.Entity.prototype.addTags = function(tags) {
    tags.forEach((tag) => this.addTag(tag));
}

Minecraft.Entity.prototype.removeTags = function(tags) {
    tags.forEach((tag) => this.removeTag(tag));
}