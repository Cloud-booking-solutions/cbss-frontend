import Layout from '../../components/Layout';

const OtherMarketing = () => {
  return (
    <Layout>
      <div className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Other Marketing Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Additional marketing solutions to complement your overall strategy
            </p>
          </div>

          {/* First section - content left, image right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Comprehensive Marketing Solutions</h2>
              <h3 className="font-bold text-xl lg:text-2xl">A. Pay-Per-Click(PPC)</h3>

              <p className="mt-5 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
                Pay-per-click (PPC) is an internet advertising model used to drive
                traffic to websites, in which an advertiser pays a publisher
                (typically a search engine, website owner, or a network of websites)
                when the ad is clicked.
              </p>
              <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
                Pay-per-click is usually associated with first-tier search engines
                (such as Google Ads, Amazon Advertising, and Microsoft Advertising
                formerly Bing Ads). With search engines, advertisers typically bid
                on keyword phrases relevant to their target market and pay when ads
                (text-based search ads or shopping ads that are a combination of
                images and text) are clicked.
              </p>
              <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
                In contrast, content sites commonly charge a fixed price per click
                rather than use a bidding system. PPC display advertisements, also
                known as banner ads, are shown on web sites with related content
                that have agreed to show ads and are typically not pay-per-click
                advertising, but instead usually charge on a cost per thousand
                impressions (CPM).
              </p>

              <p className="mt-5 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
                Social networks such as Facebook, Instagram, LinkedIn, Reddit,
                Pinterest, TikTok, and Twitter have also adopted pay-per-click as
                one of their advertising models. The amount advertisers pay depends
                on the publisher and is usually driven by two major factors: the
                quality of the ad, and the maximum bid the advertiser is willing to
                pay per click measured against its competitors' bids.
              </p>
              <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
                In general, the higher the quality of the ad, the lower the cost per
                click is charged and vice versa. However, websites can offer PPC
                ads. Websites that utilize PPC ads will display an advertisement
                when a query (keyword or phrase) matches an advertiser's keyword
                list that has been added in different ad groups, or when a content
                site displays relevant content.
              </p>
              <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
                Such advertisements are called sponsored links or sponsored ads, and
                appear adjacent to, above, or beneath organic results on search
                engine results pages (SERP), or anywhere a web developer chooses on
                a content site.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://cloudbookingsolutions.com/img/SEO-PIC-1.svg"
                alt="Pay-Per-Click Illustration"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Second section - image left, content right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://cloudbookingsolutions.com/img/content-marketing-1.svg"
                alt="Content Marketing Illustration"
                className="w-full h-auto object-contain"
              />
            </div>
            <div>
              <h3 className="font-bold text-xl lg:text-2xl">B. Content Marketing</h3>

              <p className="mt-5 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
                We are a content marketing agency in India with a team that creates
                an excellent blend of promotional, informational and engaging
                content.
              </p>
              <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
                Our team of 180+ professionals will deliver a content strategy that
                will keep you ahead of the competition with excellent content
                promotion services. We have built our reputation as the best content
                marketing company India through effective and impactful content
                promotion services.
              </p>
              <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
                You can expect a variety of content promotion services like Blogs,
                Articles, Leadership Blogs, Website (writing from ground-up,
                revamping existing content, keyword blending, proofreading),
              </p>

              <h3 className="mt-10 font-bold text-xl lg:text-2xl">C. Video Production</h3>

              <p className="mt-5 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
                Online video marketing services play a critical part in establishing
                the right brand vision of your business. Video marketing services
                are crucial for your brand in this fast-paced sensory overloading
                world. Video film making is one of the most engaging content formats
                your business can leverage to connect with its audience.
              </p>
              <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
                A well-crafted video for social video marketing with the help of a
                video marketing agency conveys your brand message while seizing
                audience attention in the digitally-dominated era. Seeking video
                marketing services is the right step ahead.
              </p>
              <p className="mt-6 text-[15px] md:text-[16px] lg:text-[17px] text-gray-800">
                As a leading video marketing company, our highly experienced
                creative team takes your branding and campaign launches to a whole
                new level with our innovation-driven video marketing strategy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OtherMarketing;
