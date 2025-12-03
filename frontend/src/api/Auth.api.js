const API_URL = "https://potential-bassoon-5gx9p5565jh74g4-3000.app.github.dev";

export async function registerUser({ name, email, password }) {
    const res = await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
    });

    if (!res.ok) {
        const errorBody = await res.json().catch(() => {});
        throw new Error(errorBody.error || "Failed to register");
    }
    return res.json();
}

export async function loginUser({ email, password }) {
    console.log(API_URL);
    const res = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
        const errorBody = await res.json().catch(() => ({}));
        console.log(errorBody.error);
        throw new Error(errorBody.error || "Failed to login");
    }
    return res.json();
}
