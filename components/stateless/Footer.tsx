
export function Footer() {
  return (
    <footer className="w-full px-5 py-8 mb-20 lg:mb-10">
      <div className="flex flex-col-reverse md:flex-row max-w items-center justify-between max-w-4xl mx-auto">
        <div className="">
          <p className="text-white text-center md:text-start text-opacity-50">
            Made using {" "}
            <span className="text-teal-300">template</span> from{" "}
            <a
              href="https://github.com/irvanmalik48"
              className="text-teal-300 hover:text-opacity-100 transition ease-out underline underline-offset-2"
            >
              irvanmalik48
            </a>
            .
          </p>
          <p className="text-white text-center md:text-start text-opacity-50">
            Copyright © 2022 Irvan Malik Azantha. Licensed under MIT License.
          </p>
        </div>
        <div className="flex flex-row gap-3 py-5">
          <a
            href="https://www.facebook.com/F.Ena.2001/"
            className="bg-white bg-opacity-50 text-neutral-900 p-2 rounded-full block hover:bg-opacity-100 transition ease-out"
            aria-label="icon-facebook"
          >
            <FacebookIcon className="w-6" />
          </a>
          <a
            href="https://t.me/sech_ayaya"
            className="bg-white bg-opacity-50 text-neutral-900 p-2 rounded-full block hover:bg-opacity-100 transition ease-out"
            aria-label="icon-telegram"
          >
            <TelegramIcon className="w-6" />
          </a>
          <a
            href="mailto:animelovefanam@gmail.com"
            className="bg-white bg-opacity-50 text-neutral-900 p-2 rounded-full block hover:bg-opacity-100 transition ease-out"
            aria-label="icon-email"
          >
            <MailFastIcon className="w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}

function TelegramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M20.51,3.49c-.33-.27-.83-.2-1.11.13L2.57,12.93c-.3.24-.33.67-.06.93l3.31,3.02a.62.62,0,0,0,.89,0l2.24-2V19.5a.54.54,0,0,0,.17.39.57.57,0,0,0,.4.16h.09a.62.62,0,0,0,.49-.23L12.51,15l3.32,2.43a.62.62,0,0,0,.9-.12l3.07-4.43c.12-.18.18-.39.16-.6l-.61-3.15a.62.62,0,0,0-.54-.51l-.08,0a.62.62,0,0,0-.49.22l-.43.49-1.51-1.15a.63.63,0,0,0-.81,0l-9.07,7.24c-.34.27-.36.76-.06,1l2.86,2.6a.62.62,0,0,0,.89,0L20.64,4.61A.74.74,0,0,0,20.51,3.49Z"
      />
    </svg>
  );
}


function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M21.5,2H2.5A.5.5,0,0,0,2,2.5v19a.5.5,0,0,0,.5.5H12.7V15.66H10.13V12.33H12.7V10.26c0-2.68,1.64-4.14,4-4.14a21.44,21.44,0,0,1,2.39.13v2.79l-1.63.1c-1.29,0-1.54.61-1.54,1.51v1.97h3.07l-.4,3.33H17.18a.5.5,0,0,0,.5-.5V9.58h3.07L21.5,6.25Z"
      />
    </svg>
  );
}


function MailFastIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M22 5.5H9C7.9 5.5 7 6.4 7 7.5V16.5C7 17.61 7.9 18.5 9 18.5H22C23.11 18.5 24 17.61 24 16.5V7.5C24 6.4 23.11 5.5 22 5.5M22 9.17L15.5 12.5L9 9.17V7.5L15.5 10.81L22 7.5V9.17M5 16.5C5 16.67 5.03 16.83 5.05 17H1C.448 17 0 16.55 0 16S.448 15 1 15H5V16.5M3 7H5.05C5.03 7.17 5 7.33 5 7.5V9H3C2.45 9 2 8.55 2 8S2.45 7 3 7M1 12C1 11.45 1.45 11 2 11H5V13H2C1.45 13 1 12.55 1 12Z"
      />
    </svg>
  );
}
