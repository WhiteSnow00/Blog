import { SVGProps } from "react";
const SvgHomeFill = (props: SVGProps<SVGSVGElement> & { size: string }) => (
  <div className={props.className}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      viewBox="0 0 48 48"
    >
      <path d="M11 42q-1.25 0-2.125-.875T8 39V19.5q0-.7.325-1.35.325-.65.875-1.05l13-9.75q.4-.3.85-.45.45-.15.95-.15.5 0 .95.15.45.15.85.45l13 9.75q.55.4.875 1.05.325.65.325 1.35V39q0 1.25-.875 2.125T37 42h-9V28h-8v14Z" />
    </svg>
  </div>
);
export default SvgHomeFill;
