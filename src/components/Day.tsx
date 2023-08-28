import Image from 'next/image'
import few_clouds_night from 'public/icons/wheather/few-clouds-night.svg'

export default function Day() {
  return (
    <div className="mobile1:h-[150px] mobile1:w-[26px] flex h-[212px] w-[130px] flex-col items-center justify-center gap-3 mobile2:h-[152px] mobile2:w-[88px] desktop1:w-[88px]">
      <span className="font-nunito text-sm font-bold text-base-gray-200 mobile2:hidden desktop2:hidden">
        Amanhã
      </span>
      <span className="hidden font-nunito text-sm font-bold text-base-gray-200 mobile2:block desktop2:block">
        Ter
      </span>
      <div className="relative h-[66px] w-[66px]">
        <Image src={few_clouds_night} fill alt="Weather Icon" />
      </div>
      <div className="flex w-max flex-col items-center justify-center gap-1">
        <span className="font-nunito text-sm text-base-gray-200 mobile2:hidden desktop1:hidden">
          Poucas nuvens
        </span>
        <div className="mobile1:flex-col flex w-full flex-row items-center justify-center gap-2 mobile2:gap-0">
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
