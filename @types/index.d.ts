import * as Minecraft from "@minecraft/server";
import EntityComponents from "./EntityComponents";
import BlockComponents from "./BlockComponents";
import { DimensionSelector } from "./Dimension";

declare module "@minecraft/server" {
    interface Entity {
        addTags(tags: string[]): void;
        removeTags(tags: string[]): void;
        getComponent<C extends keyof EntityComponents>(componentId: C): EntityComponents[C];
    }

    interface Block {
        getComponent<C extends keyof BlockComponents>(componentId: C): BlockComponents[C]; 
    }

    interface World {
        getDimension(dimensionId: DimensionSelector): Dimension;
    }

    interface System {
        getTPS(): number;
        getDeltaTime(): number;
    }
}