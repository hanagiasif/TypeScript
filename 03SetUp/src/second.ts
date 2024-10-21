interface TakePhoto {
  cameraMode: string;
  filter: string;
  brust: number;
}

interface Story {
  createStory(): void;
}

class Instagram implements TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public brust: number
  ) {}
}

class Youtube implements TakePhoto, Story {
  constructor(
    public cameraMode: string,
    public filter: string,
    public brust: number,
    public short: string
  ) {}

  createStory(): void {
    console.log("Story was created");
  }
}
