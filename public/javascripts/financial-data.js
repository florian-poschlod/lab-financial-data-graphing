const apiCoindesk = 'http://api.coindesk.com/v1/bpi/historical/close.json';


axios.get(apiCoindesk)
  .then(bitcoin => {
    drawDiagram(bitcoin) // diagram is drawn here
  })
  .catch(e => {
    console.log(e)
  })

const drawDiagram = function(data) {

  const date = Object.keys(data.data.bpi);
  const price = Object.values(data.data.bpi);

  let ctx = document.getElementById('myChart').getContext('2d');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: date,
      datasets: [
        {
          label: 'Bitcoin Chart',
          backgroundColor: 'rgb(150, 150, 255)',
          borderColor: 'rgb(0, 0, 255)',
          data: price
        }
      ]
    }
  })
}








