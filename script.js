document.getElementById("form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const username = document.getElementById("search").value.trim();

    if (username) {
        getUser(username);
    } else {
        console.error("Username is empty!");
        document.getElementById("main").innerHTML = `<p style="color: red;">Please enter a username!</p>`;
    }
});

async function getUser(username) {
    try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        console.log("API Response:", response.data);

        document.getElementById("main").innerHTML = `
            <div class="user-card">
                <img src="${response.data.avatar_url}" alt="${response.data.name}">
                <h2>${response.data.name || "No Name"}</h2>
                <p>${response.data.bio || "No Bio Available"}</p>
                <p>Followers: ${response.data.followers} | Following: ${response.data.following}</p>
                <a href="${response.data.html_url}" target="_blank">View GitHub Profile</a>
            </div>
        `;
    } catch (error) {
        console.error("User not found:", error);
        document.getElementById("main").innerHTML = `<p style="color: red;">User not found!</p>`;
    }
}
