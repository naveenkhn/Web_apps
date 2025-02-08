async function fetchPlanetData() {
  try {
      let response = await fetch("http://172.22.62.41:5000/planets");
      let planetData = await response.json();
      console.log("Fetched planet data:", planetData); // Debugging line
      return planetData;
  } catch (error) {
      console.error("Error fetching planet data:", error);
      return null;
  }
}

async function calculateWeight() {
  let weightInput = document.getElementById("weight").value;
  let resultsList = document.getElementById("results");

  // Clear previous results
  resultsList.innerHTML = "";

  let weight = parseFloat(weightInput);
  if (isNaN(weight) || weight <= 0) {
      resultsList.innerHTML = "<li>Please enter a valid weight.</li>";
      return;
  }

  let planetData = await fetchPlanetData();
  if (!planetData) {
      resultsList.innerHTML = "<li>Error fetching planet data. Try again later.</li>";
      return;
  }

  // Calculate and display weight on each planet
  for (let planet in planetData) {
      let planetWeight = (weight * planetData[planet]).toFixed(2);
      let listItem = document.createElement("li");
      listItem.textContent = `On ${planet}, It's ${planetWeight} kg`;
      resultsList.appendChild(listItem);
  }
}

// Fetch planet data once when the page loads
//fetchPlanetData();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
    .then(() => console.log('Service Worker Registered'))
    .catch(error => console.log('Service Worker Registration Failed:', error));
}