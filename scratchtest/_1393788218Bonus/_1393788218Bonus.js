/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _1393788218Bonus extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "1393788218-bonus",
        "./_1393788218Bonus/costumes/1393788218-bonus.png",
        { x: 50, y: 50 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "bonus1" },
        this.whenIReceiveBonus1
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "bonus1" },
        this.whenIReceiveBonus2
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.goto(0, 120);
  }

  *whenIReceiveBonus1() {
    this.visible = true;
    yield* this.glide(3, 0, -180);
  }

  *whenIReceiveBonus2() {
    while (!this.touching(this.sprites["_1393242928Raquette"].andClones())) {
      yield;
    }
    this.stage.vars.score += 10;
    this.visible = false;
  }
}
