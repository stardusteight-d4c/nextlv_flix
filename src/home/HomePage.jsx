import { useState } from 'react'
import { Homes } from '../components/homes/Homes'
import { Trending } from '../components/trending/Trending'
import { Upcomming } from '../components/upcomming/Upcomming'
import { latest, recommended, upcome } from '../dummyData'

export const HomePage = () => {
  const [upcomeData, setUpcomeData] = useState(upcome)
  const [latestData, setLatestData] = useState(latest)
  const [recommendedData, setRecommendedData] = useState(recommended)

  return (
    <>
      <Homes />
      <Upcomming items={upcomeData} title="Upcomming Movies" />
      <Upcomming items={latestData} title="Latest Movies" />
      <Trending />
      <Upcomming items={recommendedData} title="Recommended Movies" />
    </>
  )
}
