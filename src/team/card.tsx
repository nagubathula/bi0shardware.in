import Link from "next/link";
import Image from "next/image";
import React from "react";
import { ClassNames } from "@emotion/react";

const MemberCard = ({ firstname, lastname, username = null, category = null, affiliation = null, linkedin = null, twitter = null, email = null }) => (

    <div className="w-100 sm:w-1/2 lg:w-1/3 p-3">
        <Image className="w-100 rounded-xl" alt="Person Image" src="/test.jpg" width={220} height={180}/>
        {/* {username && <div className="text-2xl text-center ">{username}</div>} */}
        <div className={`mb-1 opacity-90 uppercase text-center ${!(username?.length > 0) ? 'text-xl' : null}`}>
            <span className="font-semibold ">{firstname}</span>
            {' '}{lastname}
        </div>

        {category && <div className="text-sm opacity-80 text-center">{category}</div>}
        {affiliation && <div className="text-sm opacity-80 text-center">{affiliation}</div>}
        {/* <div className="flex items-center opacity-75 mt-3">
            {twitter && (
                <Link href={`https://www.twitter.com/${twitter}`} passHref>
                    <a className="mr-2">
                        <Image alt="Twitter Profile" src="/icons/twitter.svg" width={22} height={22} />
                    </a>
                </Link>
            )}
            {linkedin && (
                <Link href={`https://www.linkedin.com/in/${linkedin}`} passHref>
                    <a className="mr-2">
                        <Image alt="LinkedIn Profile" src="/icons/linkedin.svg" width={20} height={20} />
                    </a>
                </Link>
            )}
            {email && (
                <Link href={`mailto:${email}`} passHref>
                    <a>
                        <Image alt="Email Address" src="/icons/mail.svg" width={24} height={24} />
                    </a>
                </Link>
            )}
        </div> */}
    </div>
);

export default MemberCard;
