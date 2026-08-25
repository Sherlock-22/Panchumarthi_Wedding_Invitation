const scrollHint = document.querySelector('.scroll-hint-cont');

document.body.style.overflowY = 'auto'; 

setTimeout(()=>{
    if(window.scrollY === 0) {
        scrollHint.classList.add("visible");
    };
},5000);

document.body.addEventListener('scroll', () => {
  scrollHint.classList.remove("visible");
});

const weddingDate = dayjs('2026-09-13');

function countdown() {
    const now = dayjs();
    const diff = weddingDate.diff(now);
    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    
    if(diff <= 0) {
        console.log('Wedding day!');
        days = 0;
        hours = 0;
        minutes = 0;
        seconds = 0;
        return;
    }

    {
        days = Math.floor(diff/(1000*60*60*24));
        hours = Math.floor((diff/(1000*60*60))%24);
        minutes = Math.floor((diff/(1000*60))%60);
        seconds = Math.floor((diff/1000)%60);

        document.querySelector('.days').innerHTML = days;
        document.querySelector('.hours').innerHTML = hours;
        document.querySelector('.minutes').innerHTML = minutes;
        document.querySelector('.seconds').innerHTML = seconds;
    }
}

setInterval(countdown,1000);
