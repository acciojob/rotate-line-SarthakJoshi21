//your JS code here. If required.
 const line = document.getElementById("line");
      let angle = 0;

      function rotateLine() {
        angle = (angle + 2) % 360; // Increment the angle by 2 degrees and wrap around at 360
        line.style.transform = `rotate(${angle}deg)`;
      }

      setInterval(rotateLine, 20); // Rotate every 20 milliseconds