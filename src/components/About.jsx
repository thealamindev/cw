import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Image from "./Image";
import model from "../assets/model.png";

const About = () => {
  return (
    <>
      <section id="about">
      <div className="py-4 bg-[#F3F4F6]">
        <Container>
          <h3 className="text-3xl font-bold text-center text-black pb-[60px]">
            About Us
          </h3>
          <Flex className={"justify-between items-center"}>
            <div className="w-[45%]">
              <Image imgSrc={model} className={"w-full rounded-4xl"}/>
            </div>
            <div className="w-[50%]">
              <p className="text-[#374151] text-[16px] leading-7 mb-4">
                Amazer is a leading educational platform committed to empowering
                students through high-quality academic and admission coaching.
                Popularly known as Chemistry Walah, we specialize in core
                science subjects—Chemistry, ICT, Mathematics, and
                Physics—designed for both board-level education and competitive
                university entrance exams. Our team consists of passionate,
                experienced educators who bring clarity, confidence, and a
                problem-solving mindset to every class. At Amazer, we believe in
                structured learning, personalized guidance, and consistent
                practice—ensuring that every student understands, applies, and
                masters the concepts. Whether you’re aiming for top grades or
                securing a spot in a prestigious university, Amazer stands by
                you as a trusted academic companion. We don’t just teach—we
                mentor, inspire, and help you unlock your full potential.
              </p>
              <h3 className="text-2xl font-bold text-[#111827] mb-4">
                Who we are
              </h3>
              <p className="text-[#374151] text-[16px] leading-7">
                We are a team of passionate individuals dedicated to providing
                the best solutions for our customers. Our mission is to deliver
                high-quality products and services that exceed expectations.
              </p>
              <h3 className="text-2xl font-bold text-[#111827] mt-6 mb-4">
                Our Vision
              </h3>
              <p className="text-[#374151] text-[16px] leading-7">
                Our vision is to be a leader in our industry, known for our
                innovation, quality, and customer satisfaction. We strive to
                create a positive impact on the communities we serve.
              </p>
            </div>
          </Flex>
        </Container>
      </div>
      </section>
    </>
  );
};

export default About;
