import { useEffect, useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { CopyCheckIcon } from "@components/Icons.tsx";
import { tw } from "@utils/twind.ts";

export default function CopyButton(props: { text: string }) {
  const [copied, setCopied] = useState(false);

  async function handleClick() {
    if (props.text === undefined || props.text === null) {
      return;
    } else {
      try {
        await navigator.clipboard.writeText(props.text.toString());
        setCopied(true);
      } catch (error) {
        setCopied(false);
        console.error((error && error.message) || "Copy failed");
      }
    }
  }

  useEffect(() => {
    if (!copied) {
      return;
    }
    const timer = setTimeout(() => {
      setCopied(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  return (
    <button
      className={tw`font-mono inline-block bg-light-nav dark:bg-dark-nav hover:bg-light-accent-semitrans hover:dark:bg-dark-accent-semitrans hover:scale-[120%] active:scale-105 active:bg-light-accent-solid active:dark:bg-dark-accent-solid focus:outline-none ring ring-transparent focus-visible:ring-light-accent-solid focus-visible:dark:ring-dark-accent-solid hover:ring-light-accent-solid hover:dark:ring-dark-accent-solid w-[fit-content] text-sm text-light-text dark:text-dark-text active:text-light-superdark active:dark:text-dark-superdark hover:text-light-accent-solid hover:dark:text-dark-accent-solid transition-all duration-200 ease-out font-semibold px-4 py-0.5 my-1 rounded-3xl`}
      onClick={async (e) => {
        e.preventDefault();
        await handleClick();
      }}
      disabled={!IS_BROWSER}
    >
      <CopyCheckIcon
        className={tw`w-[1rem]`}
        pathCopyClassName={tw`${
          copied ? "opacity-0" : "opacity-100"
        } transition-all duration-100 ease-out`}
        pathCheckClassName={tw`${
          !copied ? "opacity-0" : "opacity-100"
        } transition-all duration-100 ease-out`}
      />
    </button>
  );
}
