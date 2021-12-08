import {
    logicGame
} from "./logic";

import { reset } from "./reset";

export let buttonsLogic = () => {
    const SCISSOR = document.querySelector('.scissor');
    const ROCK = document.querySelector('.rock');
    const PAPER = document.querySelector('.paper');
    const RESET = document.querySelector('.reset');

    let tableCheck = [];
    let userOne = {
        win: 0,
        attempt: 0,
        beat: 0
    };
    let userTwo = {
        win: 0,
        attempt: 1,
        beat: 0
    }


    RESET.addEventListener('click', ()=> {
        
        reset(userOne, userTwo);
        console.log("lla");
        tableCheck = [];
        console.log(userOne);
        console.log(userTwo)
    })

    function checkWinner() {

        if (userOne.beat === 2) {
            let result = document.querySelector('.result');

            result.textContent = "USER ONE WON";
           
            userOne = {win: 0,
                    attempt: 0,
                    beat: 0}

                userTwo = {
                    win: 0,
                    attempt: 1,
                    beat: 0
                }
        } else if (userTwo.beat === 2) {
            let result = document.querySelector('.result');

            result.textContent = "USER TWO WON";

            console.log("USER TWO IS A WINNER")
                userOne = {win: 0,
                    attempt: 0,
                    beat: 0}

                userTwo = {
                    win: 0,
                    attempt: 1,
                    beat: 0
                }
        }
    }



    SCISSOR.addEventListener('click', () => {



        if (userOne.attempt % 2 === 0) {
            tableCheck.push("SCISSORS_1");
            if (!logicGame(tableCheck, userOne, userTwo)) {
                tableCheck = [];
                userOne.attempt = 0;
                userTwo.attempt = 1;

            }

            userOne.attempt += 1;
            console.log(userOne, userTwo)
           

        } else {

            tableCheck.push("SCISSORS_2");
            if (!logicGame(tableCheck, userOne, userTwo)) {
                tableCheck = [];
                userOne.attempt = 0;
                userTwo.attempt = 1;
            }

            console.log(userOne, userTwo)

        }

        checkWinner()

    })


    ROCK.addEventListener('click', () => {
        
        
        if (userOne.attempt % 2 === 0) {
            tableCheck.push("ROCK_1");
            if (!logicGame(tableCheck, userOne, userTwo)) {
                tableCheck = [];
                userOne.attempt = 0;
                userTwo.attempt = 1;

            }

            userOne.attempt += 1;
            console.log(userOne, userTwo)

        } else {

            tableCheck.push("ROCK_2");
            if (!logicGame(tableCheck, userOne, userTwo)) {
                tableCheck = [];
                userOne.attempt = 0;
                userTwo.attempt = 1;
            }

            console.log(userOne, userTwo)

        }

        checkWinner()


    })

    PAPER.addEventListener('click', () => {

        if (userOne.attempt % 2 === 0) {
            tableCheck.push("PAPER_1");
            if (!logicGame(tableCheck, userOne, userTwo)) {
                tableCheck = [];
                userOne.attempt = 0;
                userTwo.attempt = 1;

            }

            userOne.attempt += 1;
            console.log(userOne, userTwo)

        } else {

            tableCheck.push("PAPER_2");
            if (!logicGame(tableCheck, userOne, userTwo)) {
                tableCheck = [];
                userOne.attempt = 0;
                userTwo.attempt = 1;
            }

            console.log(userOne, userTwo)

        }

        checkWinner()

    })


}