import Image from 'next/image'
import Input from './Input'
import logo_min from 'public/icons/logo-min.svg'
import cloudy_night from 'public/icons/wheather/cloudy-night.svg'
import Link from 'next/link'

export default function Card() {
  return (
    <div className="h-full max-h-[720px] w-full max-w-[664px] shrink-0 tablet2:max-w-[630px]">
      <div className="flex aspect-[720/696] flex-col  gap-4 rounded-xl bg-base-gray-800 p-4 tablet2:aspect-[720/696]">
        <div className="flex h-max w-full gap-3">
          <Link
            href="/"
            className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-lg bg-base-gray-600"
          >
            <Image src={logo_min} width={30} height={30} alt="Logo Icon" />
          </Link>
          <Input />
        </div>
        <div
          style={{
            backgroundImage: 'url(/images/backgrounds/clear-night.png)',
          }}
          className="relative flex h-full w-full flex-col justify-between rounded-lg p-8 mobile2:p-5"
        >
          <div className="flex h-[58px] w-full justify-between">
            <div className="flex w-max flex-col gap-2">
              <span className="font-nunito text-xl font-bold text-white mobile2:text-lg">
                Porto Alegre, RS
              </span>
              <span className="pr-3 font-nunito text-base text-white mobile2:text-sm">
                Segunda-feira, 15 de maio de 2023
              </span>
            </div>
            <span className="font-nunito text-xl font-bold text-white mobile2:text-sm">
              21:39
            </span>
          </div>
          <div className="w-max">
            <div className="flex w-max flex-col gap-3">
              <span className="font-nunito text-[96px] font-extrabold leading-none text-white mobile2:text-5xl">
                28ºc
              </span>
              <div className="flex flex-row items-center gap-3 mobile2:flex-col mobile2:items-start mobile2:gap-0">
                <span className="font-nunito text-xl font-bold text-white mobile2:text-base">
                  32ºc / 26ºc
                </span>
                <div className="h-2 w-2 rounded-full bg-white opacity-40 mobile2:hidden" />
                <span className="font-nunito text-xl font-normal text-white mobile2:text-base">
                  Poucas nuvens
                </span>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 h-[248px] w-[248px] mobile2:h-[160px] mobile2:w-[160px]">
            <Image src={cloudy_night} fill alt="Weather Icon" />
          </div>
        </div>
      </div>
    </div>
  )
}
