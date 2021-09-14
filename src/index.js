class CountdownTimer {
    constructor(opts) {
        this.selector = opts.selector;
        this.targetDate = opts.targetDate;
    }
    pad(i) {
        return String(i).padStart(2, '0');
    };
    getTimeComps(j) {
        const days = this.pad(Math.floor(j / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((j % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((j % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((j % (1000 * 60)) / 1000));
    
        return { days, hours, mins, secs };
    }
    start () {
        setInterval(() => {
            const idOfTimer = document.querySelector(this.selector);
            const htmlDays = idOfTimer.querySelector('span[data-value = "days"]')
            const htmlHours = idOfTimer.querySelector('span[data-value = "hours"]')
            const htmlMins = idOfTimer.querySelector('span[data-value = "mins"]')
            const htmlSecs = idOfTimer.querySelector('span[data-value = "secs"]')
        
            const currentTime = Date.now();
            const time = this.targetDate - currentTime;
            const { days, hours, mins, secs } = this.getTimeComps(time);
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