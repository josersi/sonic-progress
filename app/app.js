window.onload = init;

function init() {
    const progress = document.querySelector('#progress');
    const button = document.querySelector("#button");
    const sonic = document.querySelector("#sonic");
    
    button.addEventListener('click', () => load(progress, sonic));
}

async function load(progress, sonic) {
    sonic.setAttribute('data-running', true);

    for (let i = 0; i <= 100; ++i) {
        progress.value = i;
        sonic.style.left = `calc(${i}% - 15px)`;

        await delay(Math.max(100 -  i * 10, 1));
    }

    sonic.setAttribute('data-running', false);
}

function delay(millis) {
    return new Promise(resolve => {
        window.setTimeout(() => resolve(), millis);
    })
} 
