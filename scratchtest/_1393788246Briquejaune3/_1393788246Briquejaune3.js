/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _1393788246Briquejaune3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "1393788246-briquejaune",
        "./_1393788246Briquejaune3/costumes/1393788246-briquejaune.png",
        { x: 40, y: 20 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    this.goto(-50, 90);
    while (!this.touching(this.sprites["_1393242900Bille"].andClones())) {
      yield;
    }
    this.stage.vars.score += 1;
    this.visible = false;
  }
}
