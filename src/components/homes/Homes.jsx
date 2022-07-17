import { useState } from 'react'
import { homeData } from '../../dummyData'
import { Home } from './Home'

export const Homes = () => {
  const [items, setItems] = useState(homeData)

  return (
    <div>
      <section className="relative w-[100vw] text-white">
        <Home items={items} />
      </section>
    </div>
  )
}

export default Homes
