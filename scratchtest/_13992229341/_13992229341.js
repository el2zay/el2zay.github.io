/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _13992229341 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("1399222934-1", "./_13992229341/costumes/1399222934-1.png", {
        x: 50,
        y: 50
      }),
      new Costume("1399222934-2", "./_13992229341/costumes/1399222934-2.png", {
        x: 50,
        y: 50
      }),
      new Costume("1399222934-3", "./_13992229341/costumes/1399222934-3.png", {
        x: 50,
        y: 50
      }),
      new Costume("1399222934-4", "./_13992229341/costumes/1399222934-4.png", {
        x: 50,
        y: 50
      }),
      new Costume("1399222934-5", "./_13992229341/costumes/1399222934-5.png", {
        x: 50,
        y: 50
      }),
      new Costume("1399222934-6", "./_13992229341/costumes/1399222934-6.png", {
        x: 50,
        y: 50
      }),
      new Costume("1399222934-7", "./_13992229341/costumes/1399222934-7.png", {
        x: 50,
        y: 50
      }),
      new Costume("1399222934-8", "./_13992229341/costumes/1399222934-8.png", {
        x: 50,
        y: 50
      }),
      new Costume("1399222934-9", "./_13992229341/costumes/1399222934-9.png", {
        x: 50,
        y: 50
      }),
      new Costume(
        "1399222934-10",
        "./_13992229341/costumes/1399222934-10.png",
        { x: 50, y: 50 }
      ),
      new Costume(
        "1399222934-11",
        "./_13992229341/costumes/1399222934-11.png",
        { x: 50, y: 50 }
      ),
      new Costume(
        "1399222934-12",
        "./_13992229341/costumes/1399222934-12.png",
        { x: 50, y: 50 }
      ),
      new Costume(
        "1399222934-13",
        "./_13992229341/costumes/1399222934-13.png",
        { x: 50, y: 50 }
      ),
      new Costume(
        "1399222934-14",
        "./_13992229341/costumes/1399222934-14.png",
        { x: 50, y: 50 }
      ),
      new Costume(
        "1399222934-15",
        "./_13992229341/costumes/1399222934-15.png",
        { x: 50, y: 50 }
      ),
      new Costume(
        "1399222934-16",
        "./_13992229341/costumes/1399222934-16.png",
        { x: 50, y: 50 }
      ),
      new Costume(
        "1399222934-17",
        "./_13992229341/costumes/1399222934-17.png",
        { x: 50, y: 50 }
      ),
      new Costume(
        "1399222934-18",
        "./_13992229341/costumes/1399222934-18.png",
        { x: 50, y: 50 }
      ),
      new Costume(
        "1399222934-19",
        "./_13992229341/costumes/1399222934-19.png",
        { x: 50, y: 50 }
      ),
      new Costume(
        "1399222934-20",
        "./_13992229341/costumes/1399222934-20.png",
        { x: 50, y: 50 }
      ),
      new Costume(
        "1399222934-21",
        "./_13992229341/costumes/1399222934-21.png",
        { x: 50, y: 50 }
      ),
      new Costume(
        "1399222934-22",
        "./_13992229341/costumes/1399222934-22.png",
        { x: 50, y: 50 }
      ),
      new Costume(
        "1399222934-23",
        "./_13992229341/costumes/1399222934-23.png",
        { x: 50, y: 50 }
      ),
      new Costume(
        "1399222934-24",
        "./_13992229341/costumes/1399222934-24.png",
        { x: 50, y: 50 }
      ),
      new Costume(
        "1399222934-25",
        "./_13992229341/costumes/1399222934-25.png",
        { x: 50, y: 50 }
      ),
      new Costume(
        "1399222935-25",
        "./_13992229341/costumes/1399222935-25.png",
        { x: 50, y: 50 }
      ),
      new Costume(
        "1399222935-26",
        "./_13992229341/costumes/1399222935-26.png",
        { x: 50, y: 50 }
      ),
      new Costume(
        "1399222935-27",
        "./_13992229341/costumes/1399222935-27.png",
        { x: 50, y: 50 }
      ),
      new Costume(
        "1399222935-28",
        "./_13992229341/costumes/1399222935-28.png",
        { x: 50, y: 50 }
      ),
      new Costume(
        "1399222935-29",
        "./_13992229341/costumes/1399222935-29.png",
        { x: 50, y: 50 }
      ),
      new Costume(
        "1399222935-30",
        "./_13992229341/costumes/1399222935-30.png",
        { x: 50, y: 50 }
      )
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "gameover" },
        this.whenIReceiveGameover
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(0, 0);
    this.costume = "1399222935-30";
    this.visible = false;
    yield* this.wait(3);
    this.visible = true;
    yield* this.wait(1);
    this.costume = "1399222935-29";
    yield* this.wait(1);
    this.costume = "1399222935-28";
    yield* this.wait(1);
    this.costume = "1399222935-27";
    yield* this.wait(1);
    this.costume = "1399222935-26";
    yield* this.wait(1);
    this.costume = "1399222935-25";
    yield* this.wait(1);
    this.costume = "1399222934-24";
    yield* this.wait(1);
    this.costume = "1399222934-23";
    yield* this.wait(1);
    this.costume = "1399222934-22";
    yield* this.wait(1);
    this.costume = "1399222934-21";
    yield* this.wait(1);
    this.costume = "1399222934-20";
    yield* this.wait(1);
    this.costume = "1399222934-19";
    yield* this.wait(1);
    this.costume = "1399222934-18";
    yield* this.wait(1);
    this.costume = "1399222934-17";
    yield* this.wait(1);
    this.costume = "1399222934-16";
    yield* this.wait(1);
    this.costume = "1399222934-15";
    yield* this.wait(1);
    this.costume = "1399222934-14";
    yield* this.wait(1);
    this.costume = "1399222934-13";
    yield* this.wait(1);
    this.costume = "1399222934-12";
    yield* this.wait(1);
    this.costume = "1399222934-11";
    yield* this.wait(1);
    this.costume = "1399222934-10";
    yield* this.wait(1);
    this.costume = "1399222934-9";
    yield* this.wait(1);
    this.costume = "1399222934-8";
    yield* this.wait(1);
    this.costume = "1399222934-7";
    yield* this.wait(1);
    this.costume = "1399222934-6";
    yield* this.wait(1);
    this.costume = "1399222934-5";
    yield* this.wait(1);
    this.costume = "1399222934-4";
    yield* this.wait(1);
    this.costume = "1399222934-3";
    yield* this.wait(1);
    this.costume = "1399222934-2";
    yield* this.wait(1);
    this.costume = "1399222934-1";
    yield* this.wait(1);
    if (this.stage.vars.score < 36) {
      this.broadcast("gameover");
    }
  }

  *whenGreenFlagClicked2() {
    while (!(this.stage.vars.score == 36)) {
      yield;
    }
    this.broadcast("niveau2");
    this.goto(0, 0);
    this.costume = "1399222935-30";
    this.visible = false;
    yield* this.wait(3);
    this.visible = true;
    yield* this.wait(1);
    this.costume = "1399222935-29";
    yield* this.wait(1);
    this.costume = "1399222935-28";
    yield* this.wait(1);
    this.costume = "1399222935-27";
    yield* this.wait(1);
    this.costume = "1399222935-26";
    yield* this.wait(1);
    this.costume = "1399222935-25";
    yield* this.wait(1);
    this.costume = "1399222934-24";
    yield* this.wait(1);
    this.costume = "1399222934-23";
    yield* this.wait(1);
    this.costume = "1399222934-22";
    yield* this.wait(1);
    this.costume = "1399222934-21";
    yield* this.wait(1);
    this.costume = "1399222934-20";
    yield* this.wait(1);
    this.costume = "1399222934-19";
    yield* this.wait(1);
    this.costume = "1399222934-18";
    yield* this.wait(1);
    this.costume = "1399222934-17";
    yield* this.wait(1);
    this.costume = "1399222934-16";
    yield* this.wait(1);
    this.costume = "1399222934-15";
    yield* this.wait(1);
    this.costume = "1399222934-14";
    yield* this.wait(1);
    this.costume = "1399222934-13";
    yield* this.wait(1);
    this.costume = "1399222934-12";
    yield* this.wait(1);
    this.costume = "1399222934-11";
    yield* this.wait(1);
    this.costume = "1399222934-10";
    yield* this.wait(1);
    this.costume = "1399222934-9";
    yield* this.wait(1);
    this.costume = "1399222934-8";
    yield* this.wait(1);
    this.costume = "1399222934-7";
    yield* this.wait(1);
    this.costume = "1399222934-6";
    yield* this.wait(1);
    this.costume = "1399222934-5";
    yield* this.wait(1);
    this.costume = "1399222934-4";
    yield* this.wait(1);
    this.costume = "1399222934-3";
    yield* this.wait(1);
    this.costume = "1399222934-2";
    yield* this.wait(1);
    this.costume = "1399222934-1";
    yield* this.wait(1);
    this.broadcast("gameover");
  }

  *whenIReceiveGameover() {
    this.visible = false;
  }
}
