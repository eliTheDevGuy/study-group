const tfButtons = document.querySelectorAll('.correct, .false');
const clearAllTF = document.querySelector('.clear-tfq');
const hws = document.querySelectorAll('.hw');
const revealButtons = document.querySelectorAll('.reveal-button');
const hideAllButton = document.querySelector('.hide-all-button');
const revealAllButton = document.querySelector('.reveal-all-button');

for (let i= 0; i < tfButtons.length; i++) {
    tfButtons[i].addEventListener('click', function () {
        console.log(tfButtons[i].className);
        if (tfButtons[i].className === 'correct') {
            tfButtons[i].style.backgroundColor = 'green';
        } else if (tfButtons[i].className === 'false') {
            tfButtons[i].style.backgroundColor = 'red';
        }
    });
}

clearAllTF.addEventListener('click', function () {
tfButtons.forEach((button) => {
    button.style.backgroundColor = '#161718';
})
});

for (let i = 0; i < revealButtons.length; i++) {
    revealButtons[i].addEventListener('click', function () {
        hws[i].style.backgroundColor = '#202124';
    });
}

hideAllButton.addEventListener('click', function () {
    hws.forEach((hw) => {
        hw.style.backgroundColor = '#9aa0a6';
    })
});

revealAllButton.addEventListener('click', function () {
    hws.forEach((hw) => {
        hw.style.backgroundColor = '#202124';
    })
});
