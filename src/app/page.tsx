import { Suspense } from "react";
import { ItemList } from "./ItemList";

export default function Home() {
  return (
    <main>
      Hello Sample Page !

      <div>
        <Suspense fallback={"..."}>
          <ItemList/>
        </Suspense>
      </div>

      <div>
        <Suspense fallback={"..."}>
          <ItemList/>
        </Suspense>
      </div>

    </main>
  )
}
