import * as Minecraft from "@minecraft/server";
import NewEntity from "../Entity/index";
import { world } from "../index";
import { DimensionSelector } from "../../Types/index";

export default class NewPlayer extends NewEntity {
    private player: Minecraft.Player;
    
    constructor(copyFrom: Minecraft.Player) {
        super(copyFrom)
        this.player = copyFrom;
    }

    get name(): string {
        return this.player.name;
    }

    get nameTag(): string {
        return this.player.nameTag;
    }

    setNameTag(nameTag: string): void {
        this.player.nameTag = nameTag;
    }

    kick(reason: string): boolean {
        return this.player.runCommand(`kick "${this.player.name}" ${reason}`) ? true : false;
    }

    kickAsync(reason: string): Promise<boolean|any> {
        return new Promise((resolve, reject) => {
            this.player.runCommandAsync(`kick "${this.player.name}" ${reason}`)
            .then(() => resolve(true))
            .catch((e) => reject(e));
        })
    }

    getInventory() {
        return this.getComponent("inventory");
    }

    getSelectedSlot(): number {
        return this.player.selectedSlot;
    }

    setSelectedSlot(slot: number): void {
        this.player.selectedSlot = slot;
    }

    getTotalXpNeededForNextLevel(): number {
        return this.player.totalXpNeededForNextLevel;
    }

    getXpEarnedAtCurrentLevel(): number {
        return this.player.xpEarnedAtCurrentLevel;
    }

    addExperience(amount: number): number {
        return this.player.addExperience(amount);
    }

    addLevels(amount: number): number {
        return this.player.addLevels(amount);
    }

    getItemCooldown(itemCategory: string): number {
        return this.player.getItemCooldown(itemCategory);
    }

    getSpawnPoint(): Minecraft.Vector3 | undefined {
        return this.player.getSpawnPosition();
    }

    setSpawnPoint(spawnPoint: Minecraft.Vector3, dimensionId: DimensionSelector): void {
        const dimension = world.getDimension(dimensionId);

        this.player.setSpawn(spawnPoint, dimension);
    }

    getTotalXp(): number {
        return this.player.getTotalXp();
    }

    isOperator(): boolean {
        return this.player.isOp();
    }

    setOperator(status: boolean): void {
        this.player.setOp(status);
    }

    playSound(soundID: string, soundOptions?: Minecraft.PlayerSoundOptions): void {
        this.player.playSound(soundID, soundOptions);
    }

    postClientMessage(id: string, value: string): void {
        this.player.postClientMessage(id, value);
    }

    resetLevel(): void {
        this.player.resetLevel();
    }

    sendMessage(message: (Minecraft.RawMessage | string)[] | Minecraft.RawMessage | string): void {
        this.player.sendMessage(message);
    }

    startItemCooldown(itemCategory: string, tickDuration: number): void {
        this.player.startItemCooldown(itemCategory, tickDuration);
    }

    // copyFromが配列の場合、配列で返す。配列ではない場合、単体で返す。
    static convertToNewPlayer<T extends Minecraft.Player | Array<Minecraft.Player>>(copyFrom: T): T extends Array<Minecraft.Player> ? NewPlayer[] : NewPlayer {
        if(copyFrom instanceof Array) {
            return copyFrom.map((v) => new NewPlayer(v)) as any;
        } else {
            return new NewPlayer(copyFrom) as any;
        }
    }
}