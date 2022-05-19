import { Selector } from "testcafe";

export const byClassN = Selector((value, index) => {
  return document.getElementsByClassName(value)[index];
});

export const byClass = Selector(value => {
  return document.getElementsByClassName(value);
});

export const byId = Selector(value => {
  return document.getElementById(value);
});



