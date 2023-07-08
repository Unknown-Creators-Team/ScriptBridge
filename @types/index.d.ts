import * as MC from "@minecraft/server";

declare module "@minecraft/server" {
    interface Player {
        addTags(tags: string[]): void;
        removeTags(tags: string[]): void;
    }

    interface System {
        getTPS(): number;
    }
}