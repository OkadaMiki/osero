let SIRO = 1;
let KURO = 2;
let data = [];

function init() {
    let table = document.getElementById("reversi");
    let tbody = document.createElement("tbody");
    for (let a = 0; a < 8; a++) {
        let yokoretu = document.createElement("tr");
        // data[a] = [0, 0, 0, 0, 0, 0, 0, 0];
        for (let b = 0; b < 8; b++) {
            let itimasu = document.createElement("td");
            // itimasu.className = "masu";
            // itimasu.id = "masu" + a + b;
            yokoretu.appendChild(itimasu);

            if (a === 3 && b === 3) {
                itimasu.innerText = "●";
            } else if (a === 3 && b === 4) {
                itimasu.innerText = "○";
            } else if (a === 4 && b === 3) {
                itimasu.innerText = "○";
            } else if (a === 4 && b === 4) {
                itimasu.innerText = "●";
            } else {
                itimasu.innerText = "";
            }
        }
        tbody.appendChild(yokoretu);
    }
    table.appendChild(tbody);
    //初期配置
    // put(3, 3, SIRO);
    // put(4, 4, SIRO);
    // put(3, 4, KURO);
    // put(4, 3, KURO);
    // kousin();
}

// function put(a, b, color) {
//     let masu = document.getElementById("masu" + a + b);
//     masu.textContent = "●";
//     masu.className = "masu " + (color === SIRO ? "white" : "black");
//     data[a][b] = color;
// }

// function kousin() {
//     //白と黒の数を数えて、表示する
//     let countWhite = 0;
//     let countBlack = 0;
//     for (let x = 0; x < 8; x++) {
//         for (let y = 0; y < 8; y++) {
//             if (data[x][y] === SIRO) {
//                 countWhite++;
//             }
//             if (data[x][y] === KURO) {
//                 countBlack++;
//             }
//         }
//     }
//     document.getElementById("countBlack").textContent = countBlack;
//     document.getElementById("countWhite").textContent = countWhite;
// }

window.addEventListener("load", init);
