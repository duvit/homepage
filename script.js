function setupPopUpDelegation(container) {
  container.addEventListener("mouseover", handleMouseEvent);
  container.addEventListener("mouseout", handleMouseEvent);

  function handleMouseEvent(event) {
    const target = event.target.closest(".qr-icon-wrapper");
    if (target) {
      const popUpId = target.id.replace("Target", "Code");
      const popUpBlock = document.getElementById(popUpId);
      if (popUpBlock) {
        if (event.type === "mouseover") {
          showPopUp(target, popUpBlock);
        } else {
          hidePopUp(popUpBlock);
        }
      }
    }
  }

  function showPopUp(target, popUpBlock) {
    popUpBlock.style.display = "block";
    popUpBlock.style.top = target.offsetTop + target.offsetHeight / 1.2 + "px";
    popUpBlock.style.left = target.offsetLeft + target.offsetWidth / 1.2 + "px";
  }

  function hidePopUp(popUpBlock) {
    popUpBlock.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".contact-info__block");
  setupPopUpDelegation(container);
});
