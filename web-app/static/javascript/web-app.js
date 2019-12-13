 // Drawing on canvas
 // Variables
 var canvas = document.getElementById('myCanvas');
 var ctx = canvas.getContext('2d');

 var painting = document.getElementById('canvasDiv');
 var paint_style = getComputedStyle(painting);
 canvas.width = parseInt(paint_style.getPropertyValue('width'));
 canvas.height = parseInt(paint_style.getPropertyValue('height'));

 // Setting mouse to 0,0
 var mouse = { x: 0, y: 0 };

 // Event listener for mouse
 canvas.addEventListener('mousemove', function (e) {
     // Offset mouse (to make precise)
     mouse.x = e.pageX - this.offsetLeft;
     mouse.y = e.pageY - this.offsetTop;
 }, false);

 // Width of the line
 ctx.lineWidth = 10;

 // Image drawing specification
 ctx.lineJoin = 'round';
 ctx.lineCap = 'round';

 // Color of the line to be drawn (White improves prediction rates)
 ctx.strokeStyle = '#FFFFFF';

 // Event listener when mouse clicked
 canvas.addEventListener('mousedown', function (e) {
     // Begin path
     ctx.beginPath();
     // Follow mouse x and y axis'
     ctx.moveTo(mouse.x, mouse.y);
     canvas.addEventListener('mousemove', onPaint, false);
 }, false);

 // Event listener when mouse is let go
 canvas.addEventListener('mouseup', function () {
     canvas.removeEventListener('mousemove', onPaint, false);
 }, false);

 // Draw line
 var onPaint = function () {
     ctx.lineTo(mouse.x, mouse.y);
     ctx.stroke();
 };

 // Clear canvas/number guess when button is clicked
 function erase() {
     ctx.clearRect(0, 0, canvas.width, canvas.height);
     $('#predictedNumber').text('');
 }

 // Save image from canvas
 function predict() {
     var canvas = document.getElementById("myCanvas");
     var dataURL = canvas.toDataURL();
     console.log(dataURL);
     
     $.ajax({
         type: 'POST',
         url: '/predict',
         data: {
             imgBase64: dataURL
         }
     }).done(function (data) {
         // Log to console
         console.log('SENT');
         console.log(data);
         $("#predictedNumber").empty().append(data);
     });
 };