import { sleep } from "../util/sleep"

const getItems = async ()=>{
  await sleep(3000)
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
