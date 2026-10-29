const canvas=document.getElementById("myCanvas");

canvas.width=200;

const ctx = canvas.getContext("2d");
const car = new Car(100,100,30,50);

animate();

function animate(){
    car.updatePosition();
    canvas.height=window.innerHeight;   //resets canvas as well
    car.draw(ctx);
    requestAnimationFrame(animate);     //execute this function when you are ready to display next frame
}