/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _1399222935Gameover extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "1399222935-gameover",
        "./_1399222935Gameover/costumes/1399222935-gameover.png",
        { x: 200, y: 200 }
      ),
      new Costume(
        "1399222935-level1",
        "./_1399222935Gameover/costumes/1399222935-level1.png",
        { x: 200, y: 200 }
      ),
      new Costume(
        "1399222935-level2",
        "./_1399222935Gameover/costumes/1399222935-level2.png",
        { x: 200, y: 200 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "niveau2" },
        this.whenIReceiveNiveau2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "gameover" },
        this.whenIReceiveGameover
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.costume = "1399222935-level1";
    this.goto(0, 0);
    this.visible = false;
    yield* this.wait(0.5);
    this.visible = true;
    yield* this.wait(0.5);
    this.visible = false;
    yield* this.wait(0.5);
    this.visible = true;
    yield* this.wait(0.5);
    this.visible = false;
    yield* this.wait(0.5);
    this.visible = true;
    yield* this.wait(0.5);
    this.visible = false;
  }

  *whenIReceiveNiveau2() {
    this.costume = "1399222935-level2";
    this.goto(0, 0);
    this.visible = false;
    yield* this.wait(0.5);
    this.visible = true;
    yield* this.wait(0.5);
    this.visible = false;
    yield* this.wait(0.5);
    this.visible = true;
    yield* this.wait(0.5);
    this.visible = false;
    yield* this.wait(0.5);
    this.visible = true;
    yield* this.wait(0.5);
    this.visible = false;
  }

  *whenIReceiveGameover() {
    this.visible = true;
    this.visible = false;
  }
}
