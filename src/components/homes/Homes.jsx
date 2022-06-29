import { useState } from 'react'
import { homeData } from '../../dummyData'
import { Home } from './Home'

export const Homes = () => {
  const [items, setItems] = useState(homeData)

  return (
    <div className='h-[100vh]'>
      <section className="absolute top-0 left-0 w-[100%] h-[100vh] text-white">
        <Home items={items} />
      </section>
    </div>
  )
}

export default Homes
