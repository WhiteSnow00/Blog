import { Handlers, PageProps } from "$fresh/server.ts";
import ky from "ky";
import { Covid, Post } from "@/types.d.tsx";
import DefaultLayout from "@components/DefaultLayout.tsx";
import PostCard from "@components/PostCard.tsx";
import { loadContent, timeToRead } from "@utils/load.ts";
import { quotes } from "@utils/quotes.ts";
import { css, tw } from "@utils/twind.ts";
import { ChaosLogo } from "@components/ChaosLogo.tsx";

const posts = await loadContent("posts/");

export const handler: Handlers<{
  quote: string;
  covid: Covid | null;
}> = {
  async GET(_req, ctx) {
    const randomIndex = Math.floor(Math.random() * 20);
    const covid = await ky.get("https://covid19.mathdro.id/api").json();
    const body = {
      quote: quotes[randomIndex],
      covid: covid as Covid,
    };

    return ctx.render(body);
  },
};

export default function Home(
  props: PageProps<{
    quote: string;
    covid: Covid | null;
  }>,
) {
  const postProps: Post[] = [];

  for (const [_key, post] of posts.entries()) {
    postProps.push(post);
  }

  postProps.sort((a, b) => {
    return a.date && b.date && a.date < b.date ? 1 : -1;
  });

  return (
    <DefaultLayout
      title="IrvanMA's Lair"
      desc="Do what you want and do it well."
    >
      <header
        className={tw`py-24 w-full flex flex-col md:flex-row justify-center items-center gap-5`}
      >
        <a
          href="https://en.wikipedia.org/wiki/Symbol_of_Chaos"
          aria-label="Symbol of Chaos - Wikipedia"
        >
          <ChaosLogo
            className={tw`bg-dark-side group rounded-full w-[200px] md:w-[100px] h-[fit-content] hover:translate-y-[-20px] md:hover:translate-y-[0] md:hover:translate-x-[-20px] hover:rotate-[360deg] hover:scale-[1.2] hover:transform-gpu hover:(ring ring-dark-accent-solid) transition-all duration-1000 ease-in-out`}
          />
        </a>
        <div className={tw`flex flex-col justify-start items-center`}>
          <p className={tw`text-dark-text font-bold text-3xl font-heading`}>
            Irvan Malik Azantha
          </p>
          <p className={tw`w-full text-dark-accent-solid text-lg`}>
            Do what you want and do it well.
          </p>
        </div>
      </header>
      <section
        className={tw`mb-5 w-full bg-dark-navglass p-5 rounded-xl ${
          css(
            {
              "-webkit-backdrop-filter": "blur(.5rem)",
              "backdrop-filter": "blur(.5rem)",
            },
          )
        }`}
      >
        <p
          className={tw`text-lg rounded-xl font-bold text-dark-text mb-5 px-4 py-2 bg-dark-accent-quartertrans text-center font-heading`}
        >
          COVID-19 Status Tracker
        </p>
        <div className={tw`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-5 items-center justify-center`}>
          <div
            className={tw`ring ring-transparent flex flex-col justify-center items-center text-center w-full px-5 py-3 bg-dark-accent-quartertrans rounded-xl hover:bg-dark-accent-semitrans hover:ring-dark-accent-solid transition-all duration-200 ease-out text-dark-text`}
          >
            <p
              className={tw`bg-dark-accent-semitrans py-0.5 w-full rounded-3xl text-dark-accent-solid font-semibold font-mono uppercase`}
            >
              Confirmed
            </p>
            <p className={tw`text-dark-text font-bold text-2xl pt-5 py-3`}>
              {props.data.covid?.confirmed.value}
            </p>
          </div>
          <div
            className={tw`ring ring-transparent flex flex-col justify-center items-center text-center w-full px-5 py-3 bg-dark-accent-quartertrans rounded-xl hover:bg-dark-accent-semitrans hover:ring-dark-accent-solid transition-all duration-200 ease-out text-dark-text`}
          >
            <p
              className={tw`bg-dark-accent-semitrans py-0.5 w-full rounded-3xl text-dark-accent-solid font-semibold font-mono uppercase`}
            >
              Deaths
            </p>
            <p className={tw`text-dark-text font-bold text-2xl pt-5 py-3`}>
              {props.data.covid?.deaths.value}
            </p>
          </div>
          <div
            className={tw`ring ring-transparent flex flex-col justify-center items-center text-center w-full px-5 py-3 bg-dark-accent-quartertrans rounded-xl hover:bg-dark-accent-semitrans hover:ring-dark-accent-solid transition-all duration-200 ease-out text-dark-text`}
          >
            <p
              className={tw`bg-dark-accent-semitrans py-0.5 w-full rounded-3xl text-dark-accent-solid font-semibold font-mono uppercase`}
            >
              Recovered
            </p>
            <p className={tw`text-dark-text font-bold text-2xl pt-5 py-3`}>
              {props.data.covid?.recovered.value}
            </p>
          </div>
        </div>
        <p className={tw`text-dark-footertext text-center w-full mt-5`}>
          The data is fetched from{" "}
          <a
            href="https://covid19.mathdro.id/api"
            className={tw`text-dark-accent-solid hover:text-dark-text transition-all duration-200 ease-out`}
          >
            this API
          </a>
          .
        </p>
        <p className={tw`text-dark-footertext text-center w-full`}>
          Last updated at{" "}
          {new Date(props.data.covid?.lastUpdate ?? "").toLocaleString("en-US", {
            timeZone: "Asia/Jakarta",
          })}
        </p>
      </section>
      <section
        className={tw`mb-5 w-full bg-dark-navglass py-4 px-5 rounded-xl ${
          css(
            {
              "-webkit-backdrop-filter": "blur(.5rem)",
              "backdrop-filter": "blur(.5rem)",
            },
          )
        }`}
      >
        <p
          className={tw`text-2xl font-semibold text-dark-text mb-3 font-heading`}
        >
          Description
        </p>
        <p
          className={tw`bg-dark-accent-semitrans text-dark-text px-5 py-2 rounded-xl border-l-4 border-dark-accent-solid`}
        >
          {props.data.quote}
        </p>
        <p className={tw`text-dark-text mt-3`}>
          Hello, my name's Irvan Malik Azantha. I'm a 19 y'o man currently
          studying on Universitas Sriwijaya. I live in Palembang, Indonesia. I'm
          a self taught developer that loves to learn new things.
        </p>
      </section>
      <section
        className={tw`flex flex-col w-full bg-dark-navglass py-4 px-5 rounded-xl mb-5 ${
          css(
            {
              "-webkit-backdrop-filter": "blur(.5rem)",
              "backdrop-filter": "blur(.5rem)",
            },
          )
        }`}
      >
        <p
          className={tw`text-2xl font-semibold text-dark-text mb-3 font-heading`}
        >
          Recent Posts
        </p>
        <p
          className={tw`bg-dark-accent-semitrans text-dark-text px-5 py-2 rounded-xl border-l-4 border-dark-accent-solid`}
        >
          Recent 4 posts that I have written currently.
        </p>
        <div
          className={tw`grid grid-cols-1 xl:grid-cols-2 mt-5 gap-5 items-between`}
        >
          {postProps.slice(0, 4).map((data: Post, key: number) => {
            return (
              <PostCard
                key={key}
                path={"/posts" + data.path}
                title={data.title}
                date={data.date}
                desc={data.desc}
                tag={data.tag}
                timeToRead={timeToRead(data)}
              />
            );
          })}
        </div>
        <p className={tw`p-0 m-0 mt-2 text-center w-full`}>
          <a
            className={tw`bg-dark-accent-quartertrans px-4 py-2 inline-block text-sm text-uppercase text-dark-text rounded-3xl transition-all duration-200 ease-out hover:bg-dark-accent-semitrans hover:text-dark-accent-solid ring ring-dark-accent-quartertrans hover:ring-dark-accent-solid font-bold w-[fit-content] mt-5`}
            href="/posts"
          >
            More Posts
          </a>
        </p>
      </section>
    </DefaultLayout>
  );
}
