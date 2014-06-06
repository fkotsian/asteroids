(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});

  Function.prototype.inherits = function(superClass) {
    function Surrogate() {};
    Surrogate.prototype = superClass.prototype;
    this.prototype = new Surrogate();
  }

  var Asteroid = Asteroids.Asteroid = function (pos, vel) {
    var radius = this.randRadius();
    Asteroids.MovingObject.call(this, pos, vel, radius, Asteroid.COLOR);
    this.img = this.asteroidImage();
    this.img.style.width = radius * 2;
    this.img.style.height = radius * 2;
  };

  Asteroid.inherits(Asteroids.MovingObject);

  Asteroid.COLOR = 'red';
  Asteroid.RADIUS = 15;

  Asteroid.prototype.draw = function(ctx) {
    ctx.drawImage(this.img, this.pos[0], this.pos[1], this.radius * 2, this.radius * 2);
  }
  
  Asteroid.prototype.asteroidImage = function() {
    var img = new Image();
    var choice = Math.floor(Math.random() * 3);
    switch (choice) {
    case 0:
      img.src = 'asteroid1.png';
      break;
    case 1:
      img.src = 'asteroid2.png';
      break;
    case 2:
      img.src = 'asteroid3.png';
      break;
    default: 
      img.src = 'asteroid1.png';
    }
    return img;
  }

  Asteroid.prototype.randRadius = function() {
    return Asteroid.RADIUS + Math.random() * 40;
  }

  Asteroid.randomAsteroid = function(dimX, dimY) {
    var randX = Math.random() * dimX;
    var randY = Math.random() * dimY;
    if (randX > randY) {
      var pos = [ randX, 0 ];
    } else {
      var pos = [ 0, randY ];
    }
    var vel = [ randomVec(), randomVec() ];

    function randomVec() {
      return Math.random(0, 20);
    }

    return new Asteroid(pos, vel);
  }

})(this);