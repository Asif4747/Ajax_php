function displayCarSpecification(carSpecifications) {
  let carDetail = "";

  for (let i = 0; i < carSpecifications.length; i++) {
    let cars = carSpecifications[i];
    carDetail +=
      `<div class = "carDetail"><h1>` +
      cars.car_name +
      "</h1> <img src=" +
      cars.image +
      `> <div class="container"> <h4> Model:` +
      cars.car_model +
      `</h4> <h4> Capacity:` +
      cars.capacity +
      `</h4> <h4> Price:` +
      carSpecifications[i].price +
      `<h4> </div> </div> `;
  }
  document.getElementById("carSpecification").innerHTML = carDetail;
}

function loadCarJson() {
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.onload = function () {
    const response = JSON.parse(this.responseText);
    if (response.success) {
      displayCarSpecification(response.data);
    } else {
      document.getElementById("carSpecification").innerHTML = response.message;
    }
  };
  xmlhttp.open("GET", "php/cars.php?todo=getCars");
  xmlhttp.send();
}

function addCarInformation() {
  let carName = document.getElementById("carName").value.trim();
  let carModel = document.getElementById("carModel").value.trim();
  let capacity = document.getElementById("capacity").value.trim();
  let price = document.getElementById("price").value.trim();
  if (carName !== "" && carModel !== "" && capacity !== "" && price !== "") {
    let carInformation = {
      carName: carName,
      carModel: carModel,
      capacity: capacity,
      price: price,
    };

     saveCarJson(carInformation);
  }
  
}

function saveCarJson(postData) {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "php/cars.php?todo=add_car", true);
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.send(JSON.stringify(postData));
  xhr.onreadystatechange = function () {

    if (xhr.readyState === 4 && xhr.status === 201) {
      document.getElementById("response").innerHTML =
        "Post request successful: " + xhr.responseText;
    } else {
      document.getElementById("response").innerHTML =
        "Post request failed: " + xhr.responseText;
    }
  };
}
