import { Dimension } from "@minecraft/server";

export interface DimensionIds {
    "overworld": Dimension,
    "nether": Dimension,
    "the_end": Dimension
}

export type DimensionSelector = keyof DimensionIds;