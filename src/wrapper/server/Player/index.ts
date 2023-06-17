import * as Minecraft from "@minecraft/server";
import { NewEntity } from "../Entity/index";

export default class NewPlayer extends NewEntity {
    private player: Minecraft.Player;
    
    constructor(copyFrom: Minecraft.Player) {
        super(copyFrom);
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
        return this.player.getSpawnPointPosition();
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

    playSound(soundID: string, soundOptions?: Minecraft.PlaySoundOptions): void {
        this.player.playSound(soundID, soundOptions);
    }

    postClientMessage(id: string, value: string): void {
        this.player.postClientMessage(id, value);
    }

    resetLevel(): void {
        this.player.resetLevel();
    }

    sendMessage(message: (RawMessage | string)[] | RawMessage | string): void {
        this.player.sendMessage(message);
    }

    setSpawnPoint(spawnPoint?: DimensionLocation): void {
        this.player.setSpawnPosition(spawnPoint);
    }

    startItemCooldown(itemCategory: string, tickDuration: number): void {
        this.player.startItemCooldown(itemCategory, tickDuration);
    }

    static convertToNewPlayer(copyFrom: Minecraft.Player | Minecraft.Player[]) {
        if(Array.isArray(copyFrom)) {
            return copyFrom.map((v) => new NewPlayer(v));
        } else {
            return new NewPlayer(copyFrom);
        }
    }
}