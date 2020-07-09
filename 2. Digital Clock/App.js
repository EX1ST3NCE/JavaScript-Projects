const time = document.querySelector('.time');

const clock = () =>{
    const now = new Date();
    const hours = now.getHours();
    const mins = now.getMinutes();
    const secs = now.getSeconds();

    const template = `  <span>${hours}</span> :
                        <span>${mins}</span> :
                        <span>${secs}</span> 
                    `;

time.innerHTML = template;
}

setInterval(clock, 1000);               // 1000ms = 1s

