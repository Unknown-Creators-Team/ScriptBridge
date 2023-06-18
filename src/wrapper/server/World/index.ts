import * as Minecraft from "@minecraft/server";
import * as AfterEvents from "./AfterEvents/index";
import NewPlayer from "../Player/index";

export default class World {
    private world: Minecraft.World;

    constructor(copyFrom: Minecraft.World) {
        this.world = copyFrom;
    }

    get afterEvents() {
        return AfterEvents;
    }

    get beforeEvents() {
        return this.world.beforeEvents;
    }

    broadcastClientMessage(id: string, value: string): void {
        this.world.broadcastClientMessage(id, value);
    }

    getAbsoluteTime(): number {
        return this.world.getAbsoluteTime();
    }

    getAllPlayers(): NewPlayer[] {
        return NewPlayer.convertToNewPlayer(this.world.getAllPlayers());
    }

    getDefaultSpawnPosition(): Minecraft.Vector3 {
        return this.world.getDefaultSpawnPosition();
    }

    getDimension(dimensionId: string): Minecraft.Dimension {
        return this.world.getDimension(dimensionId);
    }

    getDynamicProperty(identifier: string): boolean | number | string | undefined {
        return this.world.getDynamicProperty(identifier);
    }

    getEntity(id: string): Minecraft.Entity | undefined {
        return this.world.getEntity(id);
    }

    getPlayers(options?: Minecraft.EntityQueryOptions): NewPlayer[] {
        return NewPlayer.convertToNewPlayer(this.world.getPlayers(options));
    }

    getTime(): number {
        return this.world.getTime();
    }

    playMusic(trackID: string, musicOptions?: Minecraft.MusicOptions): void {
        this.world.playMusic(trackID, musicOptions);
    }

    playSound(soundID: string, location: Minecraft.Vector3, soundOptions?: Minecraft.WorldSoundOptions): void {
        this.world.playSound(soundID, location, soundOptions);
    }

    queueMusic(trackID: string, musicOptions?: Minecraft.MusicOptions): void {
        this.world.queueMusic(trackID, musicOptions);
    }

    removeDynamicProperty(identifier: string): boolean {
        return this.world.removeDynamicProperty(identifier);
    }

    sendMessage(message: (Minecraft.RawMessage | string)[] | Minecraft.RawMessage | string): void {
        this.world.sendMessage(message);
    }

    setDefaultSpawnPosition(position: Minecraft.Vector3): void {
        this.world.setDefaultSpawn(position);
    }

    setDynamicProperty(identifier: string, value: string | number | boolean): void {
        this.world.setDynamicProperty(identifier, value);
    }

    setTime(timeOfDay: number): void {
        this.world.setTime(timeOfDay);
    }

    stopMusic(): void {
        this.world.stopMusic();
    }
}