import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "../components/navbar/NavBar";
import ContentPage from "@/components/ContentPage/ContentPage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (

    <div className={` w-screen h-screen overflow-y-hidden ${inter.className} relative`}>
      <NavBar />
      <ContentPage />
    </div>
  );
}
