import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => (
    <footer className="flex flex-wrap py-8">
        <div className="w-100 md:w-1/2 flex items-center text-center md:text-left justify-center md:justify-start p-2 text-sm opacity-80">
            &copy; Team bi0s Hardware {new Date().getFullYear()}. All rights reserved.
        </div>
        <div className="w-100 md:w-1/2 p-2 flex justify-center md:justify-end items-center">
            {/* <Link passHref href="https://ctftime.org/team/662">
                <a className="mr-2" target="_blank" rel="nofollow noreferrer">
                    <Image className="cursor-pointer filter-none" alt="CTFTime Profile" src="/ctftime.svg" width={90} height={45} />
                </a>
            </Link> */}
            <Link href="mailto:contact@bi0shardware.com" passHref>
                <a className="mr-4">
                    <Image className="icons" alt="Email Address" src="/icons/mail.svg" width={24} height={24} />
                </a>
            </Link>
            <Link href="https://twitter.com/bi0sHardware" passHref>
                <a className="mr-4">
                    <Image className="icons" alt="Twitter" src="/icons/twitter.svg" width={22} height={22} />
                </a>
            </Link>
            <Link href="https://github.com/bi0shardware" passHref>
                <a className="mr-4">
                    <Image className="icons" alt="GitHub" src="/icons/github.svg" width={22} height={22} />
                </a>
            </Link>
            <Link href="https://linkedin.com/company/bi0sHardware" passHref>
                <a>
                    <Image className="icons"alt="LinkedIn" src="/icons/linkedin.svg" width={24} height={24} />
                </a>
            </Link>
        </div>
    </footer>
);

export default Footer;