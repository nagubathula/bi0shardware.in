import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";

const AchievementCardSection = styled('div')`
  p {
    color: ${({theme}) => theme.isDarkTheme ? '#AAA' : '#333'};
    b {
      color: ${({theme}) => theme.isDarkTheme ? '#FFF' : '#000'};
      opacity: 1!important;
    }
  }
`;

const AchievementCard = ({ text, infoText = null, date = null, links = []}) => (
    <AchievementCardSection className="py-5 border-dashed border-opacity-60 border-b-2">
        <div className="flex items-center w-100 mb-6" style={{display:"flex", alignItems:"start", justifyContent:"center"}}>
                <div className="rounded-4 shadow-strong-4" ><Image alt="achievements" src="/achievements/test.jpg" width={450} height={300} /></div>
            </div>
        <div className="flex items-center opacity-80 mb-5">
        
            <div className="w-100 md:w-2/4">
                <h1 className="text-3xl font-bold">{infoText}</h1>
                
            </div>
            
        
        </div>
        <p className="my-3">{text}</p>
        {links?.length > 0 && (
            <div className="md:flex items-center text-sm mt-3">
                {links.map((s, index) => (
                    <a href={s.href} className="font-semibold opacity-70 hover:opacity-100 mr-2" key={`link_${index}`}>
                        {s.text} {'>'}
                    </a>
                ))}
            </div>
        )}
    </AchievementCardSection>
);

export default AchievementCard;