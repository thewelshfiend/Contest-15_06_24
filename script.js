const contentSection = document.getElementById("content");
const btnContainer = document.getElementById("btn-container");
const tally = document.getElementById("count");

const buttons = btnContainer.getElementsByClassName("inc-dec-btn");
const decrementBtn = buttons[0];
const incrementBtn = buttons[1];
const clearBtn = document.getElementById("clear-btn");

let count = 0;
function loadPage()
{
    tally.innerText = `${count}`;
}
loadPage();
clearBtn.style.display = "none";

const errorDiv = document.createElement("div");
function monitor()
{
    if (count < 0)
    {
        errorDiv.id = "error";
        errorDiv.innerText = `Error : Cannot go below 0`;
        contentSection.append(errorDiv);

        count = 0;
        loadPage();
        clearBtn.style.display = "block";
    }
    else
    {
        errorDiv.remove();
    }
}

decrementBtn.addEventListener("click", () => {
    count--;
    if (count < 0) {
        monitor();
        return;
    }
    else
    {
        loadPage();
        if (count == 0)
        {
            clearBtn.style.display = "none";
        }
    }
});

incrementBtn.addEventListener("click", () => {
    if (count == 0)
    {
        monitor();
    }
    count++;
    if (count > 0)
    {
        clearBtn.style.display = "block";
    }
    loadPage();
});

clearBtn.addEventListener("click", () => {
    count = 0;
    loadPage();
    clearBtn.style.display = "none";
    if (errorDiv)
    {
        errorDiv.remove();
    }
})