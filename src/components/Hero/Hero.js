import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi there, <br />I am Rahman Bakhishli
      </SectionTitle>
      <SectionText>
        Rahman is a Software Engineering Degree Apprentice with KPMG in London.
      </SectionText>
      <Button
        onClick={() =>
          (window.location = "https://www.linkedin.com/in/rahmanbakhishli/")
        }
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
