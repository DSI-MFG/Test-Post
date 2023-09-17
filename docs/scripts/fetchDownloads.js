const owner = "DSI-MFG";
const repo = "Test-Post";
const folderPath = "main/docs"; // Adjust accordingly

console.log("Fetching repository contents...");

fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${folderPath}`)
  .then((response) => {
    if (!response.ok) {
      throw new Error(
        `Error fetching repository contents: ${response.statusText}`
      );
    }
    return response.json();
  })
  .then((data) => {
    if (!Array.isArray(data)) {
      throw new Error("Expected data to be an array of repository contents");
    }
    const cpsFiles = data.filter((file) => file.name.endsWith(".cps"));
    cpsFiles.forEach((file) => {
      console.log(file.name);
    });
  })
  .catch((error) => {
    console.error(
      "There was a problem with the fetch operation:",
      error.message
    );
  });
