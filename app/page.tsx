"use client";

import { Card } from "@/components/ui/card";
import { FiPlusCircle } from "react-icons/fi";
import { CgMoreO } from "react-icons/cg";
import { IoPlayCircle } from "react-icons/io5";
import { BiSkipNext } from "react-icons/bi";
import { BiSkipPrevious } from "react-icons/bi";
import { RiShuffleLine } from "react-icons/ri";
import { RiRepeatOneFill } from "react-icons/ri";
import Image from "next/image";
import PfamCover from "./Image/pfamcover.jpg";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen">
      <Card className="w-[370px] h-screen max-h-[650px]  bg-slate-500">
        {/* Horizontal Line */}
        <div className="flex justify-center items-center pt-4">
          <div className="border border-slate-300 h-[6px] bg-slate-300 rounded-lg w-[70px]"></div>
        </div>

        <div className="flex flex-col w-full items-center">
          <div>
            <p className="pt-8 font-arial text-[12px] text-white">
              Liked Songs
            </p>

            <Card className="w-[300px] h-[300px] mt-4 rounded-lg flex justify-center items-center">
              {/* <Image
                src={PfamCover}
                width={290}
                height={290}
                alt="perfect-fam album cover"
              /> */}
            </Card>
          </div>
        </div>

        <div className="flex flex-row w-full pt-9 items-center justify-between px-8">
          <div>
            <p className="font-helveticaBold text-[16px] text-white line">
              Darryl Billy Joe
            </p>
            <p className="font-helveticaBold leading-[15px] text-[12px] font-bold text-white opacity-75">
              Cup ni Joe
            </p>
          </div>
          <div className="flex flex-row gap-2">
            <FiPlusCircle color="white" size={18} />
            <CgMoreO color="white" size={18} />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="bg-slate-200 h-1  w-[300px] mt-9 opacity-65 rounded-lg"></div>
        </div>

        <div className="flex items-center justify-center w-full mt-5 gap-6">
          <RiShuffleLine color="#90EE90" size={20} />
          <BiSkipPrevious color="white" size={64} />
          <button>
            <IoPlayCircle color="white" size={64} />
          </button>
          <BiSkipNext color="white" size={64} />
          <RiRepeatOneFill color="white" size={20} />
        </div>
      </Card>
    </main>
  );
}
