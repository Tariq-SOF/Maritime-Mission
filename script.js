let move_speed = 3;
let gravity = 0.5;
let Missionbooy = document.querySelector('.Missionbooy');
let img = document.getElementById('Missionbooy-1');

let scorr =0;

let booyinsee = document.querySelector('.booyinsee');
let booyinseeimg = document.getElementById('booyinseeimg');

let see = document.querySelector('.see');
let seeimg = document.getElementById('seeimg');

let backgrond = document.querySelector('.backgrond').getBoundingClientRect();
let score_titel = document.querySelector('.score_titel');
let score_val = document.querySelector('.score_val');
let massage = document.querySelector('.massage');

let game_state = 'Start';
img.style.display = 'none';
booyinseeimg.style.display = 'none';
seeimg.style.display = 'none';
massage.classList.add('massageStyle');

document.addEventListener('keydown', (e) => {
  if (e.key == 'Enter' && game_state != 'play') {
    img.style.display = 'block';
    Missionbooy.style.top = '25vw';

    booyinseeimg.style.display = 'block';
    booyinsee.style.top = '60vh';

    seeimg.style.display = 'block';
    see.style.top = '32vw';

   
    massage.innerHTML = '';

    score_titel.innerHTML = 'Score : ';
    score_val.innerHTML = 0;
    scorr.innerHTML=""
    massage.classList.remove('massageStyle');
  }
});

function moveLeftAndRight() {
    let seee = document.querySelector('.see');
    seee.classList.toggle('move-right'); 
};

setInterval(() => {
    let boxRect = see.getBoundingClientRect();
    let box2Rect = booyinsee.getBoundingClientRect();

    if(boxRect.left < box2Rect.right && boxRect.right > box2Rect.left && boxRect.top < box2Rect.bottom && boxRect.bottom > box2Rect.top) {
        if (!touched) {
            let score = parseInt(score_val.innerHTML);
            score_val.innerHTML = score + 1;
            touched = true;

            if (score + 1 === 3) {

                alert(" مبرووووووك فزت!!    ودنا نخدم بمرحلة ثانية بس عارفين انك بتفوز  -_-"); 
                score_val.innerHTML = 0;   
            }  
        }
    } else {
        touched = false; 
    }
}, 1);


