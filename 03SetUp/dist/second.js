"use strict";
class Instagram {
    constructor(cameraMode, filter, brust) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.brust = brust;
    }
}
class Youtube {
    constructor(cameraMode, filter, brust, short) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.brust = brust;
        this.short = short;
    }
    createStory() {
        console.log("Story was created");
    }
}
