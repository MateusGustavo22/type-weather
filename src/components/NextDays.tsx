import Day from './Day'

interface NextDaysProps {
  temperature_max: number[]
  temperature_min: number[]
  weathercode: number[]
  timestamp: number[]
}

export default function NextDays({
  temperature_max,
  temperature_min,
  weathercode,
  timestamp,
}: NextDaysProps) {
  let i = 0
  const renderDays = () => {
    if (i < 5) {
      i++
    } else {
      return
    }
    return (
      <Day
        key={timestamp[i]}
        timestamp={timestamp ? timestamp[i] : undefined}
        temperature_max={temperature_max ? temperature_max[i] : undefined}
        temperature_min={temperature_min ? temperature_min[i] : undefined}
        weathercode={weathercode ? weathercode[i] : undefined}
      />
    )
  }

  return (
    <div className="flex h-max w-full max-w-[630px] flex-col gap-5 rounded-xl bg-base-gray-800 p-6 mobile2:p-2">
      <span className="font-nunito text-base text-base-gray-400 mobile2:hidden">
        Previsão para 5 dias
      </span>
      <div className="flex h-full w-full mobile2:pb-3 mobile2:pt-3 desktop2:justify-between">
        {timestamp?.map((item: any) => renderDays())}
      </div>
    </div>
  )
}
