import React from "react";
import styled from "@emotion/styled";
import Layout from "../layout";
import IntroductionSection from "./intro";
import Testimonials from "./testimonials";
import WhatWeDoSection from "./what-we-do";
import HowItFunctions from "./how-it-functions";
import Teams from "./teams";
import FieldsofResearch from "./fields";
const HeaderSection = styled('section')`
  min-height: 2vmin;
  display: flex;
  align-items: center;
  padding: 5vh 1rem;
`;

const AboutPage = () => (
    <Layout title="About team bi0s - India's No.1 CTF Team & Cyber Security Research Club">
        <HeaderSection>
            <h1 className="font-Anton highlight font-bold text-3xl md:text-8xl lg:text-5xl xl:text-6xl">
                About BI0S-HARDWARE
            </h1>
        </HeaderSection>
        <div className="p-2">
            <IntroductionSection />
            <HowItFunctions />
            <WhatWeDoSection />
            <Teams />
            <Testimonials />
            <FieldsofResearch />
        </div>
    </Layout>
);

export default AboutPage;