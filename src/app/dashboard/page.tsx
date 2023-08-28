import Card from '@/components/Card'
import DetailsToday from '@/components/DetailsToday'
import NextDays from '@/components/NextDays'

export default function Dashboard() {
  return (
    <div className="mobile1:gap-3 mobile1:p-2 flex h-full w-full justify-center gap-4 p-6  pb-4 tablet2:flex-col tablet2:items-center">
      <Card />
      <div className="mobile1:gap-3 relative flex h-full flex-col items-center gap-4 desktop1:w-full">
        <DetailsToday />
        <NextDays />
      </div>
    </div>
  )
}
