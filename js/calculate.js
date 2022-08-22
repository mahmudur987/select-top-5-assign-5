
function getInputValueById(inputId) {
    const inputElement = document.getElementById(inputId);
    const inputValueString = inputElement.value;
    const inputValue = parseFloat(inputValueString);
    return inputValue;

}


function getelementsValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValuString = element.innerText;
    const elementValu = parseFloat(elementValuString);
    return elementValu;

}


function setElementValue(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;

}



document.getElementById('calculate').addEventListener('click', function () {

    const palyerListFieldAmount = document.getElementById('player-list').childElementCount;
    const perPlayerCost = getInputValueById('per-player-cost')
    const playersExpence = palyerListFieldAmount * perPlayerCost;
    const setPlayersExpence = setElementValue('players-expence', playersExpence);
    // console.log(playersExpence);


})

document.getElementById('btn-calculate-total').addEventListener('click', function () {

    const playersExpence = getelementsValueById('players-expence');
    const manegerExpence = getInputValueById('Manegar-cost');
    const coachExpence = getInputValueById('coach-cost');

    const TotalExpence = playersExpence + manegerExpence + coachExpence;

    const setTotalExpence = setElementValue('total-cost', TotalExpence)
    console.log(TotalExpence);


})



