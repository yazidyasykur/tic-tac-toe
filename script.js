const initial = [false, false, false, false, false, false, false, false, false]

var winner = null;

const goals = [
    [true, true, true, false, false, false, false, false, false],
    [false, false, false, true, true, true, false, false, false],
    [false, false, false, false, false, false, true, true, true],
    [true, false, false, true, false, false, true, false, false],
    [false, true, false, false, true, false, false, true, false],
    [false, false, true, false, false, true, false, false, true],
    [true, false, false, false, true, false, false, false, true],
    [false, false, true, false, true, false, true, false, false]
]

let Xvalue = [false, false, false, false, false, false, false, false, false]

let Ovalue = [false, false, false, false, false, false, false, false, false]

let turns = false;

function clickHandler(event) {
    const childNum = event.target.attributes.name.value
    const parent = document.getElementsByClassName("box-container")[0]

    if (parent.children[childNum].textContent == "" && winner == null) {
        document.getElementById("turn").innerHTML = (turns ? "1P" : "2P")

        if (turns) {
            parent.children[childNum].innerHTML = "X"
            Xvalue[childNum] = true
            turns = false
        } else {
            parent.children[childNum].innerHTML = "O"
            Ovalue[childNum] = true
            turns = true
        }
    }

    checkWinning();
}

function checkWinning() {
    let counterX = 0;
    let counterO = 0;

    for (let i = 0; i < goals.length; i++) {
        for (let j = 0; j < goals[i].length; j++) {
            if (goals[i][j] && Xvalue[j]) {
                counterX++;
            }

            if (goals[i][j] && Ovalue[j]) {
                counterO++;
            }
        }

        if (counterX == 3) {
            winner = "2P "
            document.getElementById("winner").innerHTML = winner + "is the Winner"
        }

        if (counterO == 3) {
            winner = "1P "
            document.getElementById("winner").innerHTML = winner + "is the Winner"
        }
        counterX = 0;
        counterO = 0;
    }
}

function restart() {
    location.reload();
}


