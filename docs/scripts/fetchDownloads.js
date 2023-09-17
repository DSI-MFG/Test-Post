const owner = "DSI-MFG";
const repo = "Test-Post";
const folderPath = "main/docs"; // Adjust accordingly

fetch(`https://api.github.com/repos/${owner}/${repo}/tree/${folderPath}`)
  .then((response) => response.json())
  .then((data) => {
    const cpsFiles = data.filter((file) => file.name.endsWith(".cps"));

    const downloadsDiv = document.querySelector(".downloads");
    cpsFiles.forEach((file) => {
      const anchor = document.createElement("a");
      anchor.href = file.download_url;
      anchor.innerText = `Download ${file.name}`;
      downloadsDiv.appendChild(anchor);

      // Add a line break for clarity
      downloadsDiv.appendChild(document.createElement("br"));
    });
  })
  .catch((error) => {
    console.error("Error fetching repository contents:", error);
  });
