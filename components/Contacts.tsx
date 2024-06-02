import Image from "next/image";
import logo from "../assets/images/logo.svg";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";

const Contacts = () => {
    return (
        <div className="space-y-20 container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
                {/* conatcts */}
                <div className="flex flex-col gap-4">
                    <div className="flex gap-2 items-end">
                        <Image width={30} src={logo} alt="logo" />
                        <h2 className="font-ClashDisplaySemibold text-3xl relative">
                            uifry
                            <span className="text-[6px] absolute -right-[12px] bottom-[8px]">
                                TM
                            </span>
                        </h2>
                    </div>

                    <div className="flex items-center gap-2">
                        <IoMdMail className="text-ascent size-6" />
                        <span>help@example.com</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <FaPhoneAlt className="text-ascent size-6" />
                        <span>+91 123 456 7890</span>
                    </div>
                </div>

                {/* links */}
                <div className="flex flex-col gap-4">
                    <h4 className="text-2xl font-ClashDisplaySemibold">
                        Links
                    </h4>
                    <Link href={"#hero"}>Home</Link>
                    <Link href={"#aboutus"}>About Us</Link>
                    <Link href={"#pricing"}>Pricing</Link>
                    <Link href={"#features"}>Features</Link>
                </div>

                {/* legals */}
                <div className="flex flex-col gap-4">
                    <h4 className="text-2xl font-ClashDisplaySemibold">
                        Legal
                    </h4>
                    <span>Terms of Use</span>
                    <span>Privacy Policy</span>
                    <span>Cookie Policy</span>
                </div>

                {/* products */}
                <div className="flex flex-col gap-4">
                    <h4 className="text-2xl font-ClashDisplaySemibold">
                        Products
                    </h4>
                    <span>Take Tour</span>
                    <span>Live Chat</span>
                    <span>Reviews</span>
                </div>

                {/* newsletters */}
                <div className="flex flex-col gap-4 col-span-2 xl:col-span-1">
                    <h4 className="text-2xl font-ClashDisplaySemibold">
                        Legal
                    </h4>
                    <span>Stay Up To Date</span>
                    <form className="flex md:items-center w-full flex-col md:flex-row">
                        <input
                            type="text"
                            placeholder="Your Email"
                            className="bg-black/10 dark:bg-white/10 px-4 h-10 md:h-12 w-full placeholder:text-black/40 dark:placeholder:text-white/40 focus:outline-none"
                        />
                        <button
                            className="h-10 md:h-12 w-fit px-4 bg-black text-white dark:bg-white dark:text-black flex gap-2 justify-center items-center"
                            type="submit"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            <div className="w-full text-center opacity-70">
                Copyright © 2024
            </div>
        </div>
    );
};

export default Contacts;
