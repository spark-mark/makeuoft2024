document.addEventListener('DOMContentLoaded', function() {
    var ctxPosition = document.getElementById('sleepPositionChart').getContext('2d');
    var sleepPositionChart = new Chart(ctxPosition, {
      type: 'bar',
      data: {
        labels: ['Left', 'Middle', 'Right'],
        datasets: [{
          label: 'Position',
          data: [12, 15, 73],
          backgroundColor: ['rgba(155, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
          borderColor: ['rgba(155, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
          borderWidth: 1
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
  
    var ctxAudio = document.getElementById('audioLevelChart').getContext('2d');
    var audioLevelChart = new Chart(ctxAudio, {
      type: 'line',
      data: {
        labels: ['12 AM', '2 AM', '4 AM', '6 AM', '8 AM'],
        datasets