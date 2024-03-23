let tabContentB = document.querySelectorAll(".tab_content_block");
let tabContentI = document.querySelectorAll(".tab_content_item");
let tabContentIS = document.querySelector(".tab_content_items");

const highTabContent = () => {
  tabContentB.forEach((tabcard) => {
    tabcard.style.display = "none";
  });
  tabContentI;
};

// let usd = document.getElementById("usd");

// let som = document.getElementById("som");

// let eur = document.getElementById("eur");

// som.oninput = () => {
//   const request = new XMLHttpRequest();
//   request.open("GET", "../data/data.json");
//   request.setRequestHeader("Accept", "application/json");
//   request.send();

//   request.onload = () => {
//     const data = JSON.parse(request.response);

//     usd.value = (som.value / data.usd).toFixed(2);
//   };
// };


let usd = document.getElementById("usd");
let som = document.getElementById("som");
let eur = document.getElementById("eur");
let usdt = document.getElementById("usdt");


usd.oninput = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "../data/data.json");
  request.setRequestHeader("Accept", "application/json");
  request.send();

  request.onload = () => {
    if (request.status === 200) {
      const data = JSON.parse(request.responseText);
      som.value = (usd.value * data.usd).toFixed(2);
      eur.value = (usd.value * data.eur).toFixed(2);
      usdt.value = (usd.value * data.usdt).toFixed(2);
    } else {
      console.log("Ошибка запроса: " + request.status);
    }
  };
};


som.oninput = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "../data/data.json");
  request.setRequestHeader("Accept", "application/json");
  request.send();

  request.onload = () => {
    if (request.status === 200) {
      const data = JSON.parse(request.responseText);
      usd.value = (som.value / data.usd).toFixed(2);
      eur.value = (som.value / data.eur).toFixed(2);
      usdt.value = (som.value / data.usdt).toFixed(2);
    } else {
      console.log("Ошибка запроса: " + request.status);
    }
  };
};


eur.oninput = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "../data/data.json");
  request.setRequestHeader("Accept", "application/json");
  request.send();

  request.onload = () => {
    if (request.status === 200) {
      const data = JSON.parse(request.responseText);
      som.value = (eur.value * data.eur).toFixed(2);
      usd.value = (eur.value * data.usd).toFixed(2);
      usdt.value = (eur.value * data.usdt).toFixed(2);
    } else {
      console.log("Ошибка запроса: " + request.status);
    }
  };
};


usdt.oninput = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "../data/data.json");
  request.setRequestHeader("Accept", "application/json");
  request.send();

  request.onload = () => {
    if (request.status === 200) {
      const data = JSON.parse(request.responseText);
      som.value = (usdt.value * data.usdt).toFixed(2);
      usd.value = (usdt.value * data.usd).toFixed(2);
      eur.value = (usdt.value * data.eur).toFixed(2);
    } else {
      console.log("Ошибка запроса: " + request.status);
    }
  };
};

