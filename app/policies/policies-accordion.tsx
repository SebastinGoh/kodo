"use client";

import { useEffect } from "react";
import policies from "@/app/policies/policies";
import "tw-elements/dist/css/tw-elements.min.css";

const PoliciesAccordion = () => {
  useEffect(() => {
    const init = async () => {
      const { Collapse, initTE } = await import("tw-elements");
      initTE({ Collapse });
    };
    init();
  }, []);

  const items = policies.map((entry) => {
    const { id, policy, bookmark, details } = entry;
    const head = "head" + id;
    const flush = "flush" + id;
    return (
        <div key={id} id={bookmark} className="border border-slate-900 border-l-0 border-r-0 border-t-0">
            <h2 key={head} className="underline" id={head}>
                <button
                className="group relative flex w-full items-center text-left px-5 py-4 transition [overflow-anchor:none] hover:z-[2] focus:z-[3]"
                type="button"
                data-te-collapse-init
                data-te-collapse-collapsed
                data-te-target={`#${flush}`}
                aria-expanded="false"
                aria-controls={flush}
                >
                    {policy}
                    <span className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </span>
                </button>
            </h2>
            <div key={flush} id={flush} className="!visible border-0 hidden" data-te-collapse-item aria-labelledby={flush}>
                <div className="px-5 py-4 text-sm">
                    {details.map((paragraph) => (
                        <p className="pb-4">{paragraph}</p>
                    ))}
                </div>
            </div>
        </div>
    )
  });

  return (
    <div className="rounded-lg text-left px-4">
        {items}
    </div>
  );
};

export default PoliciesAccordion;