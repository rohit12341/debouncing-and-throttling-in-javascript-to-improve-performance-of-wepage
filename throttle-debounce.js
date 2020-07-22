var parent = document.getElementById('parent');
var resizer = document.createElement('div');
resizer.className = 'resizer';
parent.appendChild(resizer);

resizer.addEventListener('mousedown', startResize, false);

function startResize(e){
    resizer.addEventListener('mousemove', betterResize, false);
    resizer.addEventListener('mouseup', stopResize, false);
}

const throttle = (func, limit) => {
    let flag = true;
    return function (){
        let context = this;
        let args = arguments;
            func.apply(context, args);
        if(flag){
            func.apply(context, args);
            flag = false;
            setTimeout(() => {
              flag  =true;  
            }, limit);
        }
    }
  }

const betterResize = throttle(Resize, 500);


function Resize(e){
   // console.log('resized');
parent.style.width = (e.clientX - parent.offsetLeft) + 'px';
parent.style.height = (e.clientY - parent.offsetTop) + 'px';
}

function stopResize(e){
    resizer.addEventListener('mousemove', Resize, false);
    resizer.addEventListener('mouseup', stopResize, false);
}



var input = document.getElementById('val').value;

function getResult(){
    console.log('hello');
}

function doBetter(func, delay){
    let timer;
return function (){
    let context = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(context, args);  
    }, delay);
 }
}

const getBetterResult = doBetter(getResult, 500);