"use strict";
class TakePhoto {
    constructor(cameraMode, filer) {
        this.cameraMode = cameraMode;
        this.filer = filer;
    }
    getReelTime() {
        //some complex calculations
        return 8;
    }
}
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Sepia");
    }
}
const ah = new Instagram("test", "test", 3);
// *****NOTE*****
// const ah = new TakePhoto("test", "test");
// if we declare class as abstract than we Cannot create an instance of that abstract class.
