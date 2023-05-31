import { renderData } from "./modules/renderData.js";

const URL = "https://yesno.wtf/api";

// Modalidad .then
fetch(URL)
  .then((response) => response.json())
  .then((data) => {
    renderData(data);
  });

// Modalidad async/await
// const response = await fetch(URL);
// const data = await response.json();
// renderData(data);
