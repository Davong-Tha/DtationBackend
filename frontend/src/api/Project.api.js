const API_URL = "https://potential-bassoon-5gx9p5565jh74g4-3000.app.github.dev";

export async function CreateProject({ name, token }) {
  const res = await fetch(`${API_URL}/project/create`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name }),
  });

  if (!res.ok) {
    const errorBody = await res.json().catch(() => {});
    throw new Error(errorBody.error || "Failed to create project");
  }
  return res.json();
}

export async function getAllProjects({ token }) {
  const res = await fetch(`${API_URL}/project/getAll`, {
    method: "Get",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    const errorBody = await res.json().catch(() => {});
    throw new Error(errorBody.error || "Failed to get projects");
  }
  return res.json();
}
