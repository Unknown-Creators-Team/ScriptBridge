import * as Minecraft from "@minecraft/server";

const { world, system } = Minecraft;

let TPS = 20;
let DeltaTime_LAST = 0; // Last Epoch
let DeltaTimeArray = [];
let DeltaTime = 0; 

Minecraft.System.prototype.getTPS = function() {
    return TPS;
}
Minecraft.System.prototype.getDeltaTime = function() {
    return DeltaTime;
}

const calculateAverage = (array) => array.reduce((a, b) => a + b) / array.length;

system.runInterval(() => {
    const now = Date.now();

    DeltaTimeArray.push(now - DeltaTime_LAST);

    if (DeltaTimeArray.length > 30) DeltaTimeArray.shift();

    DeltaTime_LAST = Date.now();

    DeltaTime = calculateAverage(DeltaTimeArray);
    TPS = Math.min(calculateAverage(DeltaTimeArray.map((v) => 1000 / v)), 20);
});