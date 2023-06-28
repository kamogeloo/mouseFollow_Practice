const balls = document.getElementsByClassName("ball");

let globalIndex = 0;

const activate = (balls, x, y)=>{
  
    balls.style.left = `${x}px`;
    balls.style.top = `${y}px`;

    balls.dataset.status = "active";
}



window.onmousemove = e =>{

  
    const lead = balls[globalIndex % balls.length];

    activate(lead, e.clientX, e.clientY);
    

    globalIndex++;



  
}