document.querySelector(".btn-activate").addEventListener("click", (event) => {
   const buttonId = event.target.id.split("-")[1]
  activateButton(buttonId)
})

activateButton = (id) => {
  document.querySelector("#" + id).classList.replace("disabled", "enabled");
}

document.querySelector("#activate-all").addEventListener("click", (event) => {
   const power = document.querySelectorAll(".power");
   power.forEach(element => {
      activateButton(element.id)
   });
 })

 deactivateButton = (id) => {
   document.querySelector("#" + id).classList.replace("enabled", "disabled")
 }

 document.querySelector("#deactivate-all").addEventListener("click", (event) => {
  const power = document.querySelectorAll(".power");
  power.forEach(element => {
     deactivateButton(element.id)
  });
})


/* document.querySelector("#activate-flight").addEventListener("click", () => {
  flightHandler();
});

flightHandler = () => {
  document.querySelector("#flight").classList.replace("disabled", "enabled");
};
flightHandlerDisable = () => {
  document.querySelector("#flight").classList.replace("enabled", "disabled");
};

document
  .querySelector("#activate-mindreading")
  .addEventListener("click", () => {
    flightMindReading();
  });

flightMindReading = () => {
  document
    .querySelector("#mindreading")
    .classList.replace("disabled", "enabled");
};

flightMindReadingDisable = () => {
  document
    .querySelector("#mindreading")
    .classList.replace("enabled", "disabled");
};
document.querySelector("#activate-xray").addEventListener("click", () => {
  flightxray();
});

flightxray = () => {
  document.querySelector("#xray").classList.replace("disabled", "enabled");
};
flightxrayDisable = () => {
  document.querySelector("#xray").classList.replace("enabled", "disabled");
};

document.querySelector("#activate-all").addEventListener("click", () => {
  activateAll();
});

activateAll = () => {
  flightHandler();
  flightMindReading();
  flightxray();
};

document.querySelector("#deactivate-all").addEventListener("click", () => {
  deactivateAll();
});

deactivateAll = () => {
  flightHandlerDisable();
  flightMindReadingDisable();
  flightxrayDisable();
};
 */