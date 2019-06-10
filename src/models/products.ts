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
          priceLow: 899,
          priceHigh: 2199
        }
      ],
      category: "Tablet/Laptop",
      url: "https://www.microsoft.com/en-us/p/surface-pro-6/",
      reviewUrl: "https://www.cnet.com/reviews/microsoft-surface-pro-6-review/",
      amazonUrl: "https://amzn.to/2Xwhreg",
      description: "Ultra-light and versatile. Get productive your way with new Surface Pro 6 — now faster than ever with the latest 8th Generation Intel&copy; Core&tm; processor and the full Windows 10 Home experience."
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
          priceLow: 999,
          priceHigh: 2699
        }
      ],
      category: "Tablet/Laptop",
      url: "https://www.microsoft.com/en-us/p/surface-laptop-2/",
      reviewUrl: "https://www.cnet.com/reviews/microsoft-surface-laptop-2-review/",
      amazonUrl: "https://amzn.to/2Wv8ipM",
      description: "Style and speed. Go beyond the traditional with Surface Laptop 2. Featuring improved performance and the full Windows 10 Home experience, slip it in your bag and make every day more productive."
    }, {
      familyName: "Surface Go",
      versions: [
        {
          versionName: "Surface",
          releaseDate: new Date("10/26/2012"),
          daysUntilNextRelease: 361
        }, {
          versionName: "Surface 2",
          releaseDate: new Date("10/22/2013"),
          daysUntilNextRelease: 560
        }, {
          versionName: "Surface 3",
          releaseDate: new Date("5/5/2015"),
          daysUntilNextRelease: 1185,
          priceLow: 499,
          priceHigh: 599
        }, {
          versionName: "Surface Go",
          releaseDate: new Date("8/2/2018"),
          daysUntilNextRelease: 310,
          priceLow: 399,
          priceHigh: 549
        }
      ],
      category: "Tablet/Laptop",
      url: "https://www.microsoft.com/en-us/p/surface-go/",
      reviewUrl: "https://www.cnet.com/reviews/microsoft-surface-go-review/",
      amazonUrl: "https://amzn.to/2Ir5b8s",
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
      description: "The smarter way to listen. Music and calls sound spectacular with active noise cancellation, rich audio, Bluetooth connectivity, and on-ear touch controls."
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
          price: 99.99
        }
      ],
      category: "Accessories",
      url: "https://www.microsoft.com/en-us/p/surface-pen/",
      amazonUrl: "https://amzn.to/2KD5DTD",
      description: "Create without limits. New Surface Pen is better and faster than ever, with precision ink on one end and a rubber eraser on the other — plus tilt for shading,3 greater sensitivity, and virtually no lag."
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
      description: "Surface Dial is a completely new way to interact with technology and create in the most natural, immersive way. Store, customize, access, navigate, and reimagine physical tools in the digital world – from concept to creation."
    }, {
      familyName: "Surface Signature Type Cover",
      versions: [
        {
          versionName: "Sigature Type Cover Gen 1",
          releaseDate: new Date("4/12/2016"),
          daysUntilNextRelease: 429
        }, {
          versionName: "Signature Type Cover Gen 2",
          releaseDate: new Date("6/15/2017"),
          price: 159.99
        }
      ],
      category: "Accessories",
      url: "https://www.microsoft.com/en-us/p/surface-pro-signature-type-cover/",
      amazonUrl: "https://amzn.to/2I62Qkj",
      description: "Our Most luxurious Surface Pro keyboard and cover. Add a touch of luxury to everyday tasks with the new Surface Pro Signature Type Cover in next-generation Alcantara material — a perfect blend of sophisticated style, comfort, and technology."
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
      description: "Add a touch of style to everyday tasks with the redesigned Surface Pro Type Cover, a perfect blend of elegance, comfort and technology."
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
      description: "Light and portable, the new Surface Mobile Mouse delivers seamless scrolling and cord-free Bluetooth connectivity. Available in 3 rich colors."
    }, {
      familyName: "Surface Arc Mouse",
      versions: [
        {
          versionName: "Surface Arc Mouse",
          releaseDate: new Date("6/20/2014"),
          price: 79.99
        }
      ],
      category: "Accessories",
      url: "https://www.microsoft.com/en-us/p/surface-arc-mouse/",
      amazonUrl: "https://amzn.to/2WXsyjh",
      description: "Slim, light, and ready to travel, Surface Arc Mouse is designed to conform to your hand and snaps flat to fit easily in your bag. Connects via Bluetooth."
    }
  ]
})