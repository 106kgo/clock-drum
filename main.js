
/////////////START OF CLOCK STUFF////////////////
const secondHand = document.querySelector('.second-hand');
        const minHand = document.querySelector('.min-hand');
        const hourHand = document.querySelector('.hour-hand');

        function setDate(){
            const now = new Date();
            const seconds = now.getSeconds();
            const secondsDegrees = ((seconds / 60) * 360) + 90;
            secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

            const minutes = now.getMinutes();
            const minutesDegrees = ((minutes / 60) * 360) + 90;
            minHand.style.transform = `rotate(${minutesDegrees}deg)`;

            const hours = now.getHours();
            const hoursDegrees = ((hours / 60) * 360) + 90;
            hourHand.style.tranform = `rotate(${hoursDegrees}deg)`;
            
        }

        setInterval(setDate, 1000);
//////////////////END OF CLOCK STUFF/////////////

/////////////////START OF DRUMSET////////////////

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing')
}

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
    }

    const keys = Array.from(document.querySelectorAll('.key'));
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
    window.addEventListener('keydown', playSound);
