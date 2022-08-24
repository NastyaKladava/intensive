export function getAllProducts(url, func) {
  fetch(url).then((response) => response.json().then((data) => func(data)));
}

export function getSelectedProduct(url, id, func) {
  fetch(url + id).then((response) =>
    response.json().then((data) => func(data))
  );
}
