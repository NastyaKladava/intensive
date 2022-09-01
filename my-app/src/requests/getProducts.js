const API_URL = "https://fakestoreapi.com/";

export async function fetchCustom(endUrl) {
  const url = `${API_URL}${endUrl}`;
  const response = await fetch(url);
  return response;
}
