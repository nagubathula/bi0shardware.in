import React from "react"
import styled from "@emotion/styled";
import Link from "next/link";
import Image from "next/image";


const HeaderSection = styled.header`
    min-height: 15vh;
    display: flex;
    align-items: center;
    padding: 1rem;
    h1 {
      line-height: 1.35;
    }
    p {
      width: 600px;
      max-width: 100%;
    }
    a {
      border: 2px solid ${({theme}) => theme.text};
      padding: 0.5rem 1rem;
      font-size: 1.25rem;
      &:hover {
        background: ${({theme}) => theme.text};
        color: ${({theme}) => theme.background};
      }
    }
    .row{
        display:flex;
        flex-direction:row;
        // align-items: center;
        // justify-content: center;
    }
`;
const AboutUs = () => (
    <HeaderSection>
        <div style={{ maxWidth: '100%' }}>
            <h1 className="font-bold text-center text-3xl md:text-3xl lg:text-4xl xl:text-5xl mb-6">
                About Us{' '}
            </h1>
            <div className="row">
            <div className="text-center">
            <p >
                We are a team of college students from Amrita university, passionate about cyber security, and dedicated to
                protect tommorow&apos;s cyberspace. At our student-run club, our mentors train freshers in cyber-security through
                CTFs. We organize infosec events, trainings, and work on a wide variety of cyber-security research projects.
            </p>
            {/* <div className="py-6 block md:flex mx-0 gap-3">
                <div className="py-3">
                    <Link href="/about">
                        Learn More
                    </Link>
                </div>
                
            </div> */}
            </div>
            <div><Image className="mb-6" alt="aboutbi0shardware" src="/achievements/test.jpg" width={450} height={350}/></div>
            
            </div>
            {/* <div className="py-6 block md:flex mx-0 gap-3">
                <div className="py-3">
                    <Link href="/about">
                        Learn More
                    </Link>
                </div>
                
            </div> */}
        </div>
    </HeaderSection>
);

export default AboutUs;