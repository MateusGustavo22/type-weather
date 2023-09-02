'use client'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import Espinner from './Spinner'
import { useDebounce } from 'usehooks-ts'
import getSearchCityApi from '@/utils/getSearchCityApi'

const defaultSuggestions = [
  {
    id: 1234567,
    cityName: 'Aracaju, SE - Brasil',
    longitude: -37.0717,
    latitude: -10.9111,
  },
  {
    id: 1234568,
    cityName: 'Rio de Janeiro, RJ - Brasil',
    longitude: -43.1822,
    latitude: -22.9064,
  },
  {
    id: 1234569,
    cityName: 'Salvador, BA - Brasil',
    longitude: -38.5108,
    latitude: -12.9711,
  },
  {
    id: 1234510,
    cityName: 'Brasília, DF - Brasil',
    longitude: -47.9297,
    latitude: -15.7797,
  },
]

const searchCityNameApi = process.env.NEXT_PUBLIC_SEARCH_CITY_NAME

interface InputProps {
  loading?: boolean
}

export default function Input({ loading = false }: InputProps) {
  const [IsLoading, setIsLoading] = useState(loading ? loading : false)
  const [options, setOptions] =
    useState<typeof defaultSuggestions>(defaultSuggestions)
  const [displayOpitonsBox, setDisplayOptionsBox] = useState(false)
  const [inputValue, setInputValue] = useState<string>('')

  const debouncedValue = useDebounce<string>(inputValue, 500)
  const inputRef = useRef<HTMLInputElement>(null)
  const optionsBox = useRef<HTMLUListElement>(null)
  const router = useRouter()

  const searchCityUrl = `${searchCityNameApi}${debouncedValue}`

  const handleClickOutside = (event: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
      setDisplayOptionsBox(false)
    } else {
      setDisplayOptionsBox(true)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const searchCity = async (url: string) => {
    setOptions([])
    setIsLoading(true)
    const searchResult = await getSearchCityApi(searchCityUrl)
    if (searchResult) {
      setOptions(searchResult)
      setIsLoading(false)
    } else {
      setOptions([])
      setIsLoading(false)
    }
  }

  type selectedOption = (typeof defaultSuggestions)[0]

  const selectOption = (item: selectedOption) => {
    setInputValue(item.cityName)
    setIsLoading(true)
    setOptions([])
    const dashboardRouter = `/dashboard?latitude=${item.latitude}&longitude=${item.longitude}&city=${item.cityName}`
    router.push(dashboardRouter)
  }

  useEffect(() => {
    if (inputValue != '' && inputValue.length > 2) {
      const filteredOptions = options.some(
        (item) => item.cityName === inputValue,
      )
      if (filteredOptions) {
        return
      } else {
        searchCity(searchCityUrl)
      }
    } else {
      setOptions([])
      setOptions(defaultSuggestions)
    }
  }, [debouncedValue])

  return (
    <div className="relative flex h-12 w-full max-w-[600px] flex-col">
      <div className="group relative flex h-max w-full ">
        <input
          value={inputValue}
          onChange={handleInputChange}
          disabled={IsLoading}
          ref={inputRef}
          placeholder="Buscar local"
          data-loading={IsLoading}
          className="flex h-[56px] w-full rounded-lg border-2 border-transparent bg-base-gray-600 pl-5 pr-5 font-nunito text-base text-white placeholder-base-gray-400 outline-none hover:border-violet-900 focus:border-violet-500 data-[loading=true]:bg-base-gray-600 data-[loading=true]:text-base-gray-200 data-[loading=true]:hover:border-transparent"
        />
        <div className="absolute right-5 top-[22%]">
          {IsLoading ? <Espinner /> : null}
        </div>
      </div>
      <ul
        ref={optionsBox}
        style={{ display: displayOpitonsBox ? 'flex' : 'none' }}
        className="absolute top-16 z-50 flex w-full flex-col gap-[1px] overflow-hidden rounded-lg bg-base-gray-800"
      >
        {options.map((item) => (
          <li
            key={item.id}
            onClick={() => selectOption(item)}
            className="w-ful flex h-[54px] cursor-pointer items-center bg-base-gray-500 pl-5 pr-5 font-nunito text-white hover:bg-[#36364a]"
          >
            {item.cityName}
          </li>
        ))}
      </ul>
    </div>
  )
}
