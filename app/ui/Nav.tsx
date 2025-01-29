'use client'

import { rufina } from "../lib/fonts";
import LinkLi from "../components/LinkLi";
import Image from "next/image";
import ShopIcon from '@/public/svg/ShopIcon.svg'
import { IoMenu } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import { CgClose } from "react-icons/cg";

function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    function handleNav() {
        setIsMenuOpen((prev) => !prev)
    }

    const navRef = useRef<HTMLDivElement>(null)

    function handleClickOutside(e: MouseEvent) {
        if (navRef.current && !navRef.current.contains(e.target as Node)) {
            setIsMenuOpen(false)
        }
    }

    useEffect(() => {
        if (isMenuOpen) {
            document.addEventListener('click', handleClickOutside)
        }

        return () => document.removeEventListener('click', handleClickOutside)
    }, [isMenuOpen])

  return (
    <nav className="w-full h-20 p-10 md:px-20 py-4 bg-lime mx-auto" ref={navRef}>
      <div className="flex items-center justify-between text-greenDark">
        <h1 className={`${rufina.className} text-4xl`}>Rivo</h1>
        <div className="hidden md:flex items-center justify-between min-w-[55%] ">
          <ul className="hidden md:flex items-center justify-center gap-8 px-8">
            <LinkLi href={"/"} li={"HOME"} />
            <LinkLi href={"/"} li={"SHOP"} />
            <LinkLi href={"/"} li={"FEATURES"} />
            <LinkLi href={"/"} li={"CONTACT"} />
          </ul>
          <div className="flex items-center justify-center gap-8">
            <button className="w-max h-max">
              <Image className="mt-3" src={ShopIcon} alt="Cart" />
            </button>
            <button className="bg-transparent border-greenDark border-2 rounded px-8 py-2 font-bold">
              LOGIN
            </button>
          </div>
        </div>
        <button
          className="md:hidden cursor-pointer space-y-1"
          onClick={handleNav}
        >
          <IoMenu className="text-3xl" />
        </button>
      </div>
      <div
        className={`${
          isMenuOpen
            ? "fixed left-0 top-0 w-[40%] md:hidden h-screen bg-lime ease-in duration-300 p-10"
            : "fixed -left-[100%] top-0 bottom-0 p-10 ease-in duration-300"
        }`}
      >
        <div className="flex w-full items-center justify-end relative">
          <button className="text-3xl cursor-pointer hover:text-red-500 transition-colors duration-200" onClick={handleNav}>
            <CgClose />
          </button>
        </div>
        <ul className="flex flex-col md:hidden items-center justify-center gap-8 px-8 text-greenDark py-8">
          <LinkLi href={"/"} li={"HOME"} />
          <LinkLi href={"/"} li={"SHOP"} />
          <LinkLi href={"/"} li={"FEATURES"} />
          <LinkLi href={"/"} li={"CONTACT"} />
        </ul>
      </div>
    </nav>
  );
}

export default Nav
