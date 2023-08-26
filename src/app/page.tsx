import Input from '@/components/Input'
import Image from 'next/image'
import logo_full from 'public/icons/logo-full.svg'

export default function Home() {
  return (
    <>
      <div className="absolute top-0 mt-12 flex w-full items-center justify-center">
        <Image src={logo_full} width={186} height={32} alt="Logo" />
      </div>
      <div className="absolute top-1/3 flex w-full max-w-[500px] flex-col items-center gap-[56px] p-4 mobile:top-1/4">
        <div className="flex w-full flex-col justify-center gap-2 ">
          <h1 className="font-poppins text-center text-3xl font-bold text-white mobile:text-xl">
            Boas vindas ao{' '}
            <strong className="text-blue_light">TypeWeather</strong>
          </h1>
          <span className="font-poppins text-center text-xl text-base-gray-200 mobile:text-sm">
            Escolha um local para ver a previsão do tempo
          </span>
        </div>
        <Input />
      </div>
    </>
  )
}
