const hourHand = document.querySelector('.hand.hour');
const minuteHand = document.querySelector('.hand.minute');
const secondHand = document.querySelector('.hand.second');

const setRotation = (element, rotationPercentage) => {
    element.style.setProperty('--rotation', rotationPercentage * 360);
}
const setClock = () => {
    const currentDate = new Date();

    const secondPercentage = currentDate.getSeconds() / 60;
    const minutePercentage = currentDate.getMinutes() / 60;
    const hourPercentage = currentDate.getHours() / 12;

    setRotation(secondHand, secondPercentage)
    setRotation(minuteHand, minutePercentage)
    setRotation(hourHand, hourPercentage)
};

setClock();

setInterval(setClock, 1000);
