const API_URL = "http://localhost:8080/api/products";
const form = document.getElementById("productForm");
const products = document.getElementById("products");
const message = document.getElementById("message");

async function loadProducts() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error();
        const data = await response.json();
        products.innerHTML = data.map(p => `
            <tr>
                <td>${p.id}</td>
                <td>${escapeHtml(p.name)}</td>
                <td>₹${Number(p.price).toFixed(2)}</td>
                <td><button class="delete" onclick="deleteProduct(${p.id})">Delete</button></td>
            </tr>`).join("");
    } catch {
        message.textContent = "Unable to connect to Java backend.";
    }
}

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const price = Number(document.getElementById("price").value);

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({name, price})
        });
        if (!response.ok) throw new Error();
        form.reset();
        message.textContent = "Product added successfully.";
        loadProducts();
    } catch {
        message.textContent = "Unable to add product.";
    }
});

async function deleteProduct(id) {
    try {
        const response = await fetch(`${API_URL}/${id}`, {method: "DELETE"});
        if (!response.ok) throw new Error();
        loadProducts();
    } catch {
        message.textContent = "Unable to delete product.";
    }
}

function escapeHtml(value) {
    return String(value).replaceAll("&","&amp;").replaceAll("<","&lt;")
        .replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;");
}

loadProducts();