export interface DimensionIds {
    "overworld": "minecraft:overworld",
    "nether": "minecraft:nether",
    "the_end": "minecraft:the_end"
}

export type DimensionSelector = keyof DimensionIds;