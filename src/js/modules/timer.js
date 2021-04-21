const timer = (id, deadline) => {

    const calcTimer = () => {
        const t = Date.parse(deadline) - Date.now(),
              seconds = Math.floor(t / 1000 % 60),
              minutes = Math.floor(t / 1000 / 60 % 60),
              hours = Math.floor(t / 1000 / 60 / 60 % 60),
              days = Math.floor(t / 1000 / 60 / 60 / 24);

        return {
            t,
            seconds,
            minutes,
            hours,
            days
        }
    };
    
    const addZero = (num) => {
        if (num < 10 && num !== '00') {
            return `0${num}`;
        } else return num;
          };


    const setTimer = (id, endtime) => {

        const t = document.querySelector(id),
              days = t.querySelector('#days'),
              hours = t.querySelector('#hours'),
              minutes = t.querySelector('#minutes'),
              seconds = t.querySelector('#seconds'),
              interval = setInterval(() => {
                updateTimer();
            }, 1000);

        updateTimer();

        function updateTimer() {
            const t = calcTimer(endtime);

            if (t.t < 1000) {
                for (let key in t) {
                    t[key] = '00';
                }
    
                clearInterval(interval);
            }

            days.textContent = addZero(t.days);
            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            
        }

        
    }

    setTimer(id, deadline);   

}



export default timer;

