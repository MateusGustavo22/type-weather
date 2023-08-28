import Image from 'next/image'
import few_clouds_night from 'public/icons/wheather/few-clouds-night.svg'

export default function Day() {
  return (
    <div className="flex h-[212px] w-[130px] flex-col items-center justify-center gap-3 pl-3 pr-3 mobile:pl-0 mobile:pr-0 mobile2:h-[152px] mobile2:w-[116px] mobile2:w-[68px]">
      <span className="font-nunito text-sm font-bold text-base-gray-200 mobile2:hidden">
        Amanhã
      </span>
      <span className="hidden font-nunito text-sm font-bold text-base-gray-200 mobile2:block">
        Ter
      </span>
      <div className="relative h-[68px] w-[68px]">
        <Image src={few_clouds_night} fill alt="Weather Icon" />
      </div>
      <div className="flex w-max flex-col items-center justify-center gap-1">
        <span className="tablet2:hidden font-nunito text-sm text-base-gray-200">
          Poucas nuvens
        </span>
        <div className="flex w-full flex-row items-center justify-center gap-2 mobile:flex-col">
          <span className="font-nunito text-sm font-bold text-base-gray-100">
            32ºc
          </span>
          <span className="font-nunito text-sm font-bold text-base-gray-400">
            26ºc
          </span>
        </div>
      </div>
    </div>
  )
}
