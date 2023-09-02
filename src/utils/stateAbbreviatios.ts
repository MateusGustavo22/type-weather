const states = {
  Acre: 'AC',
  Alagoas: 'AL',
  Amapá: 'AP',
  Amazonas: 'AM',
  Bahia: 'BA',
  Ceará: 'CE',
  'Distrito Federal': 'DF',
  'Espírito Santo': 'ES',
  Goiás: 'GO',
  Maranhão: 'MA',
  'Mato Grosso': 'MT',
  'Mato Grosso do Sul': 'MS',
  'Minas Gerais': 'MG',
  Pará: 'PA',
  Paraíba: 'PB',
  Paraná: 'PR',
  Pernambuco: 'PE',
  Piauí: 'PI',
  'Rio de Janeiro': 'RJ',
  'Rio Grande do Norte': 'RN',
  'Rio Grande do Sul': 'RS',
  Rondônia: 'RO',
  Roraima: 'RR',
  'Santa Catarina': 'SC',
  'São Paulo': 'SP',
  Sergipe: 'SE',
  Tocantins: 'TO',
}

export const StateAbbreviation = (state: string) => {
  switch (state) {
    case 'Acre':
      return states.Acre
    case 'Alagoas':
      return states.Alagoas
    case 'Amapá':
      return states.Amapá
    case 'Amazonas':
      return states.Amazonas
    case 'Bahia':
      return states.Bahia
    case 'Ceará':
      return states.Ceará
    case 'Distrito Federal':
      return states['Distrito Federal']
    case 'Espírito Santo':
      return states['Espírito Santo']
    case 'Goiás':
      return states.Goiás
    case 'Maranhão':
      return states.Maranhão
    case 'Mato Grosso':
      return states['Mato Grosso']
    case 'Mato Grosso do Sul':
      return states['Mato Grosso do Sul']
    case 'Minas Gerais':
      return states['Minas Gerais']
    case 'Pará':
      return states.Pará
    case 'Paraíba':
      return states.Paraíba
    case 'Paraná':
      return states.Paraná
    case 'Pernambuco':
      return states.Pernambuco
    case 'Piauí':
      return states.Piauí
    case 'Rio de Janeiro':
      return states['Rio de Janeiro']
    case 'Rio Grande do Norte':
      return states['Rio Grande do Norte']
    case 'Rio Grande do Sul':
      return states['Rio Grande do Sul']
    case 'Rondônia':
      return states.Rondônia
    case 'Roraima':
      return states.Roraima
    case 'Santa Catarina':
      return states['Santa Catarina']
    case 'São Paulo':
      return states['São Paulo']
    case 'Sergipe':
      return states.Sergipe
    case 'Tocantins':
      return states.Tocantins
    default:
      return state
  }
}
