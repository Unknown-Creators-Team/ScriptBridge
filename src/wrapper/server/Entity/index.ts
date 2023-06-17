import * as Minecraft from "@minecraft/server";
import { EntityComponents } from "../../Types/EntityComponents";

type DynamicPropertyReturns = boolean | number | string | undefined;
type DynamicPropertySetter = boolean | number | string;

export class NewEntity {
    private entity: Minecraft.Entity;

    constructor(copyFrom: Minecraft.Entity) {
        this.entity = copyFrom;
    }

    getDimension(): Minecraft.Dimension {
        return this.entity.dimension;
    }

    getId(): string {
        return this.entity.id;
    }

    getTypeId(): string {
        return this.entity.typeId;
    }

    isEntity(): this is NewEntity {
        return this instanceof NewEntity; 
    }

    addEffect(effectType: string | Minecraft.EffectType, duration: number, options?: Minecraft.EntityEffectOptions | undefined): boolean {
        return this.entity.addEffect(effectType, duration, options);
    }

    addTag(tag: string): boolean {
        return this.entity.addTag(tag);
    }

    addTags(tags: string[]): boolean[] {
        return tags.map((tag) => this.entity.addTag(tag));
    }

    removeTag(tag: string): boolean {
        return this.entity.removeTag(tag);
    }

    removeTags(tags: string[]): boolean[] {
        return tags.map((tag) => this.entity.removeTag(tag));
    }

    getTags(): string[] {
        return this.entity.getTags();
    }

    applyDamage(amount: number, options?: Minecraft.EntityApplyDamageByProjectileOptions | Minecraft.EntityApplyDamageOptions | undefined): boolean {
        return this.applyDamage(amount, options);
    }

    applyImpulse(vector: Minecraft.Vector3): void {
        this.applyImpulse(vector);
    }

    applyKnockback(directionX: number, directionZ: number, horizontalStrength: number, verticalStrength: number): void {
        this.applyKnockback(directionX, directionZ, horizontalStrength, verticalStrength);
    }

    clearVelocity(): void {
        this.clearVelocity();
    }

    extinguishFire(useEffects?: boolean | undefined): boolean {
        return this.entity.extinguishFire(useEffects);
    }

    getBlockFromViewDirection(options?: Minecraft.BlockRaycastOptions | undefined): Minecraft.Block {
        return this.entity.getBlockFromViewDirection(options);
    }

    getComponent<C extends keyof EntityComponents>(componentId: C): EntityComponents[C] | undefined {
        return this.entity.getComponent(componentId) as any;
    }

    getComponents(): Minecraft.EntityComponent[] {
        return this.entity.getComponents();
    }

    getDynamicProperty(identifier: string): string | number | boolean | undefined {
        return this.entity.getDynamicProperty(identifier);
    }

    getEffect(effectType: string | Minecraft.EffectType): Minecraft.Effect | undefined {
        return this.entity.getEffect(effectType);
    }

    getEffects(): Minecraft.Effect[] {
        return this.entity.getEffects();
    }

    getEntitiesFromViewDirection(options?: Minecraft.EntityRaycastOptions | undefined): Minecraft.Entity[] {
        return this.entity.getEntitiesFromViewDirection(options);
    }

    getHeadLocation(): Minecraft.Vector3 {
        return this.entity.getHeadLocation();
    }

    getRotation(): Minecraft.Vector2 {
        return this.entity.getRotation();
    }

    getVelocity(): Minecraft.Vector3 {
        return this.entity.getVelocity();
    }

    getViewDirection(): Minecraft.Vector3 {
        return this.entity.getViewDirection();
    }

    hasComponent(componentId: keyof EntityComponents): boolean {
        return this.entity.hasComponent(componentId as any);
    }

    hasTag(tag: string): boolean {
        return this.entity.hasTag(tag);
    }

    kill(): boolean {
        return this.entity.kill();
    }

    playAnimation(animationName: string, options?: Minecraft.PlayAnimationOptions): void {
        return this.entity.playAnimation(animationName, options);
    }

    removeDynamicProperty(identifier: string): boolean {
        return this.entity.removeDynamicProperty(identifier);
    }

    removeEffect(effectType: string | Minecraft.EffectType): boolean {
        return this.entity.removeEffect(effectType);
    }

    runCommand(commandString: string): Minecraft.CommandResult {
        return this.entity.runCommand(commandString);
    }

    runCommandAsync(commandString: string): Promise<Minecraft.CommandResult> {
        return this.entity.runCommandAsync(commandString);
    }

    setDynamicProperty(identifier: string, value: string | number | boolean): void {
        return this.entity.setDynamicProperty(identifier, value);
    }

    setOnFire(seconds: number, useEffects?: boolean): boolean {
        return this.entity.setOnFire(seconds, useEffects);
    }

    setRotation(rotation: Minecraft.Vector2): void {
        this.entity.setRotation(rotation);
    }

    teleport(location: Minecraft.Vector3, teleportOptions?: Minecraft.TeleportOptions | undefined): void {
        this.entity.teleport(location, teleportOptions);
    }

    tryTeleport(location: Minecraft.Vector3, teleportOptions?: Minecraft.TeleportOptions | undefined): boolean {
        return this.entity.tryTeleport(location, teleportOptions);
    }
}