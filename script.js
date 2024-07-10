document.addEventListener('DOMContentLoaded', () => {
    countries();
});
async function countries() {

    try {
        const API_URL = `https://restcountries.com/v3.1/all`;
        const response = await fetch(API_URL);
        const data = await response.json();
        let countryData = data.map(country => ({
            name: country.name.common,
            googleMap: country.maps.googleMaps,
            flag: country.flags.png
        }));

        generateUI(countryData);
    } catch (error) {
        console.log(error);
    }
}
function generateUI(countryData) {
    const output = document.getElementById('countryList');
    
        output.innerHTML = countryData.map(country => ` <div class="border p-2">
            <img src=${country.flag} alt= "Flag of ${country.name} class="w-320 h-213">
            <p>${country.name}</p>
            <a href="${country.googleMap}" target="_blank" class="font-medium text-blue-500 hover:underline"> Google Map</a>
        </div>`).join('');

}
