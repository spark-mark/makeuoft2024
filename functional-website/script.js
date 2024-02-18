var ctxAudio = document.getElementById('audioLevelChart').getContext('2d');
var audioLevelChart = new Chart(ctxAudio, {
  type: 'line',
  data: {
    labels: ['12 AM', '2 AM', '4 AM', '6 AM', '8 AM'],
    datasets: [{
      label: 'Audio Levels [dB]',
      data: [20, 25, 30, 35, 40], // Example data points
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