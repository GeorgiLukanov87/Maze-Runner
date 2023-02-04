const box = document.getElementById("box");
const maze1 = document.getElementById("maze1");
const maze2 = document.getElementById("maze2");
const maze3 = document.getElementById("maze3");
const maze4 = document.getElementById("maze4");
const maze5 = document.getElementById("maze5");
const maze6 = document.getElementById("maze6");
const maze7 = document.getElementById("maze7");
const maze8 = document.getElementById("maze8");
const maze9 = document.getElementById("maze9");
const maze10 = document.getElementById("maze10");
const maze11 = document.getElementById("maze11");
const maze12 = document.getElementById("maze12");
const maze13 = document.getElementById("maze13");
const maze14 = document.getElementById("maze14");
const gameOver = document.getElementById("gameOver");
const gameWin = document.getElementById("win");
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
const exitBtn = document.getElementById("exitBtn");
let x = 0;
let y = 0;
let gameOverFlag = false;
let gameWinFlag = false;

document.addEventListener("keydown", (event) => {
    if (gameOverFlag) return;

    switch (event.code) {
        case "ArrowUp":
            if (y > 0) y -= 15;
            break;
        case "ArrowDown":
            if (y + 50 < screenHeight) y += 15;
            break;
        case "ArrowLeft":
            if (x > 0) x -= 15;
            break;
        case "ArrowRight":
            if (x + 50 < screenWidth) x += 15;
            break;
    }

    if (
        (x + 50 > maze1.offsetLeft &&
            x < maze1.offsetLeft + maze1.offsetWidth &&
            y + 50 > maze1.offsetTop &&
            y < maze1.offsetTop + maze1.offsetHeight) ||
        (x + 50 > maze2.offsetLeft &&
            x < maze2.offsetLeft + maze2.offsetWidth &&
            y + 50 > maze2.offsetTop &&
            y < maze2.offsetTop + maze2.offsetHeight) ||
        (x + 50 > maze3.offsetLeft &&
            x < maze3.offsetLeft + maze3.offsetWidth &&
            y + 50 > maze3.offsetTop &&
            y < maze3.offsetTop + maze3.offsetHeight) ||
        (x + 50 > maze4.offsetLeft &&
            x < maze4.offsetLeft + maze4.offsetWidth &&
            y + 50 > maze4.offsetTop &&
            y < maze4.offsetTop + maze4.offsetHeight) ||
        (x + 50 > maze5.offsetLeft &&
            x < maze5.offsetLeft + maze5.offsetWidth &&
            y + 50 > maze5.offsetTop &&
            y < maze5.offsetTop + maze5.offsetHeight) ||
        (x + 50 > maze6.offsetLeft &&
            x < maze6.offsetLeft + maze6.offsetWidth &&
            y + 50 > maze6.offsetTop &&
            y < maze6.offsetTop + maze6.offsetHeight) ||
        (x + 50 > maze7.offsetLeft &&
            x < maze7.offsetLeft + maze7.offsetWidth &&
            y + 50 > maze7.offsetTop &&
            y < maze7.offsetTop + maze7.offsetHeight) ||
        (x + 50 > maze8.offsetLeft &&
            x < maze8.offsetLeft + maze8.offsetWidth &&
            y + 50 > maze8.offsetTop &&
            y < maze8.offsetTop + maze8.offsetHeight) ||
        (x + 50 > maze9.offsetLeft &&
            x < maze9.offsetLeft + maze9.offsetWidth &&
            y + 50 > maze9.offsetTop &&
            y < maze9.offsetTop + maze9.offsetHeight) ||
        (x + 50 > maze10.offsetLeft &&
            x < maze10.offsetLeft + maze10.offsetWidth &&
            y + 50 > maze10.offsetTop &&
            y < maze10.offsetTop + maze10.offsetHeight) ||
        (x + 50 > maze11.offsetLeft &&
            x < maze11.offsetLeft + maze11.offsetWidth &&
            y + 50 > maze11.offsetTop &&
            y < maze11.offsetTop + maze11.offsetHeight)

    ) {
        gameOverFlag = true;
        gameOver.style.display = "block";
        box.style.display = 'none'
        maze1.style.display = 'none'
        maze2.style.display = 'none'
        maze3.style.display = 'none'
        maze4.style.display = 'none'
        maze5.style.display = 'none'
        maze6.style.display = 'none'
        maze7.style.display = 'none'
        maze8.style.display = 'none'
        maze9.style.display = 'none'
        maze10.style.display = 'none'
        maze11.style.display = 'none'
        maze12.style.display = 'none'
        maze13.style.display = 'none'
        maze14.style.display = 'none'
        gameWin.style.display = 'none'
        setTimeout(() => {
            location.reload();
        }, 2000);
    }
    else if (
        (x + 50 > win.offsetLeft &&
            x < win.offsetLeft + win.offsetWidth &&
            y + 50 > win.offsetTop &&
            y < win.offsetTop + win.offsetHeight)
    ) {
        gameOverFlag = true;
        gameWin.style.display = "block";
        gameWin.textContent = 'Congratulations!'
        gameWin.style.color = 'red'
        gameWin.style.backgroundColor = 'gold'
        gameWin.style.boxShadow = '5px -1px 20px red'
        box.style.display = 'none'
        maze10.style.display = 'none'
        maze11.style.display = 'none'
        setTimeout(() => {
            location.reload();
        }, 3000);

    } else {
        box.style.top = y + "px";
        box.style.left = x + "px";
    }
});
exitBtn.addEventListener("click", () => {
    window.close();
});



