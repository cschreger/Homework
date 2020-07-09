document.addEventListener("DOMContentLoaded", function(){
    const canvas = document.getElementById('mycanvas');
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'red';
    ctx.fillRect(100,100,100,100);


    ctx.beginPath();
    ctx.arc(300, 200, 60, 0, 2*Math.PI, true);
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = "purple";
    ctx.fill();
});
