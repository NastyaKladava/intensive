const API_URL = "https://631099a2826b98071a459bf2.mockapi.io/";

export async function fetchGetTodos(url: string): Promise<Response> {
  // const url = `${API_URL}${endUrl}`;
  const response = await fetch(url);
  return response;
}

