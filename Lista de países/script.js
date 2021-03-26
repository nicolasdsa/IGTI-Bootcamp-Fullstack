/* script */

window.addEventListener("load", () => {
   fetchCountries();
})

async function fetchCountries(){
     let Countries = await fetch("https://restcountries.eu/rest/v2/all")
     let CountriesJson = await Countries.json();

     let CountriesMap = await CountriesJson.map(country => {
        let {
            name,
            population
        } = CountriesJson

        return console.log(CountriesJson)
     })
}