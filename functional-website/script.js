var ctxAudio = document.getElementById('audioLevelChart').getContext('2d');
var audioLevelChart = new Chart(ctxAudio, {
  type: 'line',
  data: {
    labels: ['12 AM', '1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM', '8 AM'],
    datasets: [{
      label: 'Audio Levels [dB]',
      data: [20, 18, 17, 35, 22, 19, 16, 21, 27], // Example data points
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 2,
      fill: false // for a line chart, it's common to set fill to false
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
var ctxSleepPie = document.getElementById('sleepPieChart').getContext('2d');
var sleepPieChart = new Chart(ctxSleepPie, {
  type: 'pie', // or 'doughnut' if you prefer a donut style chart
  data: {
    labels: ['Time Asleep', 'Time Awake in Bed'],
    datasets: [{
      label: 'Sleep Analysis',
      data: [7 * 60 + 34, 23], // Assuming time is in minutes: [total sleep time, awake time]
      backgroundColor: [
        'rgba(54, 162, 235, 0.6)', // Blue color for sleep
        'rgba(255, 99, 132, 0.6)' // Red color for awake
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)',
        'rgba(255,99,132,1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      position: 'bottom' // Position of the legend, can be 'top', 'left', 'bottom', 'right'
    }
  }
});
function createRaindrop() {
    // Create a div element for the raindrop
    var raindrop = document.createElement('div');
    raindrop.classList.add('raindrop');
  
    // Set a random horizontal position
    raindrop.style.left = Math.random() * 100 + 'vw';
    
    // Randomize the animation duration to create a more natural effect
    raindrop.style.animationDuration = (Math.random() * 1 + 0.5) + 's';
  
    // Append the raindrop to the body
    document.body.appendChild(raindrop);
  
    // Remove raindrop after it falls out of view to prevent a memory leak
    setTimeout(function() {
      raindrop.remove();
    }, 2000);
  }
  
  // Create a new raindrop every 100 milliseconds
  setInterval(createRaindrop, 100);

  document.querySelectorAll('.data-point').forEach(item => {
    item.addEventListener('click', function() {
      // Placeholder for an action, like fetching new data
      alert('You clicked on ' + this.querySelector('span').textContent);
    });
  });
  $(document).ready(function () {
    setInterval(function() {
        $.ajax({ 
            type: 'GET', 
            url: 'http://172.20.10.2/', 
            data: { get_param: 'value' }, 
            success: function (data) { 
                console.log("Received data:", data); // Log the received data

                // Correctly access and update data points
                $("#Temperature").text(data.temperature + "°C");
                $("#Humidity").text(data.humidity);
                $("#Sound").text(data.sound + "dB"); // Assuming this is for "Max Volume"
                $("#Light").text(data.lightVal + "%");
                $("#NoisesDetected").text(data.noisesDetected); // Update this ID according to your HTML
            },
            error: function(xhr, status, error) {
                console.log("Error fetching data:", xhr.status, xhr.statusText);
            }
        });
    }, 500); // time in milliseconds (0.5 seconds)
});
