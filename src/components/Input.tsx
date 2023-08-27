'use client'
import { useAutocomplete } from '@mui/base/useAutocomplete'
import { useState } from 'react'
import Espinner from './Spinner'

const options = [
  'Porto Alegre, RS - Brasil',
  'Porto Seguro, BA - Brasil',
  'Porto - Portugal',
  'Londres, Inglaterra - Reino Unido',
  'Tóquio, Japão',
  'Paris, França',
  'Sydney, Austrália',
  'Toronto, Canadá',
  'Cidade do México, México',
]

export default function Input() {
  const [value, setValue] = useState<string | null>('')
  const [inputValue, setInputValue] = useState('')

  const [isLoading, setIsloading] = useState(false)

  const { getInputProps, getListboxProps, getOptionProps, groupedOptions } =
    useAutocomplete({
      id: 'use-autocomplete-demo',
      options: options,
      value,
      inputValue,
      onChange: (event, newValue) => setValue(newValue),
      onInputChange: (event, newInputValue) => setInputValue(newInputValue),
    })

  const inputProps = isLoading ? { disabled: true } : getInputProps()

  return (
    <div className="relative flex h-12 w-full max-w-[600px] flex-col">
      <div className="group relative flex h-max w-full ">
        <input
          placeholder="Buscar local"
          data-loading={isLoading}
          {...inputProps}
          className="flex h-[56px] w-full rounded-lg border-2 border-transparent bg-base-gray-600 pl-5 pr-5 font-nunito text-base text-white placeholder-base-gray-400 outline-none hover:border-violet-900 focus:border-violet-500 data-[loading=true]:bg-base-gray-800 data-[loading=true]:text-base-gray-200 data-[loading=true]:hover:border-transparent"
        />
        <div className="absolute right-5 top-[22%]">
          {isLoading ? <Espinner /> : null}
        </div>
      </div>
      {groupedOptions.length > 0 && (
        <ul
          className="absolute top-16 z-50 flex w-full flex-col gap-[1px] overflow-hidden rounded-lg"
          {...getListboxProps()}
        >
          {(groupedOptions as string[]).map((option, index) => (
            <li
              className="w-ful flex h-[54px] cursor-pointer items-center bg-base-gray-500 pl-5 pr-5 font-nunito text-white hover:bg-[#36364a]"
              key={option}
              {...getOptionProps({ option, index })}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
