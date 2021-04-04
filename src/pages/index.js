import React from "react";
import HeroSection from "./../components/HeroSection";
import TestimonialsSection from "./../components/TestimonialsSection";
import NewsletterSection from "./../components/NewsletterSection";
import CtaSection from "./../components/CtaSection";

function IndexPage(props) {
  return (
    <>
      <HeroSection
        bgColor="primary"
        size="large"
        bgImage="https://pbs.twimg.com/profile_banners/1538665656/1591966420/1500x500"
        bgImageOpacity={0.3}
        title="SalmanMKC"
        subtitle="Cloud Solution Architect Intern at Microsoft"
        buttonText="Subscribe"
        buttonColor="default"
        buttonPath="https://bit.ly/salmanmkc"
      />
      <TestimonialsSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Here's what people are saying"
        subtitle=""
      />
      <NewsletterSection
        bgColor="light"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Stay in the know"
        subtitle="Receive our latest articles and feature updates"
        buttonText="Subscribe"
        buttonColor="primary"
        inputPlaceholder="Enter your email"
        subscribedMessage="You are now subscribed!"
      />
      <CtaSection
        bgColor="primary"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Get connected?"
        subtitle=""
        buttonText="Yes"
        buttonColor="default"
        buttonPath="/pricing"
      />
    </>
  );
}

export default IndexPage;
