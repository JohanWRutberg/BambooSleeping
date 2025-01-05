import Head from "next/head";
import React from "react";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us | Bamboo Sleeping</title>
        <meta
          name="description"
          content="BambooSleeping: About us, Discover luxurious, eco-friendly bamboo pillows and bedding. Experience unmatched comfort, breathability, and sustainability in every product."
        />

        {/* Open Graph Metadata */}
        <meta property="og:title" content="About Us | Bamboo Sleeping" />
        <meta
          property="og:description"
          content="BambooSleeping: About us, Discover luxurious, eco-friendly bamboo pillows and bedding. Experience unmatched comfort, breathability, and sustainability in every product."
        />
        <meta property="og:image" content="/img/about-og-image.jpg" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Metadata */}
        <meta name="twitter:title" content="About Us | Bamboo Sleeping" />
        <meta
          name="twitter:description"
          content="BambooSleeping: About us, Discover luxurious, eco-friendly bamboo pillows and bedding. Experience unmatched comfort, breathability, and sustainability in every product."
        />
        <meta name="twitter:image" content="/img/about-og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main>
        <div className="slugpage">
          <div className="container">
            <div className="leftblog_data_markdown pb-5">
              <>
                <div className="w-100 blogcontent">
                  <h1>About us</h1>
                  <h2>Who we are and what we do</h2>
                  <p>
                    Welcome to <b>Bamboo Sleeping</b>, your trusted source for everything related to bamboo pillows,
                    bedding, and sustainable sleep solutions. Our mission is to help you discover the unparalleled
                    comfort and benefits of bamboo fabric, so you can create the restful, eco-friendly bedroom you
                    deserve.
                    <br />
                    At Bamboo Sleeping, we’re passionate about combining luxury with sustainability. Bamboo fabric is
                    not only soft and breathable but also naturally hypoallergenic and environmentally friendly—making
                    it the perfect choice for healthier sleep and a greener planet.
                    <br />
                    The team behind Bamboo Sleeping is united by a shared passion for adventure and expertise in their
                    fields: <br />
                    <br />
                    &#187; <b>Johan,</b> a software developer and test engineer, combines his technical expertise with a
                    keen interest in sustainable living to explore the world of bamboo-based sleep products. His
                    analytical approach ensures reliable advice and well-researched product recommendations to help you
                    make the best choices for your bedroom. <br />
                    <br />
                    &#187; <b>Pernilla,</b> a skilled writer and communication specialist, is passionate about sharing
                    the comfort and benefits of bamboo bedding. Her talent for storytelling brings clarity and warmth to
                    every article, making it easy for readers to discover how bamboo products can transform their sleep
                    experience. <br />
                    <br />
                    Through in-depth articles, product reviews, and practical tips, we aim to guide you in transforming
                    your sleep environment into a sanctuary of comfort and peace. Whether you're curious about the
                    benefits of bamboo bedding or looking for the perfect pillow to match your needs, we’ve got you
                    covered. <br />
                    <br />
                    Thank you for visiting Bamboo Sleeping. Together, let’s create a world where better sleep meets
                    sustainable living!
                  </p>
                </div>
              </>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
