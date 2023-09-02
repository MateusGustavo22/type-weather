import { getCountryAbbreviation } from './countryAbbreviatios'
import { fetchWeatherAPI } from './fetchWeatherApi'

export default async function getSearchCityApi(url: string) {
  function formatCityStateName(cityState: string) {
    return cityState.substring(0, 2).toUpperCase()
  }

  interface formatSearchResultType {
    cityName: string
    id: number
    latitude: number
    longitude: number
  }

  const formatSearchResult = (results: any[]) => {
    const resultList: formatSearchResultType[] = []

    if (results) {
      results.map((item) => {
        resultList.push({
          cityName: `${item.name}, ${item.admin1} - ${getCountryAbbreviation(
            item.country,
          )}`,
          id: item.id,
          latitude: item.latitude,
          longitude: item.longitude,
        })
      })
    }

    return resultList
  }

  const getWeatherApi = async (apiUrl: string) => {
    const result = await fetchWeatherAPI(apiUrl)
    const resultFormatted = formatSearchResult(result.results)
    return resultFormatted
  }

  return getWeatherApi(url)
}
