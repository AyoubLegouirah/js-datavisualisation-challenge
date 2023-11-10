// Tableau 1
let canvas = document.createElement("canvas");

let table = document.getElementById("table1");
table.parentNode.insertBefore(canvas, table);

const cols = [
  'rgba(255, 99, 132 )',  // Belgique
  'rgba(54, 162, 235)',  // Bulgarie
  'rgba(255, 206, 86 )',  // République tchèque
  'rgba(75, 192, 192 )',  // Danemark
  'rgba(153, 102, 255 )',  // Allemagne
  'rgba(255, 159, 64)',  // Estonie
  'rgba(255, 99, 132)',  // Irlande
  'rgba(54, 162, 235)',  // Grèce
  'rgba(255, 206, 86 )',  // Espagne
  'rgba(75, 192, 192 )',  // France
  'rgba(153, 102, 255 )',  // Croatie
  'rgba(255, 159, 64 )',  // Italie
  'rgba(255, 99, 132)',  // Chypre
  'rgba(54, 162, 235)',  // Lettonie
  'rgba(255, 206, 86)',  // Lituanie
  'rgba(75, 192, 192)',  // Luxembourg
  'rgba(153, 102, 255)',  // Hongrie
  'rgba(255, 159, 64)',  // Malte
  'rgba(255, 99, 132)',  // Pays-Bas
  'rgba(54, 162, 235)',  // Autriche
  'rgba(255, 206, 86',  // Pologne
  'rgba(75, 192, 192)',  // Portugal
  'rgba(153, 102, 255)',  // Roumanie
  'rgba(255, 159, 64)',  // Slovénie
  'rgba(255, 99, 132)',  // Slovaquie
  'rgba(54, 162, 235)',  // Finlande
  'rgba(255, 206, 86)',  // Suède
  'rgba(255, 99, 132)',  // Islande
  'rgba(54, 162, 235)',  // Liechtenstein
  'rgba(255, 206, 86)',  // Norvège
  'rgba(75, 192, 192)',  // Suisse
  'rgba(153, 102, 255)',  // Monténégro
  'rgba(255, 159, 64)',  // Macédoine
  'rgba(255, 99, 132)',  // Serbie
  'rgba(54, 162, 235)'   // Turquie
]

const barCanvas = new Chart(canvas, {
  type: "bar",
  data: {

    labels: [
      "Belgium", "Bulgaria", "Czech Republic", "Denmark", "Germany", "Estonia", "Ireland", "Greece", "Spain", "France", "Croatia", "Italy", "Cyprus", "Latvia", "Lithuania", "Luxembourg", "Hungary", "Malta", "The Netherlands", "Austria", "Poland", "Portugal", "Romania", "Slovenia", "Slovakia", "Finland", "Sweden", "Iceland", "Liechtenstein", "Norway", "Switzerland", "Montenegro", "Macedonia", "Serbia", "Turkey"
    ],

    datasets: [
      {
        label: "2002",
        data: [1012.8, 146.9, 372.3, 491.5, 6507.4, 53.3, 106.4, 441.1, 2183.5, 4113.9, 77.9, 2231.6, 4.8, 49.3, 72.6, 26.0, 420.8, 17.0, 1401.9, 591.6, 1404.2, 391.6, 312.2, 77.2, 107.4, 435.0, 1234.8, 19.9, 1.0, 319.5, 356.8, 8.9, 18.3, 95.6, 438.7],
        backgroundColor: cols
      },
      {
        label: "2003",
        data: [1007.8, 143.9, 357.7, 486.2, 6572.1, 53.6, 103.5, 441.8, 2144.2, 3974.7, 80.4, 2456.9, 7.3, 51.8, 79.1, 26.2, 413.3, 17.7, 1369.3, 643.3, 1466.6, 417.4, 276.8, 76.6, 111.9, 443.5, 1255.4, 17.5, 1.1, 303.8, 379.3, 8.6, 22.5, 90.4, 472.2],
        backgroundColor: cols
      },
      {
        label: "2004",
        data: [1013.7, 142.1, 351.6, 474.4, 6633.2, 53.0, 99.2, 405.6, 2141.3, 3825.4, 85.4, 2417.7, 7.6, 62.2, 84.1, 26.9, 418.8, 18.4, 1319.5, 643.6, 1461.2, 416.4, 231.6, 86.6, 131.2, 445.5, 1248.7, 16.6, 1.0, 287.8, 389.4, 8.2, 22.7, 99.9, 507.5],
        backgroundColor: cols
      },
      {
        label: "2005",
        data: [999.4, 137.8, 344.1, 432.7, 6391.7, 52.9, 102.2, 456.0, 2230.9, 3775.8, 79.9, 2579.1, 7.2, 51.4, 82.1, 25.3, 432.7, 18.6, 1348.3, 605.3, 1380.0, 392.7, 208.2, 84.4, 123.6, 432.3, 1241.8, 12.0, 1.1, 275.7, 352.7, 9.6, 22.6, 102.1, 667.8],
        backgroundColor: cols
      },
      {
        label: "2006",
        data: [1022.8, 136.4, 336.4, 425.1, 6304.2, 51.8, 103.2, 463.8, 2267.1, 3725.6, 81.0, 2771.5, 7.9, 62.3, 75.5, 25.9, 425.1, 16.5, 1311.8, 589.5, 1287.9, 399.6, 232.7, 90.4, 115.2, 416.1, 1225.0, 13.5, 1.2, 277.0, 335.2, 9.6, 22.0, 99.2, 975.1],
        backgroundColor: cols
      },
      {
        label: "2007",
        data: [1034.4, 134.7, 357.4, 445.3, 6284.7, 50.4, null, 423.4, 2309.9, 3589.3, 75.9, 2933.1, 7.6, 55.6, 68.0, 28.3, 445.3, 15.0, 1303.8, 594.2, 1153.0, 398.6, 281.5, 88.2, 110.8, 435.8, 1306.3, 13.0, 1.1, 271.7, 326.2, 9.3, 26.2, 104.9, 970.6],
        backgroundColor: cols
      },
      {
        label: "2008",
        data: [1043.6, 126.7, 343.8, 477.0, 6114.1, 51.0, null, 417.4, 2396.9, 3558.3, 74.6, 2709.9, 7.3, 57.5, 72.0, 28.2, 477.0, 13.8, 1277.8, 572.7, 1082.1, 430.5, 289.3, 81.9, 104.8, 440.7, 1377.9, 14.6, 1.1, 264.2, 323.2, 8.3, 28.3, 106.0, 1012.3],
        backgroundColor: cols
      },
      {
        label: "2009",
        data: [1067.3, 138.1, 332.8, 491.8, 6054.3, 48.4, 386.9, 2339.2, 3521.3, null, 74.6, 2709.9, 7.3, 57.5, 76.3, 32.4, 591.6, 12.0, 1254.5, 591.6, 1129.6, 426.0, 299.9, 292.7, 88.7, 101.1, 95.3, 431.6, 1370.4, 14.9, 1.0, 270.7, 656.9, 7.0, 28.5, 101.1, 1521.7],
        backgroundColor: cols
      },
      {
        label: "2010",
        data: [1111.0, 128.6, 317.2, 466.8, 5990.7, 42.6, 194.0, 2285.5, null, 75.6, 2763.0, 8.4, 51.6, 72.1, 35.7, 451.4, 14.2, 1194.1, 540.0, 1159.6, 413.7, 258.9, 29.5, 99.5, 458.3, 1416.3, 12.6, 1.1, 264.2, 693.0, 6.1, 29.9, 96.1, 1652.8],
        backgroundColor: cols
      },
      {
        label: "2011",
        data: [1073.8, 120.6, 304.5, 440.8, 5997.0, 40.8, 194.1, 2268.9, null, 72.2, 2818.8, 8.5, 49.9, 75.3, 37.6, 472.2, 15.6, 1139.7, 548.0, 1119.8, 403.2, 308.5, 29.9, 95.6, 425.4, 1402.6, 11.7, 1.1, 273.5, 750.4, 5.8, 29.9, 96.1, 1904.5],
        backgroundColor: cols
      },
      {
        label: "2012",
        data: [1073.8, 120.6, 304.5, 440.8, 5997.0, 40.8, 194.1, 2268.9, null, 72.2, 2818.8, 8.5, 49.9, 75.3, 37.6, 472.2, 15.6, null, 540.0, null, 403.2, 308.5, 29.9, 95.6, 425.4, 1402.6, 11.7, 1.1, 273.5, 750.4, 5.8, 29.9, 96.1, 1904.5],
        backgroundColor: cols
      }
    ]
  }
});


// Table 2

let canvas2 = document.createElement("canvas");

let table2 = document.getElementById("table2");
table2.parentNode.insertBefore(canvas2, table2);

const barCanvas2 = new Chart(canvas2, {
  type: "bar",
  data: {
    labels: [
      "Latvia",
      "Lithuania",
      "Estonia",
      "Czech Republic",
      "Poland",
      "Slovakia",
      "Hungary",
      "England and Wales (UK)",
      "Scotland (UK)(¹)",
      "Spain",
      "Romania",
      "Malta",
      "Bulgaria",
      "Luxembourg",
      "Portugal",
      "Croatia",
      "Italy",
      "Greece",
      "France",
      "Austria",
      "Belgium",
      "Northern Ireland (UK)",
      "The Netherlands",
      "Germany",
      "Ireland",
      "Cyprus",
      "Denmark",
      "Sweden",
      "Slovenia",
      "Finland"
    ],
    datasets: [
      {
        label: "2007-09",
        data: [312, 247, 266, 198, 228, 159, 148, 151, 150, 158, 132, 126, 132, 139, 106, 108, 98, 105, 99, 101, 93, 84, 90, 89, 76, 84, 66, 74, 66, 63]
      },
      {
        label: "2010-12",
        data: [312, 307, 253, 217, 214, 197, 169, 154, 154, 152, 150, 143, 132, 126, 120, 116, 113, 112, 106, 104, 101, 91, 84, 84, 80, 78, 72, 71, 65, 60]
      },
    ]
  },
});





//code with Ajax

// Get a reference to the canvas element
let canvas3 = document.createElement("canvas");

// Set the canvas attributes (ID, width, height)
canvas3.id = "myChart3"; // Canvas ID
canvas3.width = 400; // Canvas width
canvas3.height = 100; // Canvas height

let heading = document.getElementById("firstHeading");

heading.parentNode.insertBefore(canvas3, heading.nextSibling);

$(document).ready(function () {
  let chart;
  let dataPoints = [];

  function fetchDataAndRenderChart() {
    const url =
      "https://canvasjs.com/services/data/datapoints.php?xstart=1&ystart=10&length=10&type=json";

    const req = new XMLHttpRequest();
    req.open("GET", url, true);

    req.onreadystatechange = function () {
      if (req.readyState === 4 && req.status === 200) {
        const data = JSON.parse(req.responseText);
        dataPoints = data.map((point) => ({
          x: point[0],
          y: parseInt(point[1]),
        }));
        renderChart(dataPoints);
      }
    };

    req.send();
  }

  function renderChart(dataPoints) {
    const ctx = document.getElementById("myChart3").getContext("2d");

    chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: dataPoints.map((datapoint) => datapoint.x),
        datasets: [
          {
            label: "Live Chart with dataPoints from External JSON",
            data: dataPoints.map((datapoint) => datapoint.y),
            backgroundColor: "#ecf0f1",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  function updateChart() {
    const url =
      "https://canvasjs.com/services/data/datapoints.php?xstart=" +
      (dataPoints.length + 1) +
      "&ystart=" +
      dataPoints[dataPoints.length - 1].y +
      "&length=1&type=json";

    const req = new XMLHttpRequest();
    req.open("GET", url, true);

    req.onreadystatechange = function () {
      if (req.readyState === 4 && req.status === 200) {
        const data = JSON.parse(req.responseText);
        dataPoints.push({
          x: parseInt(data[0][0]),
          y: parseInt(data[0][1]),
        });

        chart.data.labels.push(dataPoints[dataPoints.length - 1].x);
        chart.data.datasets[0].data.push(dataPoints[dataPoints.length - 1].y);
        chart.update();
      }
    };

    req.send();
  }

  fetchDataAndRenderChart();

  setInterval(updateChart, 1000);
});