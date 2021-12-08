

export function logicGame(tableCheck, userOne, userTwo) {
    let result = document.querySelector('.result');

    if (tableCheck.length === 2) {
   

        if (tableCheck.includes("SCISSORS_1") && tableCheck.includes("PAPER_2")) {
            console.log("SCISSORS_1 WON");

            userOne.beat += 1;
            result.textContent = `YOU WON , ROUND ${ userOne.beat + userTwo.beat } PAPER VS SCISSORS`;
        } else if (tableCheck.includes("PAPER_1") && tableCheck.includes("ROCK_2")) {
            userOne.beat += 1;
            console.log("PAPER_1 WON");
            result.textContent = `YOU WON, ROUND ${ userOne.beat + userTwo.beat }PAPER VS ROCK`;

        } else if (tableCheck.includes("ROCK_1") && tableCheck.includes("SCISSORS_2")) {
            userTwo.beat += 1;
            console.log("SCISSORS_2 WON");
            result.textContent = `YOU LOST, ROUND ${ userOne.beat + userTwo.beat } ROCK VS SCISSORS`;

        } else if (tableCheck.includes("SCISSORS_2") && tableCheck.includes("PAPER_1")) {
            userOne.beat += 1;
            console.log("PAPER_1 WON");
            result.textContent = `YOU WON,  ROUND ${ userOne.beat + userTwo.beat } PAPER VS SCISSORS`;

        } else if (tableCheck.includes("PAPER_2") && tableCheck.includes("ROCK_1")) {
            userTwo.beat += 1;
            console.log("PAPER_2 WON");
            result.textContent = ` YOU LOST, ROUND ${ userOne.beat + userTwo.beat } PAPER VS ROCK`;

        } else if (tableCheck.includes("ROCK_2") && tableCheck.includes("SCISSORS_1")) {
            userTwo.beat += 1;
            console.log("ROCK_2 WON");
            result.textContent = `YOU LOST, ROUND ${ userOne.beat + userTwo.beat } ROCK VS SCISSORS`;

        }



        return false;
    }

    return true;
}