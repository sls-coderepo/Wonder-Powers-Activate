document.querySelector("#activate-flight").addEventListener("click", () => {
  flightHandler();
});

flightHandler = () => {
  document.querySelector("#flight").classList.replace("disabled", "enabled");
};

document.querySelector("#activate-mindreading").addEventListener("click", () => {
    flightMindReading();

})

flightMindReading = () => {
    document.querySelector("#mindreading").classList.replace("disabled", "enabled");
}

document.querySelector("#activate-xray").addEventListener("click", () => {
    flightxray();
})

flightxray = () => {
    document.querySelector("#xray").classList.replace("disabled", "enabled");
}