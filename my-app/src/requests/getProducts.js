export function getAllProducts(url) {
  return fetch(url).then((response) => response.json());
}

export function getSelectedProduct(url, id) {
  return fetch(url + id).then((response) => response.json());
}
