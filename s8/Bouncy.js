
var balls = [ ];
setInterval( animate, 33 );

class Ball {
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.color = randColor();
    this.vx = Math.round( Math.random() * 20 - 10);
    this.vy = Math.round( Math.random() * 20 - 10);
    if (this.vx == 0 && this.vy == 0)
      {
        this.vx = 1; this.vy = 1;
      }
    this.size = Math.round( Math.random() * 50 + 10 );
    var canvas = document.getElementById("imgCanvas");
    if (this.x + this.size > canvas.width )
      this.x = this.x - this.size;
    if (this.x - this.size < 0 )
        this.x = this.size + Math.abs(this.vx);
    if (this.y + this.size > canvas.height )
      this.y = this.y - this.size;
      if (this.y - this.size < 0 )
        this.y = this.y + this.size;
  }
  draw(){
    var canvas = document.getElementById("imgCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "Black";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.stroke();
  }
  update(){
    var canvas = document.getElementById("imgCanvas");
    this.x += this.vx;
    this.y += this.vy;
    if ( this.x < 0 + this.size || this.x > canvas.width - this.size )
      this.vx = -this.vx;
    if ( this.y < 0 + this.size || this.y > canvas.height - this.size)
      this.vy = -this.vy;
  }
}

function randColor() {
  var r = Math.round(Math.random() * 240 + 16);
  var g = Math.round(Math.random() * 240 + 16);
  var b = Math.round(Math.random() * 240 + 16);
  var color = "#" + r.toString(16) + g.toString(16) + b.toString(16);
  return color;
}
function draw(e){
  var canvas = document.getElementById("imgCanvas");
  var ctx = canvas.getContext("2d");
  var rect = canvas.getBoundingClientRect();
  var posx = e.clientX - rect.left;
  var posy = e.clientY - rect.top;
  var newBall = new Ball(posx, posy);
  newBall.draw();
  balls.push( newBall );
}
function animate(){
  var canvas = document.getElementById("imgCanvas");
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height );
  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, canvas.width, canvas.height );
  for (var n = 0; n < balls.length ; n++ ){
    balls[ n ].update();
    balls[ n ].draw();

  }
}

function clearScreen(){
  balls = [ ] ;
}
