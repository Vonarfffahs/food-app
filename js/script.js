window.addEventListener("DOMContentLoaded", () => {
  const tabs = require("./modules/tabs"),
    modal = require("./modules/modal"),
    timer = require("./modules/timer"),
    cards = require("./modules/cards"),
    calc = require("./modules/calc"),
    forms = require("./modules/forms"),
    slider = require("./modules/slider");

  // Tabs
  tabs();

  // Timer
  timer();

  // Modal
  modal();

  // Using classes for menu cards
  cards();

  // Forms
  forms();

  // Slider
  slider();

  // Calc
  calc();
});
