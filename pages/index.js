import Image from "next/image";
import Countdown from "react-countdown";
import CountdownTimer from "./component/countdownTimer";
import Tsetseg from "../public/tsetseg.png";
import { Calendar, Clock, MapPin } from "@phosphor-icons/react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="relative">
        <Image
          className="border rounded-sm"
          src="/images/12.jpg"
          width={400}
          height={400}
        />
        <div className="absolute image-text-style">Алтынбек & Майра</div>
      </div>
      <div className="top-20"></div>
      <div>
        <CountdownTimer />
      </div>
      <div className="top-20"></div>
      <div className="relative">
        <Image
          className="border rounded-sm"
          src="/images/1.jpg"
          width={400}
          height={400}
        />
        <div className="absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center bg-[#0000003b]">
          <Link href="/list" className="flex flex-col items-center ">
            <span className="link-text">Барлық</span>
            <span className="link-text">суреттерді</span>
            <span className="link-text">көру</span>
          </Link>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="flex items-center justify-center">
        <div className="home-card relative flex justify-center items-center">
          <Image className="absolute -top-10" src={Tsetseg} width={250} />
          <div className="card-text flex flex-col gap-y-2 items-center pt-12">
            <span className="text-style text-3xl">Тойға шақыру</span>
            <div className="flex flex-col items-center">
              <span className="name-style">Алтынбек</span>
              <span className="name-style">&</span>
              <span className="name-style">Майра</span>
            </div>
            <div className="flex gap-x-2 items-center">
              <Calendar size={20} color="#000000" />
              <span>2024-07-15 19:00</span>
            </div>
            <div className="flex gap-x-2 items-center">
              <MapPin size={20} color="#000000" />
              <span>Дэлүүн сұмыны Султан тойханасы</span>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}
