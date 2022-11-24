import React from "react";
import styled from "@emotion/styled";

const HeaderSection = styled.header`
  min-height: 65vh;
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
    border: 2px solid ${({ theme }) => theme.text};
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    border-radius: 20px 0px 20px;
    &:hover {
      background: ${({ theme }) => theme.text};
      color: ${({ theme }) => theme.background};
      transform: ;
    }
  }
`;

const LandingHeader = () => (
  <HeaderSection>
    <div className="grid items-center text-center" style={{ maxWidth: "100%" }}>
      <div>
        <h1 className="font-bold text-3xl highlight md:text-3xl lg:text-4xl xl:text-5xl mb-6">
         bi0s-Hardware{" "}
          {/* <div className="inline md:inline-block">
            Cyber Security Research Club
          </div> */}
        </h1>
      </div>
      <div>
        <div className="">
          We are a team of college students from Amrita university, passionate
          about cyber security, and dedicated to protect tommorow&apos;s
          cyberspace. At our student-run club, our mentors train freshers in
          cyber-security through CTFs. We organize infosec events, trainings,
          and work on a wide variety of cyber-security research projects.
        </div>
        
      </div>
      <div className="py-6 block mx-0 gap-3">
          <div className="py-3">
            <a href="https://wired.ctf.eng.run/">Join Us</a>
          </div>
          {/* <div className="py-3">
                    <a href="https://rzp.io/l/freshers-workshop">
                        Register for Training
                    </a>
                </div> */}
        </div>
    </div>
  </HeaderSection>
);

export default LandingHeader;
