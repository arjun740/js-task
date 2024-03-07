const apiUrl = "https://api.npoint.io/7bbd3a59c401f616bb89";

async function fetchData() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const data = await response.json();
    displayCities(data.places);
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

function displayCities(cities) {
  const container = document.getElementById("cities-container");

  cities.forEach((city) => {
    const cityCard = document.createElement("div");
    cityCard.classList.add("city-card");

    const cityImage = document.createElement("img");
    cityImage.src = city.image;
    cityImage.alt = city.state + " Image";
    cityImage.classList.add("city-image");

    const cityName = document.createElement("h2");
    cityName.textContent = city.state;

    const cityInfo = document.createElement("p");
    cityInfo.textContent = city.info;

    cityCard.appendChild(cityImage);
    cityCard.appendChild(cityName);
    cityCard.appendChild(cityInfo);

    container.appendChild(cityCard);
  });
}

fetchData();
