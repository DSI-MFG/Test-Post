const owner = "DSI-MFG";
const repo = "Test-Post";
const folderPath = "docs"; // Adjust accordingly

async function fetchDownloads(owner, repo, folderPath) {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/contents/${folderPath}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    const cpsFiles = data.filter((file) => file.path.endsWith(".cps"));

    cpsFiles.forEach((file) => {
      // Fetch the file content and create a download link
      fetch(file.download_url)
        .then((response) => response.blob())
        .then((blob) => {
          const downloadsDiv = document.querySelector(".downloads");
          const objectURL = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = objectURL;
          link.download = file.name; // Suggests the name for the download
          link.innerText = `Download ${file.name}`;
          link.classList.add("download-link");
          downloadsDiv.appendChild(link);
        });
    });
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

async function fetchReadme(owner, repo, folderPath) {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/contents/${folderPath}/README.md`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    const decodedReadme = atob(data.content);

    const readmeDiv = document.querySelector(".readme-section");
    readmeDiv.innerHTML = `<h2>README</h2><pre>${decodedReadme}</pre>`;
  } catch (error) {
    console.error(
      "There was a problem with the fetch operation:",
      error.message
    );
  }
}
