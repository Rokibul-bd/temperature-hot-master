const Api_key = '058d4e166c0cee71dc6319f60f3965a5';
const loadWatherData = async city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_key}&units=metric`
    const res = await fetch(url);
    const data = await res.json();
    displayWatherDetails(data)
}

const displayWatherDetails = data => {
    const temperature = document.getElementById('temperature');
    temperature.innerText = data.main.temp;
}
// ================================
const display = () => {
    const inputField = document.getElementById('search-input-field');
    const cityContainer = document.getElementById('city-container');
    const cityName = inputField.value;
    cityContainer.innerText = cityName;
    inputField.value = '';
    loadWatherData(cityName)
}

// click button to work event hundler add to search button 
document.getElementById('search-btn').addEventListener('click', function () {
    display()
})
document.getElementById('search-input-field').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault()
        display()
    }
})

loadWatherData('Dhaka')