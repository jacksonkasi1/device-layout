import React, { useEffect, useRef, useState } from "react";

const LaptopLayout = ({ element }) => {
  const myElementRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [borderRadius, setBorderRadius] = useState(0);

  useEffect(() => {
    const el = myElementRef.current;
    const updateDimensions = () => {
      const { x, y, width, height } = el.getBoundingClientRect();
      // console.log(`x: ${x}, y: ${y}, width: ${width}, height: ${height}`);
      setPosition({ x: x + 15, y: y + 15 });
      setDimensions({ width: width - 30, height: (height - 30) / 1.03 });
      setBorderRadius((width + height) / 150); // adjust the value as needed
    };
    window.addEventListener("resize", updateDimensions);
    updateDimensions();
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <div>
      <svg
        width={1008}
        height={635}
        viewBox="0 0 1008 635"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="laptop_layout"
      >
        <g filter="url(#filter0_f_4_49)">
          <ellipse cx={504.5} cy={586} rx={452.5} ry={5} fill="black" />
        </g>
        <path
          d="M99 28C99 13.0883 111.088 1 126 1H886C900.912 1 913 13.0883 913 28V550C913 551.657 911.657 553 910 553H102C100.343 553 99 551.657 99 550V28Z"
          fill="#1A202C"
          stroke="#4A5568"
          strokeWidth={2}
          ref={myElementRef}
        />
        <path
          d="M103 27C103 14.8497 112.85 5 125 5H887C899.15 5 909 14.8497 909 27V533H103V27Z"
          fill="black"
        />
        <path
          d="M0 552C0 550.895 0.895431 550 2 550H1006C1007.1 550 1008 550.895 1008 552V568H0V552Z"
          fill="#A3ACB1"
        />
        <path
          d="M0 552C0 550.895 0.895431 550 2 550H1006C1007.1 550 1008 550.895 1008 552V568H0V552Z"
          fill="url(#paint0_linear_4_49)"
        />
        <path
          d="M0 568H1008L987.646 572.105C961.613 577.355 935.123 580 908.566 580H97.9089C68.724 580 39.6267 576.806 11.1367 570.475L0 568Z"
          fill="#647279"
        />
        <path
          d="M0 568H1008L987.646 572.105C961.613 577.355 935.123 580 908.566 580H97.9089C68.724 580 39.6267 576.806 11.1367 570.475L0 568Z"
          fill="url(#paint1_linear_4_49)"
        />

        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M421.033 550C421.547 557.818 428.052 564 436 564H573C580.948 564 587.453 557.818 587.967 550H421.033Z"
          fill="#96A1A8"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M421.033 550C421.547 557.818 428.052 564 436 564H573C580.948 564 587.453 557.818 587.967 550H421.033Z"
          fill="url(#paint2_linear_4_49)"
        />
        <defs>
          <filter
            id="filter0_f_4_49"
            x={8}
            y={537}
            width={993}
            height={98}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation={22}
              result="effect1_foregroundBlur_4_49"
            />
          </filter>
          <linearGradient
            id="paint0_linear_4_49"
            x1={-1.94452e-10}
            y1={559}
            x2={1008}
            y2={559}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0D1012" />
            <stop offset={0.0295345} stopColor="#CAD4DB" />
            <stop offset={0.0625} stopColor="#242729" />
            <stop offset={0.133609} stopColor="#A3ACB1" />
            <stop offset={0.865967} stopColor="#A3ACB1" />
            <stop offset={0.941937} stopColor="#242729" />
            <stop offset={0.971275} stopColor="#CAD4DB" />
            <stop offset={0.996436} stopColor="#0D1012" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_4_49"
            x1={504}
            y1={568}
            x2={504}
            y2={580}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#7A7F83" />
            <stop offset={1} stopColor="#0B0B0E" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_4_49"
            x1={437.5}
            y1={558.5}
            x2={574.5}
            y2={558.5}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3C3C3C" />
            <stop offset={0.317518} stopColor="#3C3C3C" stopOpacity={0} />
            <stop offset={0.660584} stopColor="#3C3C3C" stopOpacity={0} />
            <stop offset={1} stopColor="#444444" />
          </linearGradient>
        </defs>
      </svg>
      {element && (
        <div
          style={{
            position: "absolute",
            left: position.x,
            top: position.y,
            ...dimensions,
            overflowX: "hidden",
            overflowY: "scroll",
            borderRadius: borderRadius + "px",
          }}
          className="container"
        >
          <div
            style={{ borderRadius: borderRadius + "px" }}
            className="laptop_layout_child"
          >
            {element}
          </div>
        </div>
      )}
    </div>
  );
};

export default LaptopLayout;
