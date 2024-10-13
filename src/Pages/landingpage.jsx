import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import companies from "../data/companies.json";
import faq from "../data/faq.json";
const LandingPage = () => {
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20 ">
      <section className="text-center">
        <h1 className="flex flex-col justify-center items-center text-4xl lg:text-6xl font-extrabold gradient-title">
          Find your dream job
          <span className="flex items-center gap-4">
            and get
            <img src="/logo.png" alt="" className="h-14 sm:h-24 lg:h-32" />
          </span>
        </h1>
        <p className="text-gray-300 sm:mt-4 text-xs sm:text-xl">
          Explore thousands of job listings or find the perfect candidate
        </p>
      </section>

      {/* buttons*/}
      <div className="flex justify-center gap-6">
        <Link to={"/jobs"}>
          <Button variant="blue" size="xl">
            Find Jobs
          </Button>
        </Link>
        <Link to={"/post-job"}>
          <Button variant="destructive" size="xl">
            Post a Jobs
          </Button>
        </Link>
      </div>
      {/* carousel  */}
      <div>
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-full py-10 "
        >
          <CarouselContent className="flex gap-5 sm:gap-20 items-center">
            {companies.map(({ name, id, path }) => {
              return (
                <CarouselItem key={id} className="basis-1/3 lg:basis-1/6">
                  <img
                    src={path}
                    alt={name}
                    className="h-9 sm:h-14 object-contain"
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>

      {/* cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 px-10 ">
        <Card>
          <CardHeader>
            <CardTitle>For Job seekers</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Search and apply for jobs, track applications and more</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>For Employeers</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Post Jobs, manage applications, and find the best candidates.</p>
          </CardContent>
        </Card>
      </section>

      {/* FAQ's Accordian */}

      <div>
        <Accordion type="single" collapsible className="w-full">
        {faq.map(({ question, answer }, index) => {
            return (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger>{question}</AccordionTrigger>
                <AccordionContent>{answer} </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </main>
  );
};

export default LandingPage;
