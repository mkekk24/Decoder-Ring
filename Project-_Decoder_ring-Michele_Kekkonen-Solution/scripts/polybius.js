// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

function polybiusRenderer() {
  const form = document.querySelector("#polybius");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const input = event.target["polybius-input"].value;
    const direction = event.target["polybius-options"].value;
    const result =
      direction === "encode"
        ? polybiusModule.polybius(input)
        : polybiusModule.polybius(input, false);

    const alert = document.querySelector("#polybius-alert");
    if (result) {
      alert.classList.add("d-none");
      const output = document.querySelector("#polybius-output");
      output.innerHTML = result;
    } else {
      alert.classList.remove("d-none");
    }
  });
}

document.addEventListener("DOMContentLoaded", polybiusRenderer);