export const fetchWeatherAPI = async (api_url: string) => {
  try {
    const response = await fetch(api_url)
    const data = await response.json()

    if (!response.ok) {
      throw new Error('A resposta da API não foi bem-sucedida')
    }
    return data
  } catch {
    console.log('Falha ao consultar a API')
  }
}
