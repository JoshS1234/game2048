import "../SCSS/style-instructions.scss";

const instructionTiles = document.querySelectorAll(
  ".instructions__instruction-card"
);
const prevInstructionButton = document.querySelector(
  ".instructions__scroll-button--previous"
);
const nextInstructionButton = document.querySelector(
  ".instructions__scroll-button--next"
);

if (!instructionTiles) {
  throw new Error("instruction tiles not imported");
} else if (!prevInstructionButton) {
  throw new Error("prev button not imported");
} else if (!nextInstructionButton) {
  throw new Error("next button not imported");
}

let activeTile = 0;

const handleGoBack = () => {
  if (activeTile % 6 != 0) {
    activeTile--;

    instructionTiles[(activeTile % 6) + 1].classList.add(
      "instructions__instruction-card--inactive"
    );
    instructionTiles[(activeTile % 6) + 1].classList.remove(
      "instructions__instruction-card--active"
    );

    instructionTiles[activeTile % 6].classList.add(
      "instructions__instruction-card--active"
    );
    instructionTiles[activeTile % 6].classList.remove(
      "instructions__instruction-card--inactive"
    );
  }
};
const handleGoForward = () => {
  activeTile++;

  instructionTiles[(activeTile - 1) % 6].classList.add(
    "instructions__instruction-card--inactive"
  );
  instructionTiles[(activeTile - 1) % 6].classList.remove(
    "instructions__instruction-card--active"
  );

  instructionTiles[activeTile % 6].classList.add(
    "instructions__instruction-card--active"
  );
  instructionTiles[activeTile % 6].classList.remove(
    "instructions__instruction-card--inactive"
  );
};

prevInstructionButton?.addEventListener("click", handleGoBack);
nextInstructionButton?.addEventListener("click", handleGoForward);
