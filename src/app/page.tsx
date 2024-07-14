import Navbar from "@/components/Navbar";
import { Icon } from "@mui/material";
import VideogameAssetOutlinedIcon from '@mui/icons-material/VideogameAssetOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';

export default function Home() {
  return (
    <main className="flex justify-center  h-[100vh] w-[100%]">
      <div className=" w-2/4 mt-[-5rem] text-center flex flex-wrap justify-center items-center">
        <h2 className="text-8xl">Game Pages</h2>
        <p className="text-4xl">
          This is a simple games page, where you can find some to play with friends. We will be making a variety of games available over time.
        </p>

        <div className="mt-[-8rem]">
          {/* <VideogameAssetOutlinedIcon className="text-[20rem]"/> */}
          <SportsEsportsOutlinedIcon className="text-[20rem]"/>
        </div>
      </div>
      
      <Navbar/>
    </main>
  )
}
