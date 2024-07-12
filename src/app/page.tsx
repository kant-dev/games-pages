import Navbar from "@/components/Navbar";
// import Image from "next/image";

// import Joystick from '@/assets/svgs/Joystick'

export default function Home() {
  return (
    <main className="flex justify-center  h-[70vh] w-[100%]">
      <div className=" w-2/4 mt-5 text-center flex flex-col items-center">
        <h2 className="text-8xl">Game Pages</h2>
        <p className="text-2xl">
          This is a simple games page, where you can find some to play with friends. We will be making a variety of games available over time.
        </p>
        {/* <Image src={Joystick} alt="joystick" className="text-white w-8/12"/> */}
      </div>
      
      <Navbar/>
    </main>
  )
}
