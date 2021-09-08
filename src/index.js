// new CountdownTimer({
//     selector: '#timer-1',
//     targetDate: new Date('Jul 17, 2019'),
//   });

const htmlDays = document.querySelector('span[data-value = "days"]')
const htmlHours = document.querySelector('span[data-value = "hours"]')
const htmlMins = document.querySelector('span[data-value = "mins"]')
const htmlSecs = document.querySelector('span[data-value = "secs"]')

class CountdownTimer {
    constructor(opts) {
        this.selector = opts.selector;
        this.targetDate = opts.targetDate;
    }
    start () {
        setInterval(() => {
            const currentTime = Date.now();
            const time = this.targetDate - currentTime;
            const { days, hours, mins, secs } = getTimeComps(time);
            console.log(`${days}:${hours}:${mins}:${secs}`);

            htmlDays.textContent = `${days}`;
            htmlHours.textContent = `${hours}`;
            htmlMins.textContent = `${mins}`;
            htmlSecs.textContent = `${secs}`;
        }, 1000)
    }
}

const timer = new CountdownTimer({
        selector: '#timer-1',
        targetDate: new Date('Jul 17, 2022'),
      });

timer.start();

function pad(i) {
    return String(i).padStart(2, '0');
};
function getTimeComps(j) {
    const days = pad(Math.floor(j / (1000 * 60 * 60 * 24)));
    const hours = pad(Math.floor((j % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((j % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((j % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
}
