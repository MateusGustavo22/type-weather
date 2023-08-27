import Day from './Day'

export default function NextDays() {
  return (
    <div className="flex w-full max-w-[630px] flex-col gap-5 rounded-xl bg-base-gray-800 p-6 mobile:p-3">
      <span className="font-nunito text-base text-base-gray-400 mobile:hidden">
        Previsão para 5 dias
      </span>
      <div className="flex w-full justify-center">
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
      </div>
    </div>
  )
}
