/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _1393242928Raquette extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "1393242928-raquette",
        "./_1393242928Raquette/costumes/1393242928-raquette.png",
        { x: 60, y: 20 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.score = 0;
    while (true) {
      this.y = -145;
      this.x = this.mouse.x;
      yield;
    }
  }

  *whenGreenFlagClicked2() {}
}
