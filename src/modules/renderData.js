import { createImage, createH1 } from "./DOM.js";

const container = document.querySelector(".container");

export function renderData(data) {
  console.log(data.answer, data.image);
  const img = createImage(data.image, data.answer);
  const h1 = createH1(data.answer);
  container.appendChild(h1);
  container.appendChild(img);
}
