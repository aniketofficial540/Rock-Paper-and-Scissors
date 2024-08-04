let newHeader = document.querySelector(".body1-header");
let compText = document.querySelector(".comp-text");

let userChoices = document.querySelectorAll(".c");
userChoices.forEach(choice => {
    choice.addEventListener("click", () => {
        let randNum = Math.floor(Math.random() * 3);
        console.log(randNum);

        let arr = ["Stone", "Paper", "Scissors"];
        let computerChoice = arr[randNum];

        console.log(computerChoice);
        console.log(choice.textContent);

        compText.textContent = computerChoice; 
        let comp_img = document.querySelector(".comp-img");
        comp_img.style.backgroundImage = `url("image/${computerChoice}.png")`;

        let userChoice = choice.textContent.trim();

        if (userChoice === computerChoice) {
            console.log("It's a tie!");
            newHeader.textContent = "It's a tie!";
        } else {
            switch (userChoice) {
                case "Stone":
                    newHeader.textContent = (computerChoice === "Scissors") ? "You Win!" : "You Lose!";
                    break;
                case "Paper":
                    newHeader.textContent = (computerChoice === "Stone") ? "You Win!" : "You Lose!";
                    break;
                case "Scissors":
                    newHeader.textContent = (computerChoice === "Paper") ? "You Win!" : "You Lose!";
                    break;
                default:
                    newHeader.textContent = "Invalid choice!";
                    break;
            }
        }
    });
});
