import { useState } from "react"
import { trending } from "../../dummyData"
import { Home } from "../homes/Home"

export const Trending = () => {
  const [items, setItems] = useState(trending)
  return (
    <>
    <section className="trending mt-20 text-white">
      <Home items={items} />
    </section>
    </>
  )
}
