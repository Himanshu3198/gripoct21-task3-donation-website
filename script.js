// *********counter up Animation**************



function countup(el, target) {
    let data = { count: 0 };
    anime({
      targets: data,
      count: [0, target],
      duration:50000,
      round: 1,
      delay: 100,
      easing: 'easeOutCubic',
      update() {
        el.innerText = data.count.toLocaleString();
      }
    });
  }
  
  function makeCountup(el) {
    const text = el.textContent;
    const target = parseInt(text, 10);
  
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          countup(el, target);
          io.unobserve(entry.target);
        }
      });
    });
  
    io.observe(el);
  }
  
  const els = document.querySelectorAll('[data-countup]');
  
  els.forEach(makeCountup);

// **********auto text Animation*********************

const text=document.getElementById("text");
const intro="Donate for lives";
let index=1;
setInterval(writeText,100);
function writeText(){

         text.innerHTML=intro.slice(0,index);
        index++;
        if(index>intro.length){
            index=1;
        }
   

}

// *****************light box gallery*********************
baguetteBox.run('.tz-gallery');
