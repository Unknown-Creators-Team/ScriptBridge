import * as Minecraft from "@minecraft/server";

type Callback = (event: NewBlockBreak) => void;

export default class NewBlockBreak {
    private static callbackList: Map<string, Callback> = new Map();
    private event: Minecraft.BlockBreakAfterEvent;

    constructor(copyFrom: Minecraft.BlockBreakAfterEvent) {
        this.event = copyFrom;
    }

    get block(): Minecraft.Block {
        return this.event.block;
    }

    get player(): Minecraft.Player {
        return this.event.player;
    }

    get dimension(): Minecraft.Dimension {
        return this.event.dimension;
    }

    get brokenBlockPermutation(): Minecraft.BlockPermutation {
        return this.event.brokenBlockPermutation;
    }

    get dimension(): Minecraft.Dimension {
        return this.event.dimension;
    }

    get player(): Minecraft.Player {
        return this.event.player;
    }
    get location(): Minecraft.Vector3 {
        return this.block.location;
    }
// // // // // // // // // // // // // // // 

    static call(event: NewBlockBreak) {
        NewBlockBreak.callbackList.forEach((callback) => {
            callback(event);
        });
    }

    static subscribe(id: string, callback: Callback) {
        NewBlockBreak.callbackList.set(id, callback);

        return id;
    }

    static unsubscribe(id: string) {
        return NewBlockBreak.callbackList.delete(id);
    }
}