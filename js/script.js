import tabs from "./modules/tabs";
import modal from "./modules/modal";
import timer from "./modules/timer";
import cards from "./modules/cards";
import calc from "./modules/calc";
import forms from "./modules/forms";
import slider from "./modules/slider";
import { openModal } from "./modules/modal";

window.addEventListener("DOMContentLoaded", () => {
  // Modal open timeout and scroll open
  const modalTimerId = setTimeout(() => openModal(".modal", modalTimerId), 30000);

  // Tabs
  tabs(".tabheader__item", ".tabcontent", ".tabheader__items", "tabheader__item_active");

  // Timer
  timer(".timer", "2026-09-21");

  // Modal
  modal("[data-modal]", ".modal", modalTimerId);

  // Using classes for menu cards
  cards();

  // Forms
  forms("form", modalTimerId);

  // Slider
  slider({
    container: ".offer__slider",
    nextArrow: ".offer__slider-next",
    slide: ".offer__slide",
    prevArrow: ".offer__slider-prev",
    totalCounter: "#total",
    currrenCounter: "#current",
    wrapper: ".offer__slider-wrapper",
    field: ".offer__slider-inner",
  });

  // Calc
  calc();
});
