// const moment = require('moment')

let apiCoindesk = 'http://api.coindesk.com/v1/bpi/historical/close.json';

const startInput = document.getElementById('date-start');
const endInput = document.getElementById('date-end');

// let dateEnd = moment().format('MMMM Do YYYY, h:mm:ss a');
// let dateStart = new Date();
// console.log(dateEnd);

let dateEnd;
let dateStart;



// window.addEventListener('load', () => {
//   startInput.value = dateStart;
//   endInput.value = dateEnd;
//   console.log(dateStart, dateEnd);
// })


// Date input event listeners
startInput.addEventListener('input', event => {
  dateStart = startInput.value;
  // console.log(startInput.value);
  // console.log(endInput.value);
  // apiCoindesk = `http://api.coindesk.com/v1/bpi/historical/close.json?start=${startInput.value}&end=${endInput.value}`;
  // getDataAndDraw(apiCoindesk);
})

endInput.addEventListener('input', event => {
  // console.log(startInput.value);
  // console.log(endInput.value);
  dateEnd = endInput.value;
  apiCoindesk = `http://api.coindesk.com/v1/bpi/historical/close.json?start=${dateStart}&end=${dateEnd}`;
  getDataAndDraw(apiCoindesk);
})


// Draw the diagram w. time range filter values
getDataAndDraw(apiCoindesk);







// FUNCTIONS

// Request the data from the API
function getDataAndDraw(url) {
  axios.get(url)
    .then(data => {
      drawDiagram(data) // diagram is drawn here
    })
    .catch(e => {
      console.log(e)
    })
}

// Diagram
const drawDiagram = function (data) {

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








