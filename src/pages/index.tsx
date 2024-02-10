import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "../components/navbar/NavBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (

    <div className={`w-screen ${inter.className}`}>
      <NavBar />
    </div>
  );
}
