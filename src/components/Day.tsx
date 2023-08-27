import Image from 'next/image'
import few_clouds_night from 'public/icons/wheather/few-clouds-night.svg'

export default function Day() {
  return (
    <div className="flex h-[212px] w-[116px] flex-col items-center justify-center gap-3 mobile:h-[152px] mobile:w-[68px]">
      <span className="font-nunito text-sm font-bold text-base-gray-200 mobile:hidden">
        Amanhã
      </span>
      <span className="hidden font-nunito text-sm font-bold text-base-gray-200 mobile:block">
        Ter
      </span>
      <div className="relative h-[68px] w-[68px] mobile:h-[52px] mobile:w-[52px]">
        <Image src={few_clouds_night} fill alt="Weather Icon" />
      </div>
      <div className="flex w-max flex-col items-center justify-center gap-1">
        <span className="font-nunito text-sm text-base-gray-200 mobile:hidden">
          Temporal
        </span>
        <div className="flex w-full flex-row items-center gap-2 mobile:flex-col mobile:gap-0">
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
