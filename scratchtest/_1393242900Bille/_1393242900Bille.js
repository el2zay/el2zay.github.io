/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _1393242900Bille extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "1393242900-bille",
        "./_1393242900Bille/costumes/1393242900-bille.png",
        { x: 10, y: 10 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    yield* this.wait(1);
    this.visible = true;
    this.goto(0, 0);
    yield* this.glide(0.5, this.mouse.x, -145);
    while (true) {
      if (this.touching(this.sprites["_1393242928Raquette"].andClones())) {
        this.direction = this.random(-45, 45);
      }
      /* TODO: Implement motion_ifonedgebounce */ null;
      this.move(10);
      if (this.y < -150) {
        this.visible = false;
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    yield* this.wait(3);
    this.visible = true;
    this.goto(0, 0);
    yield* this.glide(0.5, this.mouse.x, -145);
  }
}
