'use client'
import { useEffect, useRef, useState } from 'react'
import { useDebounce } from 'usehooks-ts'
import searchCityByInputValue from '@/utils/searchCityByInputValue'
import Spinner from './Spinner'
import { ScrollArea } from './ui/scroll-area'
import Link from 'next/link'

type listOfResultType = {
  id: number
  cityName: string
  longitude: number
  latitude: number
}

interface InputProps {
  loading?: boolean
}

export default function Input({ loading = false }: InputProps) {
  const [isLoading, setIsLoading] = useState(loading ? loading : false)
  const [inputValue, setInputValue] = useState<string>('')
  const debouncedValue = useDebounce<string>(inputValue, 500)
  const [resultBox, setResultBox] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const [listOfResults, setListOfResults] = useState<listOfResultType[]>([])
  const [selectedCity, setSelectedCity] = useState<listOfResultType | null>(
    null,
  )

  // Caso o click na tela foi fora do input oculta a lista de sugestões
  const handleClickOutside = (event: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
      setResultBox(false)
    } else {
      setResultBox(true)
    }
  }

  // Adiciona um evento para monitorar os clicks na tela
  useEffect(() => {
    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    const searchCity = async () => {
      setListOfResults([])
      setIsLoading(true)
      const searchResult = await searchCityByInputValue(
        `https://geocoding-api.open-meteo.com/v1/search?name=${debouncedValue}`,
      )
      if (searchResult) {
        setListOfResults(searchResult)
        setIsLoading(false)
      } else {
        setListOfResults([])
        setIsLoading(false)
      }
    }

    searchCity()
  }, [debouncedValue])

  return (
    <div className="relative flex h-12 w-full max-w-[600px] flex-col">
      <div className="group relative flex h-max w-full ">
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          disabled={isLoading}
          ref={inputRef}
          placeholder="Buscar local"
          data-loading={isLoading}
          className="flex h-[56px] w-full rounded-lg border-2 border-transparent bg-base-gray-600 pl-5 pr-5 font-nunito text-base text-white placeholder-base-gray-400 outline-none hover:border-violet-900 focus:border-violet-500 data-[loading=true]:bg-base-gray-600 data-[loading=true]:text-base-gray-200 data-[loading=true]:hover:border-transparent"
        />
        <div
          style={{ display: resultBox ? 'flex' : 'none' }}
          className="absolute top-16 z-50 flex h-max w-full flex-col overflow-hidden rounded-lg border border-slate-700 bg-base-gray-800 "
        >
          <ScrollArea
            className={`${listOfResults.length > 0 ? 'h-[300px]' : 'h-1'} overflow-hidden`}
          >
            <ul className="flex w-full flex-col gap-[1px]">
              {listOfResults.map((city) => (
                <Link
                  key={city.id}
                  href={`/dashboard?latitude=${city.latitude}&longitude=${city.longitude}&city=${city.cityName}`}
                >
                  <li className="w-ful flex h-[54px] cursor-pointer items-center bg-base-gray-500 pl-5 pr-5 font-nunito text-white hover:bg-[#36364a]">
                    {city.cityName}
                  </li>
                </Link>
              ))}
            </ul>
          </ScrollArea>
        </div>
        <div className="absolute right-5 top-[22%]">
          {isLoading ? <Spinner /> : null}
        </div>
      </div>
    </div>
  )
}
