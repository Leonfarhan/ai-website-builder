import {Button} from "@/components/ui/button";

function Home() {
  return(
      <div className="text-red-500 font-bold">
        Hello World
        <Button className="cursor-pointer" variant="destructive"> Click Here!</Button>
      </div>
  )
}

export default Home;