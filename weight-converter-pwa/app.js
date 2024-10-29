function calculateWeight() {
    const weightOnEarth = document.getElementById('weight').value;
    const planets = {
      Mercury: 0.38,
      Venus: 0.91,
      Mars: 0.38,
      Jupiter: 2.34,
      Saturn: 1.06,
      Uranus: 0.92,
      Neptune: 1.19
    };
    const results = document.getElementById('results');
    results.innerHTML = '';
  
    for (const [planet, gravity] of Object.entries(planets)) {
      const weight = (weightOnEarth * gravity).toFixed(2);
      const listItem = document.createElement('li');
      listItem.textContent = `Weight on ${planet}: ${weight} kg`;
      results.appendChild(listItem);
    }
  }

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then(() => console.log('Service Worker Registered'))
      .catch(error => console.log('Service Worker Registration Failed:', error));
  }