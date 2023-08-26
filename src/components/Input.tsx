'use client'
import { useAutocomplete } from '@mui/base/useAutocomplete'
import { useState } from 'react'
import Espinner from './Spinner'

const options = [
  'Porto Alegre, RS - Brasil',
  'Porto Seguro, BA - Brasil',
  'Porto - Portugal',
  'Lagarto, SE - Brasil',
]

export default function Input() {
  const [value, setValue] = useState<string | null>('')
  const [inputValue, setInputValue] = useState('')

  const [isLoading, setIsloading] = useState(false)

  const {
    getRootProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    focused,
  } = useAutocomplete({
    id: 'use-autocomplete-demo',
    options: options,
    value,
    onChange: (event, newValue) => setValue(newValue),
    inputValue,
    onInputChange: (event, newInputValue) => setInputValue(newInputValue),
  })

  return (
    <div className="flex w-[452px] flex-col gap-1">
      <div className="group relative flex h-max w-full " {...getRootProps()}>
        <input
          placeholder="Buscar local"
          className="flex h-[56px] w-full rounded-lg border border-transparent bg-base-gray-600 pl-5 pr-5 text-base text-white placeholder-base-gray-400 outline-none hover:border-violet-900 focus:border-violet-500"
          {...getInputProps()}
        />
        <div className="absolute right-5 top-[22%]">
          {isLoading ? <Espinner /> : null}
        </div>
      </div>
      {groupedOptions.length > 0 && (
        <ul
          className="flex w-full flex-col gap-[1px] overflow-hidden rounded-lg"
          {...getListboxProps()}
        >
          {options.map((option, index) => (
            <li
              className="w-ful flex h-[54px] cursor-pointer items-center bg-base-gray-500 pl-5 pr-5 text-white hover:bg-[#36364a]"
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
