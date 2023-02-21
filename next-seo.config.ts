import type { NextSeoProps } from "next-seo";
import { RealmPageProps } from "t/types";

export function getProps(props: RealmPageProps): NextSeoProps {
  return {
    titleTemplate: "[_Kanaria_] | %s",
    title: props.title,
    description: props.desc,
    canonical: "",
    openGraph: {
      siteName: "[_Kanaria_]",
      type: "website",
      locale: "en",
      url: "",
      title: "[_Kanaria_] | " + props.title,
      description: props.desc,
      images: [
        {
          url: "",
          width: 1200,
          height: 630,
          alt: "[_Kanaria_] | " + props.title,
        },
      ],
    },
    twitter: {
      handle: "@irvanmalik48",
      site: "@irvanmalik48",
      cardType: "summary_large_image",
    },
  };
}

export function noIndexNoFollow(): NextSeoProps {
  return {
    additionalMetaTags: [
      {
        name: "robots",
        content: "noindex,nofollow",
      },
      {
        name: "googlebot",
        content: "noindex,nofollow",
      },
    ],
  };
}

export function indexFollow(): NextSeoProps {
  return {
    additionalMetaTags: [
      {
        name: "robots",
        content: "index,follow",
      },
      {
        name: "googlebot",
        content: "index,follow",
      },
    ],
  };
}
