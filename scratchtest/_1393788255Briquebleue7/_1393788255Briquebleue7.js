/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _1393788255Briquebleue7 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "1393788255-briquebleue",
        "./_1393788255Briquebleue7/costumes/1393788255-briquebleue.png",
        { x: 40, y: 20 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "gameover" },
        this.whenIReceiveGameover
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "gameover" },
        this.whenIReceiveGameover2
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    this.goto(100, 60);
    while (!this.touching(this.sprites["_1393242900Bille"].andClones())) {
      yield;
    }
    this.stage.vars.score += 1;
    this.visible = false;
  }

  *whenIReceiveGameover() {
    this.visible = false;
  }

  *whenIReceiveGameover2() {
    this.visible = false;
  }
}
