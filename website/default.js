// Ensure that the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', function () {
    var ctx = document.getElementById('sleepChart').getContext('2d');
    var sleepChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Total Sleep', 'Awake'],
            datasets: [{
                label: 'Sleep Duration',
                data: [454, 23], // Assuming 454 minutes of sleep (7hrs 34m) and 23 minutes awake
                backgroundColor: [
                    'rgba(131, 136, 235, 1)', // Blue shade for sleep
                    'rgba(208, 172, 102, 1)'  // Gold shade for awake
                ],
                borderColor: [
                    'rgba(255, 255, 255, 1)', // White borders
                    'rgba(255, 255, 255, 1)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: false,
            maintainAspectRatio: false,
            circumference: Math.PI, // To make it a semi-circle (180 degrees)
            rotation: -Math.PI, // To start from the top
            cutoutPercentage: 60, // To increase the thickness of the doughnut
            legend: {
                display: false // Assuming we don't want to display the legend
            },
            tooltips: {
                enabled: false // Assuming we don't want tooltips
            }
        }
    });
});
