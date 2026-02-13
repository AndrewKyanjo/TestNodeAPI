export const getDataByQueryParams = (data, queryParam) => {
    const {continent, country} = queryParam
    if (continent) {
        data = data
            .filter(destination => destination.continent.toUpperCase() === continent.toUpperCase())
    }
    if (country) {
        data = data
            .filter(destination => destination.country.toLowerCase() === country.toLowerCase())
    }
    return data
}