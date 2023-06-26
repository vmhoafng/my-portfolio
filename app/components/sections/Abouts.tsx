"use client";
import React from "react";
import Image from "next/image";
import Button from "@/app/components/Button";
import { TbArrowMoveRight } from "react-icons/tb";
import Link from "next/link";
import useHomePage from "@/app/hook/useHomePage";
const Abouts = () => {
  const isHomePage = useHomePage();
  return (
    <div className="flex justify-between relative">
      <div className="z-10 w-full lg:w-2/3">
        <div className="text-gray pb-4 lg:pb-7">
          <p>Hello, i&#39;m Hoang!</p>
          <br />
          <p>
            I&#39;m writing to express my enthusiasm for the
            <strong className="text-white"> Front-end Developer </strong>
            position available at Your Company. I believe this is an excellent
            opportunity for me to put what I&#39;ve learned as an
            <strong className="text-white"> Information Technology </strong>
            student at
            <strong className="text-white"> Sai Gon University </strong> to use.{" "}
          </p>
          <br />
          <p>
            With a strong interest in web development and growing knowledge of
            <strong className="text-white"> ReactJS </strong>and web design, I
            believe I would be an excellent addition to both the team and your
            organization as a whole. By participating in these organizations, I
            was able to demonstrate my
            <strong className="text-white">
              {" "}
              organizational and planning skills
            </strong>
            , as well as my
            <strong className="text-white"> problem-solving </strong>mindset,
            which I could effectively apply in the position of
            <strong className="text-white"> Front-end Developer</strong>. I also
            stood out as a student with strong research ability, which I honed
            through various courses and projects.
          </p>
        </div>
        {isHomePage && (
          <Link href="/about">
            <Button type="button">
              Read more
              <TbArrowMoveRight size={32} />
            </Button>
          </Link>
        )}
      </div>
      <div className="lg:relative lg:w-5/12 opacity-25 lg:opacity-50">
        <Image
          alt="avatar"
          src="/images/avatar.png"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Abouts;
