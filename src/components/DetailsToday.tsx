import Image from 'next/image'
import thermometer from 'public/icons/phosphor/thermometer.svg'
import wind from 'public/icons/phosphor/wind.svg'
import rain from 'public/icons/phosphor/rain.svg'
import drop from 'public/icons/phosphor/drop.svg'
import sun from 'public/icons/phosphor/sun.svg'

interface DetailsTodayProps {
  thermal_sensation: number | undefined
  probability_of_rain: number | undefined
  windspeed: number | undefined
  air_humidity?: number | undefined
  uv_index?: number | undefined
}

export default function DetailsToday({
  thermal_sensation,
  probability_of_rain,
  windspeed,
  air_humidity,
  uv_index,
}: DetailsTodayProps) {
  return (
    <div className="flex w-full max-w-[630px] flex-col gap-5 rounded-xl bg-base-gray-800 p-6 pb-2 mobile1:p-4">
      <span className="mobile:hidden font-nunito text-base text-base-gray-400">
        Detalhes do clima hoje
      </span>
      <div className="w-full">
        <div className="flex h-[64px] w-full items-center justify-between border-b border-b-base-gray-600 mobile1:h-[56px]">
          <div className="flex w-max items-center gap-2">
            <Image src={thermometer} width={32} height={32} alt="Icon" />
            <span className="font-nunito text-sm font-bold text-base-gray-200">
              Sensação térmica
            </span>
          </div>
          <span className="font-nunito text-xl font-bold text-base-gray-100 mobile1:text-base">
            {thermal_sensation ? `${thermal_sensation}ºc` : null}
          </span>
        </div>

        <div className="flex h-[64px] w-full items-center justify-between border-b border-b-base-gray-600 mobile1:h-[56px]">
          <div className="flex w-max items-center gap-2">
            <Image src={rain} width={32} height={32} alt="Icon" />
            <span className="font-nunito text-sm font-bold text-base-gray-200">
              Probabilidade de chuva
            </span>
          </div>
          <span className="font-nunito text-xl font-bold text-base-gray-100 mobile1:text-base">
            {probability_of_rain != undefined
              ? `${probability_of_rain}%`
              : null}
          </span>
        </div>

        <div className="flex h-[64px] w-full items-center justify-between border-b border-b-base-gray-600 mobile1:h-[56px]">
          <div className="flex w-max items-center gap-2">
            <Image src={wind} width={32} height={32} alt="Icon" />
            <span className="font-nunito text-sm font-bold text-base-gray-200">
              Velocidade do vento
            </span>
          </div>
          <span className="font-nunito text-xl font-bold text-base-gray-100 mobile1:text-base">
            {windspeed ? `${windspeed} km/h` : null}
          </span>
        </div>

        <div className="flex h-[64px] w-full items-center justify-between border-b border-b-base-gray-600 mobile1:h-[56px]">
          <div className="flex w-max items-center gap-2">
            <Image src={drop} width={32} height={32} alt="Icon" />
            <span className="font-nunito text-sm font-bold text-base-gray-200">
              Umidade do ar
            </span>
          </div>
          <span className="font-nunito text-xl font-bold text-base-gray-100 mobile1:text-base">
            {air_humidity ? `${air_humidity}%` : null}
          </span>
        </div>

        <div className="flex h-[64px] w-full items-center justify-between border-b border-b-transparent">
          <div className="flex w-max items-center gap-2">
            <Image src={sun} width={32} height={32} alt="Icon" />
            <span className="font-nunito text-sm font-bold text-base-gray-200">
              Índice UV
            </span>
          </div>
          <span className="font-nunito text-xl font-bold text-base-gray-100 mobile1:text-base">
            {uv_index != undefined ? uv_index : null}
          </span>
        </div>
      </div>
    </div>
  )
}
