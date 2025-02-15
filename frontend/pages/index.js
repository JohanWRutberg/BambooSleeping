import useFetchData from "@/hooks/useFetchData";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
/* import { FaInstagram, FaPinterest, FaFacebook } from "react-icons/fa"; */
import { LuBedDouble } from "react-icons/lu";
import { GiPillow } from "react-icons/gi";
import { TbStars } from "react-icons/tb";
import { GiNightSleep, GiBamboo } from "react-icons/gi";
import { FaInstagram, FaPinterestP } from "react-icons/fa6";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1); // Page number
  const [perPage] = useState(8); // Number of blogs per page

  const { alldata, loading } = useFetchData("/api/getblog");

  // Function to handle page change
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastblog = currentPage * perPage;
  const indexOfFirstblog = indexOfLastblog - perPage;
  const currentBlogs = alldata.slice(indexOfFirstblog, indexOfLastblog);

  const allblog = alldata.length;

  // Filter published blogs from all blogs
  const publishedblogs = alldata.filter((ab) => ab.status === "publish");

  const totalPublishedBlogs = publishedblogs.length;

  // Paginate based on published blogs count
  const totalPages = Math.ceil(totalPublishedBlogs / perPage);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  function extractFirstImageUrl(markdownContent) {
    if (!markdownContent || typeof markdownContent !== "string") {
      return null;
    }
    const regex = /!\[.*?\]\((.*?)\)/;
    const match = markdownContent.match(regex);
    return match ? match[1] : null;
  }

  function removeSpecialCharacters(text) {
    return text.replace(/[^a-zA-Z0-9\s]/g, "");
  }

  function getFirstWords(text) {
    if (!text) return "";
    const cleanedText = removeSpecialCharacters(text);
    const words = cleanedText.split(" ");
    return words.slice(0, 30).join(" ") + "...";
  }

  return (
    <>
      <Head>
        <title>Bamboo Sleeping</title>
        <meta
          name="description"
          content="BambooSleeping: Discover luxurious, eco-friendly bamboo pillows and bedding. Experience unmatched comfort, breathability, and sustainability in every product."
        />
        <meta
          name="keywords"
          content="bamboo pillows, bamboo bedding, eco-friendly bedding, breathable pillows, sustainable fabric, bamboo duvet covers, bamboo pillowcases, luxury bamboo sheets, cooling bamboo bedding"
        />
        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://www.bamboosleeping.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Bamboo Sleeping Blog" />
        <meta
          property="og:description"
          content="BambooSleeping: Discover luxurious, eco-friendly bamboo pillows and bedding. Experience unmatched comfort, breathability, and sustainability in every product."
        />
        <meta property="og:image" content="https://bamboosleeping.com" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="bamboosleeping.com" />
        <meta property="twitter:url" content="https://www.bamboosleeping.com/" />
        <meta name="twitter:title" content="Bamboo Sleeping" />
        <meta
          name="twitter:description"
          content="BambooSleeping: Discover luxurious, eco-friendly bamboo pillows and bedding. Experience unmatched comfort, breathability, and sustainability in every product."
        />
        <meta name="twitter:image" content="https://bamboosleeping.com"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="header_data_section">
        <Image
          src="/img/BambooSleeping_g.jpeg"
          alt="Background"
          height={1632}
          width={2912}
          className="background-image opacity-90"
        />
        <div className="header-container flex flex-sb w-100">
          <div className="leftheader_info">
            <h1 data-aos="fade-right">
              <span>Bamboo </span>Sleeping<span>.</span> <br />
            </h1>
            <h3 data-aos="fade-right">Your bamboo bedding expert</h3>
            <div className="flex gap-2">
              <Link href="/contact">
                <button>Contact</button>
              </Link>
              <Link href="/about">
                <button>About</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="main_blog_section">
        <div className="right-container flex flex-sb flex-start flex-wrap">
          <div className="leftblog_sec">
            <h2>Recently Published</h2>
            <div className="blogs_sec">
              {loading ? (
                <div className="wh-100 flex flex-center mt-2 pb-5">
                  <div className="loader"></div>
                </div>
              ) : (
                <>
                  {publishedblogs.slice(indexOfFirstblog, indexOfLastblog).map((blog) => {
                    const firstImageUrl = extractFirstImageUrl(blog.description);
                    return (
                      <div className="blog flex" key={blog._id}>
                        <div className="blogimg">
                          <Link href={`/blog/${blog.slug}`}>
                            <Image
                              src={firstImageUrl || "/img/noimage.jpg"}
                              alt={blog.title}
                              width={800}
                              height={600}
                            />
                          </Link>
                        </div>
                        <div className="bloginfo">
                          <Link href={`/tag/${blog.tags[0]}`}>
                            <div className="blogtag">{blog.tags[0]}</div>
                          </Link>
                          <Link href={`/blog/${blog.slug}`}>
                            <h3>{blog.title}</h3>
                          </Link>
                          <p>{getFirstWords(blog.description)}</p>
                          <div className="blogauthor flex gap-1">
                            <div className="blogaimg">
                              <Image
                                className="logo"
                                src="/img/Logo/Bamboo_logo_twogreen.png"
                                width={50}
                                height={50}
                                alt="logo"
                              />
                            </div>
                            <div className="flex flex-col flex-left gap-05">
                              <h4>Bamboo Sleeping</h4>
                              <span>
                                {new Date(blog.createdAt).toLocaleDateString("en-US", {
                                  month: "long",
                                  day: "numeric",
                                  year: "numeric"
                                })}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </>
              )}
            </div>

            {/* Pagination */}
            <div className="blogpagination">
              <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
                Previous
              </button>
              {pageNumbers.map((number) => (
                <button
                  key={number}
                  onClick={() => paginate(number)}
                  className={currentPage === number ? "active" : ""}
                >
                  {number}
                </button>
              ))}
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages || publishedblogs.length < perPage}
              >
                Next
              </button>
            </div>
          </div>
          <div className="rightblog_info">
            <div className="topics_sec">
              <h2>Topics</h2>
              <div className="topics_list">
                <Link href="/topics/pillows">
                  <div className="topics">
                    <div className="flex flex-center topics_svg">
                      <GiPillow />
                    </div>
                    <h3>Pillows</h3>
                  </div>
                </Link>
                <Link href="/topics/bedding">
                  <div className="topics">
                    <div className="flex flex-center topics_svg">
                      <LuBedDouble />
                    </div>
                    <h3>Bedding</h3>
                  </div>
                </Link>
                <Link href="/topics/comfort">
                  <div className="topics">
                    <div className="flex flex-center topics_svg">
                      <GiBamboo />
                    </div>
                    <h3>Comfort</h3>
                  </div>
                </Link>
                <Link href="/topics/sleep">
                  <div className="topics">
                    <div className="flex flex-center topics_svg">
                      <GiNightSleep />
                    </div>
                    <h3>Sleep</h3>
                  </div>
                </Link>
                <Link href="/topics/quality">
                  <div className="topics">
                    <div className="flex flex-center topics_svg">
                      <TbStars />
                    </div>
                    <h3>Quality</h3>
                  </div>
                </Link>
              </div>
            </div>
            <div className="tags_sec mt-3">
              <h2>Tags</h2>
              <div className="tags_list">
                <Link href="/tag/bamboo">#Bamboo</Link>
                <Link href="/tag/bedding">#Bedding</Link>
                <Link href="/tag/breathable">#Breathable</Link>
                <Link href="/tag/comfort">#Comfort</Link>
                <Link href="/tag/ecofriendly">#Ecofriendly</Link>
                <Link href="/tag/luxury">#Luxury</Link>
                <Link href="/tag/organic">#Organic</Link>
                <Link href="/tag/pillows">#Pillows</Link>
                <Link href="/tag/relaxation">#Relaxation</Link>
                <Link href="/tag/sustainable">#Sustainable</Link>

                {/* Add other tags */}
              </div>
            </div>
            <div className="letstalk_sec mt-3">
              <h2>Let's Talk</h2>
              <div className="talk_sec">
                <h4 className="text-center">
                  Visit our social media platforms and share your experience with vehicle tents!
                </h4>
                <div className="social_talks flex flex-center gap-1 mt-2">
                  <div className="st_icon">
                    <Link href="https://www.instagram.com/bamboosleeping" target="_blank">
                      <FaInstagram style={{ color: "#de3fac", fontSize: "30px" }} />
                    </Link>
                  </div>
                  <div className="st_icon">
                    <Link href="https://se.pinterest.com/bamboosleeping/" target="_blank">
                      <FaPinterestP style={{ color: "#e60023", fontSize: "30px" }} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
