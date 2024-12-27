import React, { useEffect } from "react";

interface SectionHeaderProps {
  text: string;
  orientation?: "vertical" | "horizontal";
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ text, orientation = "horizontal" }) => {
  useEffect(() => {
    const content = document.querySelector(`#section-${text}`);
    const contentClone = document.querySelector(`#content-${text}`);
    if (content && contentClone) {
      const clone = contentClone.cloneNode(true) as HTMLElement;
      content.append(clone);
    }
  }, [text]);

  const Arrow: React.FC<{ color: string }> = ({ color }) => (
    <svg
      width="74"
      height="68"
      viewBox="0 0 74 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.39453 30.4205L0.39453 37.5791L52.5965 37.5791C51.2119 38.6606 49.9007 39.8483 48.6743 41.1342C45.3549 44.6148 42.7218 48.7469 40.9253 53.2945C39.1288 57.8422 38.2042 62.7163 38.2042 67.6387L45.2183 67.6387C45.2183 51.051 58.0826 37.604 73.9515 37.604L73.9515 30.3956C58.0826 30.3957 45.2183 16.9487 45.2183 0.360952L38.2042 0.360953C38.2042 5.28329 39.1288 10.1574 40.9253 14.7051C42.7218 19.2527 45.3549 23.3848 48.6743 26.8654C49.9007 28.1513 51.2119 29.339 52.5965 30.4205L0.39453 30.4205Z"
        fill={color}
      />
    </svg>
  );

  return orientation === "vertical" ? (
    <div className="section-header vertical" id={`section-${text}`}>
      <div className="content" id={`content-${text}`}>
        {[...Array(4)].map((_, index) => (
          <div key={index}>
            <h1>
              <span>{text}</span>
            </h1>
            <Arrow color={index % 2 === 0 ? "#242424" : "white"} />
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className="section-header" id={`section-${text}`}>
      <div className="content" id={`content-${text}`}>
        {[...Array(8)].map((_, index) => (
          <div key={index}>
            <h1>
              {index % 2 === 0 ? <span>{text}</span> : text}
            </h1>
            <Arrow color={index % 2 === 0 ? "#242424" : "white"} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionHeader;
