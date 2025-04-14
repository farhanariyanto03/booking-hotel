import Card from "@/component/card"

const Main = () => {
  return (
    <div className="max-w-screen-xl py-6 pb-20 px-4 mx-auto">
        <div className="grid grid-cols-7 md:grid-cols-2 lg:grid-cols-3 gap-7">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </div>
  )
}

export default Main
