import * as Minecraft from "@minecraft/server";
import NewPlayer from "../../Player/index";

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

    get player(): NewPlayer {
        return NewPlayer.convertToNewPlayer(this.event.player);
    }

    get dimension(): Minecraft.Dimension {
        return this.event.dimension;
    }

    get brokenBlockPermutation(): Minecraft.BlockPermutation {
        return this.event.brokenBlockPermutation;
    }

    getHandItem(): Minecraft.ItemStack {
        return this.player.getInventory().container.getItem(this.player.getSelectedSlot());
    }

    // // // // // // // // // // // // // // // 

    static call(event: Minecraft.BlockBreakAfterEvent) {
        NewBlockBreak.callbackList.forEach((callback) => {
            callback(new this(event));
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