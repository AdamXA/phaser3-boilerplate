import Phaser from "phaser";

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 1280,
  height: 720,
  scene: {
    preload: preload,
    create: create
  }
};

const game = new Phaser.Game(config);

function onProgressUpdate() {
  // update bar progress
}

function onLoadComplete() {
  // move
}

function preload() {
  this.load.on('progress', onProgressUpdate);
  this.load.on('complete', onLoadComplete);
}

function create() {}