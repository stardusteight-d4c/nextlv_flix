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
      <Upcomming items={upcomeData} title="Próximos filmes" />
      <Upcomming items={latestData} title="Últimos filmes" />
      <Trending />
      <Upcomming items={recommendedData} title="Filmes recomendados" />
    </>
  )
}
