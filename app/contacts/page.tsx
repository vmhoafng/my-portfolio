"use client";

import React from "react";
import Container from "../components/Container";
import Contacts from "../components/sections/Contacts";
import Section from "../components/sections/Section";
const page = () => {
  return (
    <Container title="contacts">
      <Section>
        <Contacts />
      </Section>
      <Section label="all-medias">
        <div className="flex gap-6"></div>
      </Section>
    </Container>
  );
};

export default page;
