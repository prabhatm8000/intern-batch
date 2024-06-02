"use client";
import Image from "next/image";
import logo from "../assets/images/logo.svg";
import Link from "next/link";
import ThemeBtn from "./ThemeBtn";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
    const [showNavItems, setShowNavItems] = useState<boolean>(false);
    const handleShowNavItemBtn = () => {
        setShowNavItems((prev) => !prev);
    };
    return (
        <div className="container mx-auto my-4 h-[60px] px-6 flex justify-between items-center gap-10">
            <div className="flex gap-2 items-end">
                <Image width={30} src={logo} alt="logo" />
                <h2 className="font-ClashDisplaySemibold text-3xl relative">
                    uifry
                    <span className="text-[6px] absolute -right-[12px] bottom-[8px]">
                        TM
                    </span>
                </h2>
            </div>

            <div className="relative flex items-center justify-end md:justify-between h-full flex-1">
                <div
                    className={`${
                        showNavItems ? "flex" : "hidden"
                    } bg-white/40 dark:bg-black/40 md:bg-transparent backdrop-blur-sm md:backdrop-blur-0 p-4 md:p-0 md:flex flex-col md:flex-row gap-4 text-xl absolute md:relative top-full md:top-0 right-0`}
                >
                    <Link href={"#hero"}>Home</Link>
                    <Link href={"#aboutus"}>About Us</Link>
                    <Link href={"#pricing"}>Pricing</Link>
                    <Link href={"#features"}>Features</Link>
                </div>
                {/* <button className="h-full px-12 py-0 rounded-md text-xl bg-black text-white dark:bg-white dark:text-black">
                    Download
                </button> */}
                <div className="flex items-center gap-2">
                    <ThemeBtn />
                    <button
                        onClick={handleShowNavItemBtn}
                        className={`md:hidden focus:outline-none `}
                    >
                        {showNavItems ? (
                            <IoClose className="size-6" />
                        ) : (
                            <RxHamburgerMenu className="size-6" />
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
