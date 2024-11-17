async function getData() {
    const city = document.querySelector('input').value
    const apiKey = 'd2213b2b1c8f47bab3070212241211';
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`

    const response = await fetch(url)
    const data = await response.json()
    console.log(data)

    document.querySelector('.weatherResult').innerHTML = `
    <p><strong>Location :</strong>${data.location.name}</p>
    <p><strong>Country Name :</strong>${data.location.region}</p>
    <p><strong>State Name:</strong>${data.location.country}</p>
    <p><strong>Date :</strong>${data.location.localtime}</p>
    <p><strong>Temperature :</strong>${data.current.temp_c}°C</p>
    <p><strong>Humidity :</strong>${data.current.humidity}%</p>`
}
// getData()