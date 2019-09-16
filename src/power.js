document.querySelector("#activate-flight").addEventListener("click", () => {
  flightHandlerFunction();
});

flightHandlerFunction = () => {
  document.querySelector("#flight").classList.replace("disabled", "enabled");
};

document.querySelector("#activate-mindreading").addEventListener("click", () => {
    flightMindReadingFunction();

})

flightMindReadingFunction = () => {
    document.querySelector("#mindreading").classList.replace("disabled", "enabled");
}
