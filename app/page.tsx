import { Posts } from "c/Posts";
import { Projects } from "c/Projects";
import Link from "next/link";
import { AnimatedSVGBack } from "c/AnimatedSVGBG";
import Image from "next/image";
import Marquee from "c/Marquee";
import CheckFill from "c/CheckFill";
import ArrowForwardFill from "c/ArrowForwardFill";
import IntroHero from "p/misc/Ayaya.webp";

export default function Page() {
  return (
    <main className="min-h-screen w-full px-5 relative overflow-x-hidden">
      <AnimatedSVGBack className="absolute top-0 left-1/2 -translate-x-1/2 hidden md:block" />
      <img
        src="/misc/lottie.svg"
        className="w-48 z-[6] absolute left-0 top-0 hidden lg:block"
        alt="lottie"
      />
      <section className="max-w-4xl min-h-screen place-content-center mx-auto grid grid-cols-1 relative">
        <h1 className="text-4xl text-center md:text-start md:text-5xl lg:text-7xl font-heading font-semibold text-white w-full">
          Just a simple blog for posting shitty thing and{" "}
          <span className="text-teal-300">AYAYA</span>.
        </h1>
        <h2 className="text-2xl mt-3 text-center md:text-start font-display text-white w-full">
          [_Kanaria_] Blog Site.
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-start mt-7 gap-3">
          <a
            href="#self-intro"
            className="flex flex-row justify-start items-center w-fit pl-2 pr-9 py-2 font-semibold text-lg bg-teal-300 hover:scale-110 active:scale-90 transition ease-out rounded-full"
          >
            <CheckFill
              className="block p-2 rounded-full bg-neutral-900 fill-white mr-5"
              size="18px"
            />
            Start
          </a>
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            className="block w-fit px-7 py-2 text-lg text-white text-opacity-50 hover:text-opacity-100 transition ease-out rounded-full"
          >
            Exit
          </a>
        </div>
      </section>
      <section>
        {/* prettier-ignore */}
        <Marquee className="text-neutral-900 uppercase h-12 font-heading text-3xl font-bold bg-teal-300 tracking-wide" speed={25} direction="left" gradient gradientColor={[23, 23, 23]}>
          .Đi theo ánh nắng chiều tàn Phía cuối dòng người Sao nơi đây chỉ còn mình anh Nếu có thể trở về thì anh sẽ chẳng buông lơi bàn tay của em
        </Marquee>
      </section>
      <section
        id="self-intro"
        className="max-w-4xl min-h-screen place-content-center mx-auto grid grid-cols-1 relative"
      >
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet="/misc/Ayaya.webp"
            type="image/webp"
          />
          <source srcSet="/misc/ayaya_mobile.webp" type="image/webp" />
          <Image
            src={IntroHero}
            alt="lmao photos"
            placeholder="blur"
            className="rounded-xl border-2 border-neutral-800"
          />
        </picture>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-semibold mt-4 text-white w-full">
          Why this exist <span className="text-teal-300">Ayaya?</span>.
        </h1>
        <h2 className="text-2xl mt-3 font-display text-white w-full">
          Because of the convenience
        </h2>
        <p className="text-neutral-300 mt-3">
          Hello, I'm{" "}
          <strong className="text-teal-300">[_Kanaria]</strong>. A weeb user, wanna to post R18 content and play game, like Osu, Arknights,Genshin Impact etc when I have free time 
        </p>
        <p className="text-teal-300 font-heading font-bold mt-3">
          Roll down and find what you need.
        </p>
      </section>
      <section>
        {/* prettier-ignore */}
        <Marquee className="text-neutral-900 uppercase h-12 font-heading text-3xl font-bold bg-teal-300 tracking-wide" speed={25} direction="left" gradient gradientColor={[23, 23, 23]}>
        Свет фонарей гуляет по улице
        Смотри же мне в глаза, обо всём я тебе расскажу
        И колыбельную тебе спою, смотри же мне в глаза
        И где в них доброта? 
        </Marquee>
      </section>
      <section className="max-w-4xl mx-auto grid grid-cols-1 relative min-h-screen place-content-center mt-12 md:mt-0">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-white w-full">
          And this is for posting <span className="text-teal-300">shitty post</span>{" "}
          in Vietnamese or Eng.
        </h1>
        <h2 className="text-2xl mt-3 font-display text-white w-full">
          Feel free to check 
        </h2>
        <Posts sliced={true} />
        <div className="flex flex-row justify-end items-center">
          <Link
            href="/posts"
            scroll={true}
            className="w-fit text-white text-opacity-70 hover:text-opacity-100 mt-3 group transition ease-out flex flex-row gap-5 justify-center items-center"
          >
            Show more posts
            <ArrowForwardFill
              className="block bg-white opacity-70 group-hover:opacity-100 fill-neutral-900 p-1 rounded-full transition"
              size="18px"
            />
          </Link>
        </div>
      </section>
      <section className="py-12 lg:py-0 max-w-4xl mx-auto grid grid-cols-1 relative min-h-screen place-content-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-white w-full">
          You can check <span className="text-teal-300"> R18</span> post{" "}
          <span className="text-teal-300">here</span>.
        </h1>
        <h2 className="text-2xl mt-3 font-display text-white w-full">
          Just only for posting R18
        </h2>
        <Projects sliced={true} />
        <div className="flex flex-row justify-end items-center">
          <Link
            href="/projects"
            scroll={true}
            className="w-fit text-white text-opacity-70 hover:text-opacity-100 mt-3 group transition ease-out flex flex-row gap-5 justify-center items-center"
          >
            Show more projects
            <ArrowForwardFill
              className="block bg-white opacity-70 group-hover:opacity-100 fill-neutral-900 p-1 rounded-full transition"
              size="18px"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}
