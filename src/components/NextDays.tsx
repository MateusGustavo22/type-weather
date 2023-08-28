import Day from './Day'

export default function NextDays() {
  return (
    <div className="flex h-max w-full max-w-[630px] flex-col gap-5 rounded-xl bg-base-gray-800 p-6 mobile2:p-4">
      <span className="font-nunito text-base text-base-gray-400 tablet2:hidden">
        Previsão para 5 dias
      </span>
      <div className="flex h-full w-full justify-center mobile2:pb-3 mobile2:pt-3 desktop2:justify-between">
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
      </div>
    </div>
  )
}
