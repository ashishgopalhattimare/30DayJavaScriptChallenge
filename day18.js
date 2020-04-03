const countriesAPI = 'https://restcountries.eu/rest/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

async function fetchCountries()
{
    try
    {
        const response = await fetch(countriesAPI)
        const data = await response.json()
        
        for (const x of data) {
            let lang = []
            for( const obj of x.languages) {
                lang.push(obj['name'])
            }
            console.log(`Country = ${x.name}, Capital = ${x.capital}, Languages = [${lang}], Population = ${x.population}, Area = ${x.area}`)
        }
    }
    catch(error)
    {
        console.log('Error Exercise 1 Generated')
    }
}

async function fetchCats()
{
    try
    {
        const response = await fetch(catsAPI)
        const data = await response.json()

        let catNames = []
        for( const cat of data) {
            catNames.push(cat['name'])
        }

        console.log(catNames)
    }
    catch(error)
    {
        console.log('Error Exercise 2 Generated')
    }
}

async function averageWeightCat()
{
    try {
        const response = await fetch(catsAPI);
        const data = await response.json();

        let size = data.length
        let total = 0.0
        for( const cat of data) {
            const metricString = cat['weight'].metric

            const arr = metricString.split('-')
            total += ((parseInt(arr[0].trim()) + parseInt(arr[1].trim()))/2)
        }
        console.log(`Average Weight of cat in metric unit : ${total/size}`)
    }
    catch(error) {
        console.log('Error Generated')
    }
}

fetchCountries()
fetchCats()
averageWeightCat()