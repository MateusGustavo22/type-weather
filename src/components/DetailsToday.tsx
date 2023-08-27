import Image from 'next/image'
import thermometer from 'public/icons/phosphor/thermometer.svg'
import wind from 'public/icons/phosphor/wind.svg'
import rain from 'public/icons/phosphor/rain.svg'
import drop from 'public/icons/phosphor/drop.svg'
import sun from 'public/icons/phosphor/sun.svg'

export default function DetailsToday() {
  return (
    <div className="flex w-full max-w-[630px] flex-col gap-5 rounded-xl bg-base-gray-800 p-6 mobile:p-4">
      <span className="font-nunito text-base text-base-gray-400">
        Detalhes do clima hoje
      </span>
      <div className="w-full">
        <div className="flex h-[64px] w-full items-center justify-between border-b border-b-base-gray-600 mobile:h-[56px]">
          <div className="flex w-max items-center gap-2">
            <Image src={thermometer} width={32} height={32} alt="Icon" />
            <span className="font-nunito text-sm font-bold text-base-gray-200">
              Sensação térmica
            </span>
          </div>
          <span className="font-nunito text-xl font-bold text-base-gray-100">
            26ºc
          </span>
        </div>

        <div className="flex h-[64px] w-full items-center justify-between border-b border-b-base-gray-600 mobile:h-[56px]">
          <div className="flex w-max items-center gap-2">
            <Image src={rain} width={32} height={32} alt="Icon" />
            <span className="font-nunito text-sm font-bold text-base-gray-200">
              Probabilidade de chuva
            </span>
          </div>
          <span className="font-nunito text-xl font-bold text-base-gray-100">
            26ºc
          </span>
        </div>

        <div className="flex h-[64px] w-full items-center justify-between border-b border-b-base-gray-600 mobile:h-[56px]">
          <div className="flex w-max items-center gap-2">
            <Image src={wind} width={32} height={32} alt="Icon" />
            <span className="font-nunito text-sm font-bold text-base-gray-200">
              Velocidade do vento
            </span>
          </div>
          <span className="font-nunito text-xl font-bold text-base-gray-100">
            26ºc
          </span>
        </div>

        <div className="flex h-[64px] w-full items-center justify-between border-b border-b-base-gray-600 mobile:h-[56px]">
          <div className="flex w-max items-center gap-2">
            <Image src={drop} width={32} height={32} alt="Icon" />
            <span className="font-nunito text-sm font-bold text-base-gray-200">
              Umidade do ar
            </span>
          </div>
          <span className="font-nunito text-xl font-bold text-base-gray-100">
            26ºc
          </span>
        </div>

        <div className="flex h-[64px] w-full items-center justify-between border-b border-b-transparent">
          <div className="flex w-max items-center gap-2">
            <Image src={sun} width={32} height={32} alt="Icon" />
            <span className="font-nunito text-sm font-bold text-base-gray-200">
              Índice UV
            </span>
          </div>
          <span className="font-nunito text-xl font-bold text-base-gray-100">
            26ºc
          </span>
        </div>
      </div>
    </div>
  )
}
