import { DefaultSeoProps } from "next-seo";

const SITE_NAME = "俺が";
const DESCRIPTION = "Jacob's portfolio";

const NextSeoConfig: DefaultSeoProps = {
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    url: "https://orega.org/",
    site_name: SITE_NAME,
    title: SITE_NAME,
    description: DESCRIPTION,
    // images: [
    //   {
    //     url: 'https://yourdomain.com/icons/apple-touch-icon.png',
    //     width: 800,
    //     height: 600,
    //     alt: 'Og Image Alt',
    //   },
    //   {
    //     url: 'https://www.example.ie/og-image-2.jpg',
    //     width: 800,
    //     height: 600,
    //     alt: 'Og Image Alt 2',
    //   },
    // ],
  },
  titleTemplate: "%s | Jacob's portfolio", // https://github.com/garmeeh/next-seo#title-template
  defaultTitle: SITE_NAME, // https://github.com/garmeeh/next-seo#default-title
  additionalMetaTags: [
    {
      httpEquiv: "content-type",
      content: "text/html; charset=utf-8",
    },
    {
      name: "application-name",
      content: SITE_NAME,
    },
    {
      name: "mobile-web-app-capable",
      content: "yes",
    },
    {
      name: "apple-mobile-web-app-capable",
      content: "yes",
    },
    {
      name: "apple-mobile-web-app-status-bar-style",
      content: "default",
    },
    {
      name: "apple-mobile-web-app-title",
      content: SITE_NAME,
    },
    {
      name: "format-detection",
      content: "telephone=no",
    },
    {
      name: "apple-mobile-web-app-status-bar-style",
      content: "default",
    },
    // <meta name='msapplication-config' content='/icons/browserconfig.xml' />
    // <meta name='msapplication-TileColor' content='#2B5797' />
    // <meta name='msapplication-tap-highlight' content='no' />
    // <meta name='theme-color' content='#000000' />
  ],
  additionalLinkTags: [
    // {
    //   rel: 'icon',
    //   href: '/static/favicon.ico',
    // }
    // <link rel='icon' type='image/png' sizes='32x32' href='/icons/favicon-32x32.png' />
    // <link rel='icon' type='image/png' sizes='16x16' href='/icons/favicon-16x16.png' />
    // <link rel='apple-touch-icon' href='/icons/touch-icon-iphone.png' />
    // <link rel='apple-touch-icon' sizes='152x152' href='/icons/touch-icon-ipad.png' />
    // <link rel='apple-touch-icon' sizes='180x180' href='/icons/touch-icon-iphone-retina.png' />
    // <link rel='apple-touch-icon' sizes='167x167' href='/icons/touch-icon-ipad-retina.png' />
    // <!-- apple splash screen images -->
    // <link rel='apple-touch-startup-image' href='/images/apple_splash_2048.png' sizes='2048x2732' />
    // <link rel='apple-touch-startup-image' href='/images/apple_splash_1668.png' sizes='1668x2224' />
    // <link rel='apple-touch-startup-image' href='/images/apple_splash_1536.png' sizes='1536x2048' />
    // <link rel='apple-touch-startup-image' href='/images/apple_splash_1125.png' sizes='1125x2436' />
    // <link rel='apple-touch-startup-image' href='/images/apple_splash_1242.png' sizes='1242x2208' />
    // <link rel='apple-touch-startup-image' href='/images/apple_splash_750.png' sizes='750x1334' />
    // <link rel='apple-touch-startup-image' href='/images/apple_splash_640.png' sizes='640x1136' />
    // <link rel='mask-icon' href='/icons/safari-pinned-tab.svg' color='#5bbad5' />
    // <link rel='shortcut icon' href='/favicon.ico' />
  ],
};

export default NextSeoConfig;
