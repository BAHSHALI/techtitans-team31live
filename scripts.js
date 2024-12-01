/*
    Code sample for SITE 1101 Principles of Information Systems 
    (c)2024 by Araz Yusubov 
    DISCLAIMER: All code examples we will look at are quick hacks intended to present working prototypes.
    Hence they do not follow best practice of programming or software engineering.    
*/

// Global variables for Artist's position and orientation
var x, y;
var angle;

function radian(degree) {
    return degree * Math.PI / 180;
}

function moveForward(distance, context) {
    let a = radian(angle);
    x = x + distance * Math.cos(a);
    y = y + distance * Math.sin(a);
    context.lineTo(x, y);    
}

function turnRight(degree) {
    angle = angle - degree;
    if (angle < 0) angle = angle + 360;
}

function turnLeft(degree) {
    angle = angle + degree;
    if (angle > 360) angle = angle - 360;
}

function DrawSpiral(context) {
    // Inspired by Express Course (2024) Lesson 29: For Loops with Artist
    // https://studio.code.org/s/express-2024/lessons/29/levels/5

    // The initial position is in the center of the canvas
    x = context.canvas.width / 2;
    y = context.canvas.height / 2;
    // The initial orientation is zero degrees i.e. facing East
    angle = 0.0; 
    context.moveTo(x, y);
    context.beginPath();
    for (let counter = 3; counter < 600; counter += 3) {
        moveForward(counter, context);
        context.stroke();
        turnRight(89);
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const timeElement = document.getElementById('clock');
  
    
    // Time func
    function updateTime() {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit'});
      timeElement.textContent = `The time is ${timeString}!`;
    }
    setInterval(updateTime, 1000);
    updateTime();
  });
const images = ["images/img1.jpg", "images/img2.jpg", "images/img3.jpg", "images/img4.jpg", "images/img5.jpg", "images/img6.jpg", "images/img7.jpg"];
let index = 0;

function changeImage() {
  document.getElementById("carousel").src = images[index];
}
function nextImage() {
  index = (index + 1) % images.length;
  changeImage();
}
function prevImage() {
  index = (index - 1 + images.length) % images.length;
  changeImage();
}
function showGreet() {
  const name = document.getElementById('nameGreet').value;

  const greeting = document.getElementById('greet');
  document.getElementById('customGreet').style.display = 'block';
  document.getElementById('darkBG').style.display = 'block';
  const hours = new Date().getHours();
  if (hours < 12) {
    greeting.textContent = `Good Morning, ${name}!`;
  } else if (hours < 18) {
    greeting.textContent = `Good Afternoon, ${name}!`;
  } else {
    greeting.textContent = `Good Evening, ${name}!`;
  }
 
}

function hideGreet() {
  document.getElementById('customGreet').style.display = 'none';
  document.getElementById('darkBG').style.display = 'none';
}