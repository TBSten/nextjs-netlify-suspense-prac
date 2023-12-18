import { sleep } from "../util/sleep"
import {headers} from "next/headers"

const getItems = async ()=>{
  await sleep(3000)
  console.log(Array.from(headers().entries()))
  return [
    { id: "test-1", name: "chocolate" },
    { id: "test-2", name: "rice ball" },
  ]
}

export const ItemList = async ()=>{
  const items = await getItems()
  return (
    <ul>
      {items.map(item=>
        <li key={item.id}>
          {item.name}
        </li>
      )}
    </ul>
  )
}
