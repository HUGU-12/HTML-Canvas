const canvas = document.querySelector('.draw');
const context = canvas.getContext('2d');
//the canvas size is matched to the window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//initial settings for the canvas

context.strokeStyle = 'black';//sets initial stroke color to black
context.lineJoin = 'round'//shape used to join two lines 
context.lineCap = 'round';//shape to end of the lines drawn;
context.lineWidth = 3; // sets initial width of the lines to 30 pixels

//variables for drawing
let isDrawing = false;//check if the user is currently drawing
//store the last position of the mouse
let lastX = 0;
let lastY = 0;
// let hue = 0;//change the the color for stroke dynamically-(zero is red )
let direction = true;//used to change the directioin of line width change

function draw(event){
  if(!isDrawing) return;//stops if mouse is not down or not drawing
  // context.strokeStyle = `hsl(${hue},100%,50%)`;
  context.beginPath();//begins a new path
  context.moveTo(lastX,lastY);//start from
  context.lineTo(event.offsetX,event.offsetY);//go to
  context.stroke();//strokes the path
  [lastX, lastY] = [event.offsetX,event.offsetY];//updates the last position to the current position

  // hue++;//increases the hue value to change the color
  // if(hue >= 360){
  //   hue = 0;// resets the hue if it goes beyong 360
  // }
  // if(context.lineWidth >= 100 || context.lineWidth <= 1){
  //   direction = !direction;//reverses the direction of the width change if it reaches the limits
  // }
  // if(direction){
  //   context.lineWidth++; //increases width based on direction
  // }else{
  //   context.lineWidth--;//decreases width based on direction
  // }
}

//Event listeners
canvas.addEventListener('mousedown',(e)=>{
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove',draw);
canvas.addEventListener('mouseup',()=> isDrawing = false);
canvas.addEventListener('mouseout',()=> isDrawing = false);