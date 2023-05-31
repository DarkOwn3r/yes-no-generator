export function createImage(url, text) {
  const img = document.createElement("img");
  img.src = url;
  img.alt = text;
  return img;
}

export function createH1(text) {
  const h1 = document.createElement("h1");
  h1.textContent = text;
  return h1;
}
