import RandomLetter from "@/components/RandomLetter";

export default function Home() {
  return (
    <main className="flex justify-center  h-[70vh] w-[100%]">
      <div className=" w-1/4 mt-5">
        <RandomLetter />
      </div>
    </main>
  )
}
