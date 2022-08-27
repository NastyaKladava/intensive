export function fetchProducts(url, func) {
  fetch(url).then((response) => response.json().then((data) => func(data)));
}
