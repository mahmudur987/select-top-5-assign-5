
function getelementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValu = element.innerText;
    return elementValu;

}


function updateSelectedPlayers(player) {

    const palyerList = document.getElementById('player-list');
    if (palyerList.childElementCount > 4) {
        alert('max-5');
        return;
    }
    const li = document.createElement('li');
    li.innerText = player;
    palyerList.appendChild(li);
    return palyerList;

}


document.getElementById('btn-player-1').addEventListener('click', function () {

    const player = getelementValueById('player-1');
    const updateList = updateSelectedPlayers(player);
    const buttonDiesable = document.getElementById('btn-player-1')
    buttonDiesable.disabled = true;


})

document.getElementById('btn-player-2').addEventListener('click', function () {

    const player = getelementValueById('player-2');
    const updateList = updateSelectedPlayers(player);
    const buttonDiesable = document.getElementById('btn-player-2')
    buttonDiesable.disabled = true;

})

document.getElementById('btn-player-3').addEventListener('click', function () {

    const player = getelementValueById('player-3');
    const updateList = updateSelectedPlayers(player);
    const buttonDiesable = document.getElementById('btn-player-3')
    buttonDiesable.disabled = true;

})

document.getElementById('btn-player-4').addEventListener('click', function () {

    const player = getelementValueById('player-4');
    const updateList = updateSelectedPlayers(player);
    const buttonDiesable = document.getElementById('btn-player-4')
    buttonDiesable.disabled = true;

})

document.getElementById('btn-player-5').addEventListener('click', function () {

    const player = getelementValueById('player-5');
    const updateList = updateSelectedPlayers(player);
    const buttonDiesable = document.getElementById('btn-player-5')
    buttonDiesable.disabled = true;

})

document.getElementById('btn-player-6').addEventListener('click', function () {

    const player = getelementValueById('player-6');
    const updateList = updateSelectedPlayers(player);
    const buttonDiesable = document.getElementById('btn-player-6')
    buttonDiesable.disabled = true;

})

document.getElementById('btn-player-7').addEventListener('click', function () {

    const player = getelementValueById('player-7');
    const updateList = updateSelectedPlayers(player);
    const buttonDiesable = document.getElementById('btn-player-7')
    buttonDiesable.disabled = true;

})

document.getElementById('btn-player-8').addEventListener('click', function () {

    const player = getelementValueById('player-8');
    const updateList = updateSelectedPlayers(player);
    const buttonDiesable = document.getElementById('btn-player-8')
    buttonDiesable.disabled = true;

})

document.getElementById('btn-player-9').addEventListener('click', function () {

    const player = getelementValueById('player-9');
    const updateList = updateSelectedPlayers(player);
    const buttonDiesable = document.getElementById('btn-player-9')
    buttonDiesable.disabled = true;

})