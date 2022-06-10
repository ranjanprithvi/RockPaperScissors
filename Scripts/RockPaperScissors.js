let choices = ["rock", "paper", "scissors"];
const computerImage = document.getElementById("computerImage");
const resultBox = document.getElementById("result");

let elements = document.getElementsByClassName("playerSelection");

Array.from(elements).forEach((e) =>
  e.addEventListener("click", () => select.call(e))
);

document.getElementById("reset").addEventListener("click", () => reset());

function select() {
  const randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 1:
      computerImage.src = "images/paper.jpg";
      break;
    case 2:
      computerImage.src = "images/scissors.jpg";
      break;
    default:
      computerImage.src = "images/rock.jpg";
  }

  if (choices[randomNumber] == this.id) resultBox.innerText = "Its a draw";
  else if (choices[(randomNumber + 1) % 3] == this.id)
    resultBox.innerText = "You win";
  else resultBox.innerText = "You lose";

  computerImage.style.display = "block";
}

function reset() {
  document.getElementById("computerImage").style.display = "none";
  resultBox.innerText = null;
}
