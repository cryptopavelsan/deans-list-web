// Next
import Link from "next/link";
// Types
import type { FC } from "react";

const Step3: FC = () => {
  return (
    <div
      className="relative flex h-screen w-full flex-col bg-[url('/images/feed.jpg')] bg-cover bg-no-repeat"
      id="step3"
    >
      <div className="mt-12 mb-12 flex h-full flex-col items-center justify-center">
        <div
          className="mb-12 mt-12 text-center font-tt text-[4rem] leading-[1]"
          id="step3_heading"
        >
          Step 3: Now That You Are
          <br />
          &quot;One Of Us&quot;
          <br />
        </div>
        <div className="lh-spc lh-spc mb-12 ml-48 mr-48 text-left font-tt text-[1.5rem]">
          <h2 className="text-[1.5rem]">
            Upon successful onboarding, you will be assigned the &quot;Citizen&quot; role.
          </h2>
          <p className="pt-6 text-[1.5rem]">
            This allows you access to the Discord server and you may:
          </p>
          <ul className="list-disc">
            <li>
              Participate in discussions on operations, strategy and initiatives
              of the DAO
              <br />
            </li>
            <li>
              Propose an agenda item for and participate in weekly DAO calls
              <br />
            </li>
            <li>
              Contribute to governance by proposing and voting on Realms
              <br />
            </li>
          </ul>
        </div>
        <Link href="#step4" scroll={false}>
          <button className="group steps flex h-14 w-max items-center justify-center gap-x-2 rounded bg-white pl-8 pr-7 font-space text-lg font-medium text-black">
            Proceed to Step 4
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-7 w-7 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Step3;
