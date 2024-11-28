document.getElementById("publishBtn").addEventListener("click", createPost);

function createPost() {
  const title = document.getElementById("title").value;
  const body = document.getElementById("post").value;

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: title,
      body: body,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const postsList = document.getElementById("posts-container");
      const postElement = document.createElement("div");
      postElement.innerHTML = `
      <h2>${data.title}</h2>
      <p>${data.body}</p>
    `;
      postsList.appendChild(postElement);
    })
    .catch((error) => console.error("Error:", error));
}
