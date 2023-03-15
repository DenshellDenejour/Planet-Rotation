<!DOCTYPE html>
<html>
<head>
	<title>Planet Rotation</title>
	<style>
		canvas {
			border: 5px solid black;
		}
	</style>
</head>
<body>
	<canvas id="canvas" width="500" height="500"></canvas>

	<script>
		
		var planet = {
			x: 250, 
			y: 150, 
			radius: 50, 
			angle: 0, 
			speed: 0.02 
		};

	
		var canvas = document.getElementById('canvas');
		var ctx = canvas.getContext('2d');

		
		function animate() {
			
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			
			ctx.beginPath();
			ctx.arc(planet.x, planet.y, planet.radius, 0, Math.PI * 2);
			ctx.fillStyle = 'blue';
			ctx.fill();

			
			planet.angle += planet.speed;

			
			planet.x = 250 + 150 * Math.cos(planet.angle);
			planet.y = 250 + 150 * Math.sin(planet.angle);

			
			requestAnimationFrame(animate);
		}

		
		animate();
	</script>
</body>
</html>
