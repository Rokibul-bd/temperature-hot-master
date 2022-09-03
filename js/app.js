const Api_key = '058d4e166c0cee71dc6319f60f3965a5';
const loadWatherData = async city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_key}&units=metric`
    const res = await fetch(url);
    const data = await res.json();
    displayWatherDetails(data)
}
// event hundler add in search btn and show wather 
document.getElementById('search-btn').addEventListener('click', function () {
    const inputField = document.getElementById('search-input-field');
    const cityContainer = document.getElementById('city-container');
    const cityName = inputField.value;
    cityName.toUpperCase()
    cityContainer.innerText = cityName;
    inputField.value = ''
    loadWatherData(cityName)
})
const displayWatherDetails = (data) => {
    const tempContainer = document.getElementById('temperature');
    tempContainer.innerText = data.main.temp;
}
loadWatherData('Dhaka')
// Enter key press 
const inputField = document.getElementById('search-input-field');
inputField.addEventListener('keypress', function (e) {
    // inputField value get 
    if (e.key === 'Enter') {
        e.preventDefault();
        loadWatherData(e.key)
    }
})