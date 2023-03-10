const btnEl = document.getElementById("btn")
const riddleEl = document.getElementById("riddle");

const apiKey = "LQpinqe5Vtv+xh0x7XO0vA==zl6LAaoTH15KJB9c";

const options = {
    method: "GET",
    headers: { 
        "X-Api-Key": apiKey,
    
    }
};

const apiURL = "https://api.api-ninjas.com/v1/riddles";


async function getRiddle() {
    const response = await fetch(apiURL, options)
    const data = await response.json();

    riddleEl.innerText = data[0].question;
}

btnEl.addEventListener("click", getRiddle)

