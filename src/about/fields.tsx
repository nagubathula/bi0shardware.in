import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
const FIELDS = [
  {
    name: "Embedded Systems",
    icon: "/icons/embedded.svg",
  },
  {
    name: "Firmware Analysis",
    icon: "/icons/firmware.svg",
  },
  {
    name: "Wireless Security",
    icon: "/icons/wireless.svg",
  },
  {
    name: "Automotive Security",
    icon: "/icons/automotive.svg",
  },
  {
    name: "ICS / SCADA",
    icon: "/icons/scada.svg",
  },
  {
    name: "Microarchitecture Analysis",
    icon: "/icons/micro.svg",
  },
];
const Fieldscardsection = styled("div")`
  p {
    color: ${({ theme }) => (theme.isDarkTheme ? "#AAA" : "#333")};
    b {
      color: ${({ theme }) => (theme.isDarkTheme ? "#FFF" : "#000")};
      opacity: 1 !important;
    }
  }
`;
const HeaderSection = styled.header`
  min-height: 15vh;
  display: flex;
  align-items: center;
  padding: 1rem;
  h1 {
    line-height: 1.35;
  }
`;
const FieldsofResearch = () => (
  <HeaderSection>
    <div className="grid ">
      <div>
        <h1 className="font-bold font-Anton highlight text-center text-3xl md:text-3xl lg:text-4xl xl:text-5xl mb-6">
          Our Fields of Research{" "}
        </h1>
      </div>
      <Fieldscardsection
        className="flex justify-between mx-0 my-4 "
        style={{ justifyContent: "center" }}
      >
        {FIELDS.map((f) => (
          <div
            className="w-full py-8 mx-4 my-4 text-center"
            style={{ justifyContent: "center" }}
            key={f.name}
          >
            <div>
              <Image
                className="stroke-white icons"
                src={f.icon}
                width={50}
                height={50}
                alt="icon"
              />
            </div>
            <div className="w-full text-md md:text-3xl lg:text-2xl mb-4">
              {f.name}
            </div>
            {/* <p style={{ width: "350px", maxWidth: "100%" }}>{f.desc}</p> */}
          </div>
        ))}
      </Fieldscardsection>
    </div>
  </HeaderSection>
);

export default FieldsofResearch;
