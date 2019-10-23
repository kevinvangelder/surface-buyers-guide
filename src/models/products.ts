import { ProductStore } from "./ProductStore";

export const productStore = ProductStore.create({
  products: [
    {
      familyName: "Surface Pro",
      versions: [
        {
          versionName: "Surface Pro",
          releaseDate: new Date("2/9/2013"),
          daysUntilNextRelease: 255
        }, {
          versionName: "Surface Pro 2",
          releaseDate: new Date("10/22/2013"),
          daysUntilNextRelease: 241
        }, {
          versionName: "Surface Pro 3",
          releaseDate: new Date("6/20/2014"),
          daysUntilNextRelease: 493,
          priceLow: 799,
          priceHigh: 1949
        }, {
          versionName: "Surface Pro 4",
          releaseDate: new Date("10/26/2015"),
          daysUntilNextRelease: 598,
          priceLow: 899
        }, {
          versionName: "Surface Pro 5",
          releaseDate: new Date("6/15/2017"),
          daysUntilNextRelease: 488,
          priceLow: 799
        }, {
          versionName: "Surface Pro 6",
          releaseDate: new Date("10/16/2018"),
          daysUntilNextRelease: 371,
          priceLow: 899,
          priceHigh: 2199
        }, {
          versionName: "Surface Pro 7",
          releaseDate: new Date("10/22/19"),
          priceLow: 749,
          priceHigh: 2299
        }
      ],
      category: "Tablet/Laptop",
      url: "https://www.microsoft.com/en-us/p/surface-pro-6/",
      reviewUrl: "https://www.cnet.com/reviews/microsoft-surface-pro-6-review/",
      amazonUrl: "https://amzn.to/2Xwhreg",
      rssUrl: "https://www.bing.com/news/search?q=microsoft+surface+pro&FORM=HDRSC6&format=rss",
      rating: 8.2,
      designRating: 8,
      featuresRating: 8,
      performanceRating: 9,
      batteryRating: 9,
      ratingBlurb: "The latest Surface Pro tablet doesn't make any radical design changes, but the performance jump makes it viable as a mainstream performance laptop replacement.",
      description: "Ultra-light and versatile; more powerful than ever, Surface Pro 7 features a powerful Intel® Core™ processor, improved battery and graphics, and more multitasking connections."
    }, {
      familyName: "Surface Book",
      versions: [
        {
          versionName: "Surface Book",
          releaseDate: new Date("10/26/2015"),
          daysUntilNextRelease: 381,
          priceLow: 1499,
          priceHigh: 3299
        }, {
          versionName: "Surface Book with Performance Base",
          releaseDate: new Date("11/10/2016"),
          daysUntilNextRelease: 371
        }, {
          versionName: "Surface Book 2",
          releaseDate: new Date("11/16/2017"),
          priceLow: 1049,
          priceHigh: 2999
        }
      ],
      category: "Tablet/Laptop",
      url: "https://www.microsoft.com/en-us/p/surface-book-2/",
      reviewUrl: "https://www.cnet.com/reviews/microsoft-surface-book-2-review/",
      amazonUrl: "https://amzn.to/2WoqCfb",
      rating: 8.3,
      designRating: 8,
      featuresRating: 9,
      performanceRating: 8,
      batteryRating: 9,
      ratingBlurb: "The Surface Book 2 is a satisfying sequel, but like many sequels, it may be trying to broadly serve too many audiences.",
      description: "Surface Book 2 is the most powerful Surface laptop ever; built with power and versatility to be a laptop, tablet, and portable studio all-in-one."
    }, {
      familyName: "Surface Laptop",
      versions: [
        {
          versionName: "Surface Laptop",
          releaseDate: new Date("6/15/2017"),
          daysUntilNextRelease: 488,
          priceLow: 799,
          priceHigh: 2699
        }, {
          versionName: "Surface Laptop 2",
          releaseDate: new Date("10/16/2018"),
          daysUntilNextRelease: 371,
          priceLow: 999,
          priceHigh: 2699
        }, {
          versionName: "Surface Laptop 3",
          releaseDate: new Date("10/22/2019"),
          priceLow: 999,
          priceHigh: 2399
        }
      ],
      category: "Tablet/Laptop",
      url: "https://www.microsoft.com/en-us/p/surface-laptop-2/",
      reviewUrl: "https://www.cnet.com/reviews/microsoft-surface-laptop-2-review/",
      amazonUrl: "https://amzn.to/2Wv8ipM",
      rssUrl: "https://www.bing.com/news/search?q=microsoft+surface+laptop&FORM=HDRSC6&format=rss",
      rating: 8.2,
      designRating: 9,
      featuresRating: 7,
      performanceRating: 8,
      batteryRating: 8,
      ratingBlurb: "Microsoft's Surface Laptop 2 gets a big speed boost and a new color option, but is otherwise a minimal update to the first version.",
      description: "Style and speed; new Surface Laptop 3 fuels your ideas and reflects your style with a thin, light design, choice of colors,1 2 keyboard finishes, and 2 sizes — a vibrant 13.5\" or new 15\" touchscreen."
    }, {
      familyName: "Surface Pro X",
      versions: [
        {
          versionName: "Surface Pro X",
          releaseDate: new Date("11/15/2019"),
          priceLow: 999,
          priceHigh: 1799
        }
      ],
      category: "Tablet/Laptop",
      url: "",
      amazonUrl: "",
      description: "Ultra-thin and always connected; wherever the day takes you, be ready for anything with Surface Pro X. Featuring blazing-fast LTE connectivity, our thinnest Surface stands out with industry-leading performance and a stunning, virtually edge-to-edge 13\" touchscreen.",
    }, {
      familyName: "Surface Go",
      versions: [
        {
          versionName: "Surface Go",
          releaseDate: new Date("8/2/2018"),
          priceLow: 399,
          priceHigh: 549
        }
      ],
      category: "Tablet/Laptop",
      url: "https://www.microsoft.com/en-us/p/surface-go/",
      reviewUrl: "https://www.cnet.com/reviews/microsoft-surface-go-review/",
      amazonUrl: "https://amzn.to/2Ir5b8s",
      rssUrl: "https://www.bing.com/news/search?q=microsoft+surface+Go&FORM=HDRSC6&format=rss",
      rating: 7.5,
      designRating: 8,
      featuresRating: 7,
      performanceRating: 7,
      batteryRating: 6,
      ratingBlurb: "The new Microsoft Surface Go is the perfect size for casual coffee-shop computing, but getting the full experience quickly drives up the price.",
      description: "New Surface Go is perfect for all your daily tasks, giving you laptop performance, tablet portability, and a stunning touchscreen with the power of Windows 10 Home in S mode."
    }, {
      familyName: "Surface Studio",
      versions: [
        {
          versionName: "Surface Studio",
          releaseDate: new Date("12/15/2016"),
          daysUntilNextRelease: 656
        }, {
          versionName: "Surface Studio 2",
          releaseDate: new Date("10/2/2018"),
          priceLow: 3499,
          priceHigh: 4799
        }
      ],
      category: "Desktop/Hub",
      url: "https://www.microsoft.com/en-us/p/surface-studio-2/",
      reviewUrl: "https://www.cnet.com/reviews/microsoft-surface-studio-2-review/",
      amazonUrl: "https://amzn.to/2K6mmPN",
      rssUrl: "https://www.bing.com/news/search?q=microsoft+surface+studio&FORM=HDRSC6&format=rss",
      rating: 8.5,
      designRating: 9,
      featuresRating: 8,
      performanceRating: 8,
      ratingBlurb: "Remaining the leader for intensive stylus input, the Microsoft Studio 2 seamlessly melds form and function for professional art and design. But it has a few weaknesses that might be deal breakers for people who need a lot of fast storage or more power.",
      description: "The ultimate creative studio. Let your ideas flow with brilliant color, blazing graphics, faster processors, intuitive tools, and a stunning, adjustable 28” display."
    }, {
      familyName: "Surface Hub",
      versions: [
        {
          versionName: "Surface Hub",
          releaseDate: new Date("6/1/2015"),
          daysUntilNextRelease: 1416
        }, {
          versionName: "Surface Hub 2S",
          releaseDate: new Date("4/17/2019")
        }
      ],
      category: "Desktop/Hub",
      url: "https://www.microsoft.com/en-us/surface/business/surface-hub-2",
      rssUrl: "https://www.bing.com/news/search?q=microsoft+surface+hub&FORM=HDRSC6&format=rss",
      description: "Built for team collaboration in the modern workplace. Enable teamwork anywhere with new Surface Hub 2S, an all-in-one digital whiteboard, meetings platform, and collaborative computing device that brings the power of Windows 10 to teamwork."
    }, {
      familyName: "Surface Headphones",
      versions: [
        {
          versionName: "Surface Headphones",
          releaseDate: new Date("10/2/2018"),
          priceLow: 249.99,
          priceHigh: 349.99
        }
      ],
      category: "Accessories",
      url: "https://www.microsoft.com/en-us/p/surface-headphones/",
      reviewUrl: "https://www.cnet.com/reviews/microsoft-surface-headphones-review/",
      amazonUrl: "https://amzn.to/2K8cPYu",
      rssUrl: "https://www.bing.com/news/search?q=microsoft+headphones+studio&FORM=HDRSC6&format=rss",
      rating: 7.9,
      designRating: 8,
      featuresRating: 9,
      soundRating: 7,
      valueRating: 7,
      ratingBlurb: "The Surface Headphones don't quite match Bose and Sony noise-canceling headphones, but they're a strong freshman effort with some compelling feature and design elements.",
      description: "The smarter way to listen. Music and calls sound spectacular with active noise cancellation, rich audio, Bluetooth connectivity, and on-ear touch controls."
    }, {
      familyName: "Surface Earbuds",
      versions: [
        {
          versionName: "Surface Earbuds",
          releaseDate: new Date("10/22/2019"),
          price: 249
        }
      ],
      category: "Accessories",
      url: "",
      amazonUrl: "",
      description: "Featuring an ultra-comfortable design, intuitive touch and voice controls, screen-free access to Office 365, immersive sound for music and calls, and all-day battery."
    }, {
      familyName: "Surface Pen",
      versions: [
        {
          versionName: "Surface Pen Gen 1",
          releaseDate: new Date("2/9/2013"),
          daysUntilNextRelease: 496
        }, {
          versionName: "Surface Pen Gen 2",
          releaseDate: new Date("6/20/2014"),
          daysUntilNextRelease: 493
        }, {
          versionName: "Surface Pen Gen 3",
          releaseDate: new Date("10/26/2015"),
          daysUntilNextRelease: 598
        }, {
          versionName: "Surface Pen Gen 4",
          releaseDate: new Date("6/15/2017"),
          daysUntilNextRelease: 829,
          price: 99.99
        }, {
          versionName: "Surface Pen Gen 5",
          releaseDate: new Date("10/22/2019"),
          price: 99.99
        }
      ],
      category: "Accessories",
      url: "https://www.microsoft.com/en-us/p/surface-pen/",
      amazonUrl: "https://amzn.to/2KD5DTD",
      rssUrl: "https://www.bing.com/news/search?q=microsoft+surface+pen&FORM=HDRSC6&format=rss",
      description: "Surface Pen is better and faster than ever, with tilt for shading, greater sensitivity, and virtually no lag to help you capture your thoughts and get more done."
    }, {
      familyName: "Surface Dial",
      versions: [
        {
          versionName: "Surface Dial",
          releaseDate: new Date("10/26/2016"),
          price: 99.99
        }
      ],
      category: "Accessories",
      url: "https://www.microsoft.com/en-us/p/surface-dial/",
      reviewUrl: "https://www.cnet.com/reviews/microsoft-surface-dial-preview/",
      amazonUrl: "https://amzn.to/2IwA9Mn",
      rssUrl: "https://www.bing.com/news/search?q=microsoft+surface+dial&FORM=HDRSC6&format=rss",
      description: "Surface Dial is a completely new way to interact with technology and create in the most natural, immersive way. Store, customize, access, navigate, and reimagine physical tools in the digital world – from concept to creation."
    }, {
      familyName: "Surface Pro Signature Type Cover",
      versions: [
        {
          versionName: "Sigature Type Cover Gen 1",
          releaseDate: new Date("4/12/2016"),
          daysUntilNextRelease: 429
        }, {
          versionName: "Signature Type Cover Gen 2",
          releaseDate: new Date("6/15/2017"),
          price: 159.99,
          daysUntilNextRelease: 859
        }, {
          versionName: "Signature Type Cover Gen 3",
          releaseDate: new Date("10/22/2019"),
          price: 159.99
        }
      ],
      category: "Accessories",
      url: "https://www.microsoft.com/en-us/p/surface-pro-signature-type-cover/",
      amazonUrl: "https://amzn.to/2I62Qkj",
      rssUrl: "https://www.bing.com/news/search?q=microsoft+surface+signature+type+cover&FORM=HDRSC6&format=rss",
      description: "For a comfortable typing experience anywhere, pair Surface Pro Signature Type Cover with Surface Pro 7. Sleek and compact, it also includes backlit keys and a large trackpad."
    }, {
      familyName: "Surface Pro Type Cover",
      versions: [
        {
          versionName: "Type Cover 1",
          releaseDate: new Date("2/9/2013"),
          daysUntilNextRelease: 255
        }, {
          versionName: "Type Cover 2",
          releaseDate: new Date("10/22/2013"),
          daysUntilNextRelease: 241
        }, {
          versionName: "Type Cover 3",
          releaseDate: new Date("6/20/2014"),
          price: 129.99
        }
      ],
      category: "Accessories",
      url: "https://www.microsoft.com/en-us/p/surface-pro-type-cover/",
      amazonUrl: "https://amzn.to/2ItxTFB",
      rssUrl: "https://www.bing.com/news/search?q=microsoft+surface+type+cover&FORM=HDRSC6&format=rss",
      description: "Add a touch of style to everyday tasks with the redesigned Surface Pro Type Cover, a perfect blend of elegance, comfort and technology."
    }, {
      familyName: "Surface Pro X Signature Keyboard With Slim Pen Bundle",
      versions: [
        {
          versionName: "Surface Pro X Signature Keyboard With Slim Pen Bundle",
          releaseDate: new Date("11/5/2019"),
          price: 269.99
        }
      ],
      category: "Accessories",
      url: "",
      amazonUrl: "",
      description: "Next-level versatility comes in the perfect pair. Surface Slim Pen stores securely and recharges in the premium Surface Pro X Signature Keyboard, featuring a large glass trackpad and luxurious, Alcantara&reg; material covering"
    }, {
      familyName: "Surface Pro X Keyboard",
      versions: [
        {
          versionName: "Surface Pro X Keyboard",
          releaseDate: new Date("11/5/2019"),
          price: 139.99
        }
      ],
      category: "Accessories",
      url: "",
      amazonUrl: "",
      description: "For a comfortable typing experience anywhere, pair Surface Pro X Keyboard with Surface Pro X. Sleek and compact, it also features a large trackpad for precise navigation."
    }, {
      familyName: "Surface Slim Pen",
      versions: [
        {
          versionName: "Surface Slim Pen",
          releaseDate: new Date("11/5/2019"),
          price: 149.99
        }
      ],
      category: "Accessories",
      url: "https://www.microsoft.com/en-us/p/surface-slim-pen/",
      amazonUrl: "",
      description: "Write, sketch, charge, and repeat with rechargeable Surface Slim Pen, featuring tilt for shading, exceptional pressure sensitivity, and virtually no lag."
    }, {
      familyName: "Surface Go Signature Type Cover",
      versions: [
        {
          versionName: "Surface Go Signature Type Cover",
          releaseDate: new Date("8/2/2018"),
          price: 129.99
        }
      ],
      category: "Accessories",
      url: "https://www.microsoft.com/en-us/p/surface-go-signature-type-cover/",
      amazonUrl: "https://amzn.to/2K8n5jE",
      rssUrl: "https://www.bing.com/news/search?q=microsoft+surface+go+signature+type+cover&FORM=HDRSC6&format=rss",
      description: "Pair Surface Go Signature Type Cover with Surface Go for a full-keyboard experience anywhere. Available in Black, plus Platinum, Burgundy, and Cobalt Blue in Alcantara&reg;."
    }, {
      familyName: "Surface Keyboard",
      versions: [
        {
          versionName: "Surface Keyboard",
          releaseDate: new Date("7/10/2018"),
          price: 99.99
        }
      ],
      category: "Accessories",
      url: "https://www.microsoft.com/en-us/p/surface-keyboard/",
      amazonUrl: "https://amzn.to/2XzelGc",
      rssUrl: "https://www.bing.com/news/search?q=microsoft+surface+keyboard&FORM=HDRSC6&format=rss",
      description: "Meticulously crafted, just like Surface with a sleek and simple design. Optimized feedback and return force."
    }, {
      familyName: "Surface Mouse",
      versions: [
        {
          versionName: "Surface Mouse",
          releaseDate: new Date("7/10/2018"),
          price: 49.99
        }
      ],
      category: "Accessories",
      url: "https://www.microsoft.com/en-us/p/surface-mouse/",
      amazonUrl: "https://amzn.to/2Ip4fkM",
      rssUrl: "https://www.bing.com/news/search?q=microsoft+surface+mouse&FORM=HDRSC6&format=rss",
      description: "Meticulously crafted, just like Surface with a leek, simple design. Metal scroll wheel."
    }, {
      familyName: "Surface Mobile Mouse",
      versions: [
        {
          versionName: "Surface Mobile Mouse",
          releaseDate: new Date("10/16/2018"),
          price: 34.99
        }
      ],
      category: "Accessories",
      url: "https://www.microsoft.com/en-us/p/surface-mobile-mouse/",
      amazonUrl: "https://amzn.to/2KAzxrE",
      rssUrl: "https://www.bing.com/news/search?q=microsoft+surface+mobile+mouse&FORM=HDRSC6&format=rss",
      description: "Light and portable, the new Surface Mobile Mouse delivers seamless scrolling and cord-free Bluetooth connectivity. Available in 3 rich colors."
    }, {
      familyName: "Surface Arc Mouse",
      versions: [
        {
          versionName: "Surface Arc Mouse",
          releaseDate: new Date("6/20/2014"),
          daysUntilNextRelease: 1950,
          price: 79.99
        }, {
          versionName: "Surface Arc Mouse Gen 2",
          releaseDate: new Date("10/22/2019"),
          price: 79.99
        }
      ],
      category: "Accessories",
      url: "https://www.microsoft.com/en-us/p/surface-arc-mouse/",
      amazonUrl: "https://amzn.to/2WXsyjh",
      rssUrl: "https://www.bing.com/news/search?q=microsoft+surface+arc+mouse&FORM=HDRSC6&format=rss",
      description: "Slim, light, and ready to travel, Surface Arc Mouse is designed to conform to your hand and snaps flat to fit easily in your bag. Connects via Bluetooth."
    }
  ]
})