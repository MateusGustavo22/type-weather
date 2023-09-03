'use client'
import Input from '@/components/Input'
import Image from 'next/image'
import logo_full from 'public/icons/logo-full.svg'

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: 'url(/images/backgrounds/background.png)',
      }}
      className="fixed flex h-full min-h-screen w-full justify-center overflow-auto bg-cover bg-center bg-no-repeat p-4"
    >
      <div className="absolute top-0 mt-12 flex w-full items-center justify-center">
        <Image src={logo_full} width={186} height={32} alt="Logo" />
      </div>
      <div className="mobile:top-1/4 mobile:gap-8 absolute top-1/3 flex w-full max-w-[500] flex-col items-center gap-[56px] p-4">
        <div className="flex w-full flex-col justify-center gap-2 ">
          <h1 className="font-poppins text-center text-3xl font-bold text-white mobile1:text-xl">
            Boas vindas ao{' '}
            <strong className="text-blue_light">TypeWeather</strong>
          </h1>
          <span className="font-poppins text-center text-xl text-base-gray-200 mobile1:text-sm ">
            Escolha um local para ver a previsão do tempo
          </span>
        </div>
        <div className="w-full max-w-[504px]">
          <Input />
        </div>
      </div>
    </div>
  )
}
