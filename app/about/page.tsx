"use client";
import React from "react";
import Container from "../components/Container";
import Abouts from "../components/sections/Abouts";
import Skills from "../components/sections/Skills";
import SkillCard from "../components/cards/SkillCard";
import Section from "../components/sections/Section";
const page = () => {
  return (
    <Container title="about-me" description="Who am i?">
      <Section>
        <Abouts />
      </Section>
      <Section label="skills">
        <Skills>
          <SkillCard title="languages" />
          <SkillCard title="Databases" />
          <SkillCard title="Other" />
          <SkillCard title="Tools" />
          <SkillCard title="Frameworks" />
        </Skills>
      </Section>
    </Container>
  );
};

export default page;
