canvas=document.getElementById("mycanvas")
ctx=canvas.getContext("2d")
color="black"
width= 2
var width=screen.width
var new_width= screen.width - 70
var new_length= screen.height - 300;
if (width < 992){
    document.getElementById("mycanvas").width= new_width
    document.getElementById("mycanvas").height= new_length
    document.body.style.overflow= "hidden"
}
canvas.addEventListener("touchstart",my_touchstart)
function my_touchstart (e){
    console.log("my_touchstart")
    color=document.getElementById("Color").value
    width=document.getElementById("Width").value
    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop
}
canvas.addEventListener("touchmove",my_touchmove)
function my_touchmove (e){
    console.log("my_touchmove")
    current_position_of_x = e.touches[0].clientX - canvas.offsetLeft
    current_position_of_y = e.touches[0].clientY - canvas.offsetTop
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width;
    console.log("Last position of x and y coordinates:")
    console.log("x = " + last_position_of_x + "y = " + last_position_of_y)
    ctx.moveTo(last_position_of_x,last_position_of_y)
    console.log("Current position of x and y coordinates")
    console.log("x = " + current_position_of_x + "y = " + current_position_of_y)
    ctx.lineTo(current_position_of_x,current_position_of_y)
    ctx.stroke()
    last_position_of_x = current_position_of_x;
    last_position_of_y = current_position_of_y;
}
function Clear(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}