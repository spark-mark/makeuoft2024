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
