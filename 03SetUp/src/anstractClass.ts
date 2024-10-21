abstract class TakePhoto {
  constructor(public cameraMode: string, public filer: string) {}

  abstract getSepia(): void;
  getReelTime(): number {
    //some complex calculations
    return 8;
  }
}

class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }

  getSepia(): void {
    console.log("Sepia");
  }
}

const ah = new Instagram("test", "test", 3);

// *****NOTE*****
// const ah = new TakePhoto("test", "test");
// if we declare class as abstract than we Cannot create an instance of that abstract class.
