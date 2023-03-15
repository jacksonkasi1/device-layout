import React, { useEffect, useRef, useState } from "react";
import dark01 from "./assets/images/dark-01.png";

const IphoneLayout = ({ element }) => {
  
  const myElementRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [borderRadius, setBorderRadius] = useState(0);

  useEffect(() => {
    const el = myElementRef.current;
    const updateDimensions = () => {
      const { x, y, width, height } = el.getBoundingClientRect();
      console.log(`x: ${x}, y: ${y}, width: ${width}, height: ${height}`);
      setPosition({ x: x + 12.5, y: y + 15 });
      setDimensions({ width: width - 25, height: height- 27  });
      setBorderRadius((width + height) / 30); // adjust the value as needed
    };
    window.addEventListener("resize", updateDimensions);
    updateDimensions();
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);


  return (
    <div>
    <svg
    width={438}
    height={884}
    viewBox='0 0 438 884'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className='iphone_layout'
  >
    <g filter='url(#filter0_iiiiiiii_6_1796)'>
      <rect
        x={4}
        width={429}
        height={884}
        rx={68}
        fill='url(#paint0_linear_6_1796)'
      />
    </g>
    <rect
      width={6}
      height={9}
      transform='matrix(-1 0 0 1 433 87)'
      fill='url(#paint1_linear_6_1796)'
    />
    <rect
      width={5}
      height={9}
      transform='matrix(0 1 1 0 341 1)'
      fill='url(#paint2_linear_6_1796)'
    />
    <rect x={4} y={87} width={6} height={9} fill='url(#paint3_linear_6_1796)' />
    <rect
      width={7}
      height={9}
      transform='matrix(-1 0 0 1 434 788)'
      fill='url(#paint4_linear_6_1796)'
    />
    <rect
      x={88}
      y={884}
      width={7}
      height={10}
      transform='rotate(-90 88 884)'
      fill='url(#paint5_linear_6_1796)'
    />
    <rect
      x={4}
      y={788}
      width={6}
      height={9}
      fill='url(#paint6_linear_6_1796)'
    />
    <g filter='url(#filter1_ddi_6_1796)'>
      <path
        d='M10 105.2C10 70.4767 10 53.1151 16.7576 39.8526C22.7017 28.1865 32.1865 18.7017 43.8526 12.7576C57.1151 6 74.4767 6 109.2 6H328.8C363.523 6 380.885 6 394.147 12.7576C405.813 18.7017 415.298 28.1865 421.242 39.8526C428 53.1151 428 70.4767 428 105.2V778.8C428 813.523 428 830.885 421.242 844.147C415.298 855.813 405.813 865.298 394.147 871.242C380.885 878 363.523 878 328.8 878H109.2C74.4767 878 57.1151 878 43.8526 871.242C32.1865 865.298 22.7017 855.813 16.7576 844.147C10 830.885 10 813.523 10 778.8V105.2Z'
        fill='black'
        ref={myElementRef}
      />
    </g>
    <g filter='url(#filter2_iiiiiii_6_1796)'>
      <path
        d='M434 264H436C437.105 264 438 264.895 438 266V364C438 365.105 437.105 366 436 366H434V264Z'
        fill='url(#paint7_linear_6_1796)'
      />
    </g>
    <g filter='url(#filter3_iiiiii_6_1796)'>
      <path
        d='M4 326H2C0.895431 326 0 326.895 0 328V388C0 389.105 0.895431 390 2 390H4V326Z'
        fill='url(#paint8_linear_6_1796)'
      />
    </g>
    <g filter='url(#filter4_iiiiii_6_1796)'>
      <path
        d='M4 240H2C0.895431 240 0 240.895 0 242V302C0 303.105 0.895431 304 2 304H4V240Z'
        fill='url(#paint9_linear_6_1796)'
      />
    </g>
    <g filter='url(#filter5_iiiiii_6_1796)'>
      <path
        d='M4 178H2C0.895431 178 0 178.895 0 180V207C0 208.105 0.895431 209 2 209H4V178Z'
        fill='url(#paint10_linear_6_1796)'
      />
    </g>
    <g filter='url(#filter6_i_6_1796)'>
      <path
        d='M182 6H256V10C256 12.7614 253.761 15 251 15H187C184.239 15 182 12.7614 182 10V6Z'
        fill='black'
      />
    </g>
    <g filter='url(#filter7_ii_6_1796)'>
      <rect x={185} y={8} width={68} height={4} rx={2} fill='#131313' />
      <rect
        x={185}
        y={8}
        width={68}
        height={4}
        rx={2}
        fill='url(#pattern0)'
        fillOpacity={0.25}
      />
    </g>
    <path
      d='M121 20H133.22C134.41 20 135.005 20 135.495 20.1257C136.908 20.4885 138.011 21.592 138.374 23.0052C138.5 23.4947 138.5 24.0898 138.5 25.28V25.28C138.5 31.5286 138.5 34.6529 139.16 37.2225C141.065 44.6418 146.858 50.4353 154.278 52.3402C156.847 53 159.971 53 166.22 53H272.28C278.529 53 281.653 53 284.222 52.3402C291.642 50.4353 297.435 44.6418 299.34 37.2225C300 34.6529 300 31.5286 300 25.28V25.28C300 24.0898 300 23.4947 300.126 23.0052C300.489 21.592 301.592 20.4885 303.005 20.1257C303.495 20 304.09 20 305.28 20H316V16H121V20Z'
      fill='black'
    />
    <circle cx={161} cy={31} r={8} fill='#090909' />
    <g filter='url(#filter8_f_6_1796)'>
      <circle cx={161} cy={31} r={5} fill='#000100' />
      <circle cx={161} cy={31} r={5} fill='url(#paint11_radial_6_1796)' />
      <circle cx={161} cy={31} r={5} fill='url(#paint12_radial_6_1796)' />
      <circle cx={161} cy={31} r={5} fill='url(#paint13_radial_6_1796)' />
      <circle cx={161} cy={31} r={5} fill='url(#paint14_radial_6_1796)' />
      <circle cx={161} cy={31} r={5} fill='url(#paint15_radial_6_1796)' />
      <circle cx={161} cy={31} r={5} fill='url(#paint16_radial_6_1796)' />
    </g>
    <defs>
      <filter
        id='filter0_iiiiiiii_6_1796'
        x={3}
        y={-1}
        width={431}
        height={886}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend
          mode='normal'
          in='SourceGraphic'
          in2='BackgroundImageFix'
          result='shape'
        />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dx={3} />
        <feGaussianBlur stdDeviation={0.25} />
        <feComposite in2='hardAlpha' operator='arithmetic' k2={-1} k3={1} />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0'
        />
        <feBlend
          mode='normal'
          in2='shape'
          result='effect1_innerShadow_6_1796'
        />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dx={-3} />
        <feGaussianBlur stdDeviation={0.25} />
        <feComposite in2='hardAlpha' operator='arithmetic' k2={-1} k3={1} />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0'
        />
        <feBlend
          mode='normal'
          in2='effect1_innerShadow_6_1796'
          result='effect2_innerShadow_6_1796'
        />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dy={3} />
        <feGaussianBlur stdDeviation={0.25} />
        <feComposite in2='hardAlpha' operator='arithmetic' k2={-1} k3={1} />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0'
        />
        <feBlend
          mode='normal'
          in2='effect2_innerShadow_6_1796'
          result='effect3_innerShadow_6_1796'
        />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dy={-3} />
        <feGaussianBlur stdDeviation={0.25} />
        <feComposite in2='hardAlpha' operator='arithmetic' k2={-1} k3={1} />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0'
        />
        <feBlend
          mode='normal'
          in2='effect3_innerShadow_6_1796'
          result='effect4_innerShadow_6_1796'
        />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dx={1} />
        <feGaussianBlur stdDeviation={0.5} />
        <feComposite in2='hardAlpha' operator='arithmetic' k2={-1} k3={1} />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 0.14902 0 0 0 0 0.223529 0 0 0 0 0.298039 0 0 0 1 0'
        />
        <feBlend
          mode='normal'
          in2='effect4_innerShadow_6_1796'
          result='effect5_innerShadow_6_1796'
        />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dx={-1} />
        <feGaussianBlur stdDeviation={0.5} />
        <feComposite in2='hardAlpha' operator='arithmetic' k2={-1} k3={1} />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 0.14902 0 0 0 0 0.223529 0 0 0 0 0.298039 0 0 0 1 0'
        />
        <feBlend
          mode='normal'
          in2='effect5_innerShadow_6_1796'
          result='effect6_innerShadow_6_1796'
        />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dy={1} />
        <feGaussianBlur stdDeviation={0.5} />
        <feComposite in2='hardAlpha' operator='arithmetic' k2={-1} k3={1} />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 0.14902 0 0 0 0 0.223529 0 0 0 0 0.298039 0 0 0 1 0'
        />
        <feBlend
          mode='normal'
          in2='effect6_innerShadow_6_1796'
          result='effect7_innerShadow_6_1796'
        />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dy={-1} />
        <feGaussianBlur stdDeviation={0.5} />
        <feComposite in2='hardAlpha' operator='arithmetic' k2={-1} k3={1} />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 0.14902 0 0 0 0 0.223529 0 0 0 0 0.298039 0 0 0 1 0'
        />
        <feBlend
          mode='normal'
          in2='effect7_innerShadow_6_1796'
          result='effect8_innerShadow_6_1796'
        />
      </filter>
      <filter
        id='filter1_ddi_6_1796'
        x={7.98144}
        y={3.98144}
        width={422.037}
        height={879.019}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset />
        <feGaussianBlur stdDeviation={1.00928} />
        <feComposite in2='hardAlpha' operator='out' />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0'
        />
        <feBlend
          mode='normal'
          in2='BackgroundImageFix'
          result='effect1_dropShadow_6_1796'
        />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={0.5} />
        <feComposite in2='hardAlpha' operator='out' />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
        />
        <feBlend
          mode='normal'
          in2='effect1_dropShadow_6_1796'
          result='effect2_dropShadow_6_1796'
        />
        <feBlend
          mode='normal'
          in='SourceGraphic'
          in2='effect2_dropShadow_6_1796'
          result='shape'
        />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset />
        <feGaussianBlur stdDeviation={4.5} />
        <feComposite in2='hardAlpha' operator='arithmetic' k2={-1} k3={1} />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0'
        />
        <feBlend
          mode='normal'
          in2='shape'
          result='effect3_innerShadow_6_1796'
        />
      </filter>
      <filter
        id='filter2_iiiiiii_6_1796'
        x={432}
        y={264}
        width={6}
        height={102}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend
          mode='normal'
          in='SourceGraphic'
          in2='BackgroundImageFix'
          result='shape'
        />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feMorphology
          radius={6}
          operator='dilate'
          in='SourceAlpha'
          result='effect1_innerShadow_6_1796'
        />
        <feOffset dx={-7} />
        <feGaussianBlur stdDeviation={1.5} />
        <feComposite in2='hardAlpha' operator='arithmetic' k2={-1} k3={1} />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 0.8125 0 0 0 0 0.718047 0 0 0 0 0.707552 0 0 0 1 0'
        />
        <feBlend
          mode='normal'
          in2='shape'
          result='effect1_innerShadow_6_1796'
        />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feMorphology
          radius={5}
          operator='dilate'
          in='SourceAlpha'
          result='effect2_innerShadow_6_1796'
        />
        <feOffset dy={-9} />
        <feGaussianBlur stdDeviation={1} />
        <feComposite in2='hardAlpha' operator='arithmetic' k2={-1} k3={1} />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 0.909804 0 0 0 0 0.94902 0 0 0 0 1 0 0 0 1 0'
        />
        <feBlend
          mode='normal'
          in2='effect1_innerShadow_6_1796'
          result='effect2_innerShadow_6_1796'
        />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feMorphology
          radius={5}
          operator='dilate'
          in='SourceAlpha'
          result='effect3_innerShadow_6_1796'
        />
        <feOffset dy={9} />
        <feGaussianBlur stdDeviation={1} />
        <feComposite in2='hardAlpha' operator='arithmetic' k2={-1} k3={1} />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 0.908333 0 0 0 0 0.949256 0 0 0 0 1 0 0 0 1 0'
        />
        <feBlend
          mode='normal'
          in2='effect2_innerShadow_6_1796'
          result='effect3_innerShadow_6_1796'
        />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feMorphology
          radius={2}
          operator='dilate'
          in='SourceAlpha'
          result='effect4_innerShadow_6_1796'
        />
        <feOffset dy={-3} />
        <feGaussianBlur stdDeviation={1} />
        <feComposite in2='hardAlpha' operator='arithmetic' k2={-1} k3={1} />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 0.164706 0 0 0 0 0.2 0 0 0 0 0.243137 0 0 0 1 0'
        />
        <feBlend
          mode='normal'
          in2='effect3_innerShadow_6_1796'
          result='effect4_innerShadow_6_1796'
        />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feMorphology
          radius={2}
          operator='dilate'
          in='SourceAlpha'
          result='effect5_innerShadow_6_1796'
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={1} />
        <feComposite in2='hardAlpha' operator='arithmetic' k2={-1} k3={1} />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 0.164706 0 0 0 0 0.2 0 0 0 0 0.243137 0 0 0 1 0'
        />
        <feBlend
          mode='normal'
          in2='effect4_innerShadow_6_1796'
          result='effect5_innerShadow_6_1796'
        />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feMorphology
          radius={2}
          operator='dilate'
          in='SourceAlpha'
          result='effect6_innerShadow_6_1796'
        />
        <feOffset dx={-3} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2='hardAlpha' operator='arithmetic' k2={-1} k3={1} />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
        />
        <feBlend
          mode='normal'
          in2='effect5_innerShadow_6_1796'
          result='effect6_innerShadow_6_1796'
        />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feMorphology
          radius={2}
          operator='dilate'
          in='SourceAlpha'
          result='effect7_innerShadow_6_1796'
        />
        <feOffset dx={-3} />
        <feGaussianBlur stdDeviation={0.5} />
        <feComposite in2='hardAlpha' operator='arithmetic' k2={-1} k3={1} />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
        />
        <feBlend
          mode='normal'
          in2='effect6_innerShadow_6_1796'
          result='effect7_innerShadow_6_1796'
        />
      </filter>
      <filter
        id='filter3_iiiiii_6_1796'
        x={0}
        y={326}
        width={6}
        height={64}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend
          mode='normal'
          in='SourceGraphic'
          in2='BackgroundImageFix'
          result='shape'
        />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feMorphology
          radius={5}
          operator='dilate'
          in='SourceAlpha'
          result='effect1_innerShadow_6_1796'
        />
        <feOffset dy={-9} />
        <feGaussianBlur stdDeviation={1} />
        <feComposite in2='hardAlpha' operator='arithmetic' k2={-1} k3={1} />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 0.909804 0 0 0 0 0.94902 0 0 0 0 1 0 0 0 1 0'
        />
        <feBlend
          mode='normal'
          in2='shape'
          result='effect1_innerShadow_6_1796'
        />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feMorphology
          radius={5}
          operator='dilate'
          in='SourceAlpha'
          result='effect2_innerShadow_6_1796'
        />
        <feOffset dy={9} />
        <feGaussianBlur stdDeviation={1} />
        <feComposite in2='hardAlpha' operator='arithmetic' k2={-1} k3={1} />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 0.908333 0 0 0 0 0.949256 0 0 0 0 1 0 0 0 1 0'
        />
        <feBlend
          mode='normal'
          in2='effect1_innerShadow_6_1796'
          result='effect2_innerShadow_6_1796'
        />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feMorphology
          radius={2}
          operator='dilate'
          in='SourceAlpha'
          result='effect3_innerShadow_6_1796'
        />
        <feOffset dy={-3} />
        <feGaussianBlur stdDeviation={1} />
        <feComposite in2='hardAlpha' operator='arithmetic' k2={-1} k3={1} />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 0.164706 0 0 0 0 0.2 0 0 0 0 0.243137 0 0 0 1 0'
        />
        <feBlend
          mode='normal'
          in2='effect2_innerShadow_6_1796'
          result='effect3_innerShadow_6_1796'
        />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feMorphology
          radius={2}
          operator='dilate'
          in='SourceAlpha'
          result='effect4_innerShadow_6_1796'
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={1} />
        <feComposite in2='hardAlpha' operator='arithmetic' k2={-1} k3={1} />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 0.164706 0 0 0 0 0.2 0 0 0 0 0.243137 0 0 0 1 0'
        />
        <feBlend
          mode='normal'
          in2='effect3_innerShadow_6_1796'
          result='effect4_innerShadow_6_1796'
        />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feMorphology
          radius={2}
          operator='dilate'
          in='SourceAlpha'
          result='effect5_innerShadow_6_1796'
        />
        <feOffset dx={3} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2='hardAlpha' operator='arithmetic' k2={-1} k3={1} />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
        />
        <feBlend
          mode='normal'
          in2='effect4_innerShadow_6_1796'
          result='effect5_innerShadow_6_1796'
        />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feMorphology
          radius={2}
          operator='dilate'
          in='SourceAlpha'
          result='effect6_innerShadow_6_1796'
        />
        <feOffset dx={3} />
        <feGaussianBlur stdDeviation={0.5} />
        <feComposite in2='hardAlpha' operator='arithmetic' k2={-1} k3={1} />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
        />
        <feBlend
          mode='normal'
          in2='effect5_innerShadow_6_1796'
          result='effect6_innerShadow_6_1796'
        />
      </filter>
      <filter
        id='filter4_iiiiii_6_1796'
        x={0}
        y={240}
        width={6}
        height={64}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend
          mode='normal'
          in='SourceGraphic'
          in2='BackgroundImageFix'
          result='shape'
        />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feMorphology
          radius={5}
          operator='dilate'
          in='SourceAlpha'
          result='effect1_innerShadow_6_1796'
        />
        <feOffset dy={-9} />
        <feGaussianBlur stdDeviation={1} />
        <feComposite in2='hardAlpha' operator='arithmetic' k2={-1} k3={1} />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 0.909804 0 0 0 0 0.94902 0 0 0 0 1 0 0 0 1 0'
        />
        <feBlend
          mode='normal'
          in2='shape'
          result='effect1_innerShadow_6_1796'
        />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feMorphology
          radius={5}
          operator='dilate'
          in='SourceAlpha'
          result='effect2_innerShadow_6_1796'
        />
        <feOffset dy={9} />
        <feGaussianBlur stdDeviation={1} />
        <feComposite in2='hardAlpha' operator='arithmetic' k2={-1} k3={1} />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 0.908333 0 0 0 0 0.949256 0 0 0 0 1 0 0 0 1 0'
        />
        <feBlend
          mode='normal'
          in2='effect1_innerShadow_6_1796'
          result='effect2_innerShadow_6_1796'
        />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feMorphology
          radius={2}
          operator='dilate'
          in='SourceAlpha'
          result='effect3_innerShadow_6_1796'
        />
        <feOffset dy={-3} />
        <feGaussianBlur stdDeviation={1} />
        <feComposite in2='hardAlpha' operator='arithmetic' k2={-1} k3={1} />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 0.164706 0 0 0 0 0.2 0 0 0 0 0.243137 0 0 0 1 0'
        />
        <feBlend
          mode='normal'
          in2='effect2_innerShadow_6_1796'
          result='effect3_innerShadow_6_1796'
        />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feMorphology
          radius={2}
          operator='dilate'
          in='SourceAlpha'
          result='effect4_innerShadow_6_1796'
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={1} />
        <feComposite in2='hardAlpha' operator='arithmetic' k2={-1} k3={1} />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 0.164706 0 0 0 0 0.2 0 0 0 0 0.243137 0 0 0 1 0'
        />
        <feBlend
          mode='normal'
          in2='effect3_innerShadow_6_1796'
          result='effect4_innerShadow_6_1796'
        />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feMorphology
          radius={2}
          operator='dilate'
          in='SourceAlpha'
          result='effect5_innerShadow_6_1796'
        />
        <feOffset dx={3} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2='hardAlpha' operator='arithmetic' k2={-1} k3={1} />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
        />
        <feBlend
          mode='normal'
          in2='effect4_innerShadow_6_1796'
          result='effect5_innerShadow_6_1796'
        />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feMorphology
          radius={2}
          operator='dilate'
          in='SourceAlpha'
          result='effect6_innerShadow_6_1796'
        />
        <feOffset dx={3} />
        <feGaussianBlur stdDeviation={0.5} />
        <feComposite in2='hardAlpha' operator='arithmetic' k2={-1} k3={1} />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
        />
        <feBlend
          mode='normal'
          in2='effect5_innerShadow_6_1796'
          result='effect6_innerShadow_6_1796'
        />
      </filter>
      <filter
        id='filter5_iiiiii_6_1796'
        x={0}
        y={178}
        width={6}
        height={31}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend
          mode='normal'
          in='SourceGraphic'
          in2='BackgroundImageFix'
          result='shape'
        />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feMorphology
          radius={5}
          operator='dilate'
          in='SourceAlpha'
          result='effect1_innerShadow_6_1796'
        />
        <feOffset dy={-9} />
        <feGaussianBlur stdDeviation={1} />
        <feComposite in2='hardAlpha' operator='arithmetic' k2={-1} k3={1} />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 0.909804 0 0 0 0 0.94902 0 0 0 0 1 0 0 0 1 0'
        />
        <feBlend
          mode='normal'
          in2='shape'
          result='effect1_innerShadow_6_1796'
        />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feMorphology
          radius={5}
          operator='dilate'
          in='SourceAlpha'
          result='effect2_innerShadow_6_1796'
        />
        <feOffset dy={9} />
        <feGaussianBlur stdDeviation={1} />
        <feComposite in2='hardAlpha' operator='arithmetic' k2={-1} k3={1} />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 0.908333 0 0 0 0 0.949256 0 0 0 0 1 0 0 0 1 0'
        />
        <feBlend
          mode='normal'
          in2='effect1_innerShadow_6_1796'
          result='effect2_innerShadow_6_1796'
        />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feMorphology
          radius={2}
          operator='dilate'
          in='SourceAlpha'
          result='effect3_innerShadow_6_1796'
        />
        <feOffset dy={-3} />
        <feGaussianBlur stdDeviation={1} />
        <feComposite in2='hardAlpha' operator='arithmetic' k2={-1} k3={1} />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 0.164706 0 0 0 0 0.2 0 0 0 0 0.243137 0 0 0 1 0'
        />
        <feBlend
          mode='normal'
          in2='effect2_innerShadow_6_1796'
          result='effect3_innerShadow_6_1796'
        />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feMorphology
          radius={2}
          operator='dilate'
          in='SourceAlpha'
          result='effect4_innerShadow_6_1796'
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={1} />
        <feComposite in2='hardAlpha' operator='arithmetic' k2={-1} k3={1} />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 0.164706 0 0 0 0 0.2 0 0 0 0 0.243137 0 0 0 1 0'
        />
        <feBlend
          mode='normal'
          in2='effect3_innerShadow_6_1796'
          result='effect4_innerShadow_6_1796'
        />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feMorphology
          radius={2}
          operator='dilate'
          in='SourceAlpha'
          result='effect5_innerShadow_6_1796'
        />
        <feOffset dx={3} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2='hardAlpha' operator='arithmetic' k2={-1} k3={1} />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
        />
        <feBlend
          mode='normal'
          in2='effect4_innerShadow_6_1796'
          result='effect5_innerShadow_6_1796'
        />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feMorphology
          radius={2}
          operator='dilate'
          in='SourceAlpha'
          result='effect6_innerShadow_6_1796'
        />
        <feOffset dx={3} />
        <feGaussianBlur stdDeviation={0.5} />
        <feComposite in2='hardAlpha' operator='arithmetic' k2={-1} k3={1} />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
        />
        <feBlend
          mode='normal'
          in2='effect5_innerShadow_6_1796'
          result='effect6_innerShadow_6_1796'
        />
      </filter>
      <filter
        id='filter6_i_6_1796'
        x={182}
        y={6}
        width={74}
        height={9}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend
          mode='normal'
          in='SourceGraphic'
          in2='BackgroundImageFix'
          result='shape'
        />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset />
        <feGaussianBlur stdDeviation={1} />
        <feComposite in2='hardAlpha' operator='arithmetic' k2={-1} k3={1} />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0'
        />
        <feBlend
          mode='normal'
          in2='shape'
          result='effect1_innerShadow_6_1796'
        />
      </filter>
      <filter
        id='filter7_ii_6_1796'
        x={184}
        y={8}
        width={70}
        height={4}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend
          mode='normal'
          in='SourceGraphic'
          in2='BackgroundImageFix'
          result='shape'
        />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feMorphology
          radius={2}
          operator='dilate'
          in='SourceAlpha'
          result='effect1_innerShadow_6_1796'
        />
        <feOffset dx={4} />
        <feGaussianBlur stdDeviation={1.5} />
        <feComposite in2='hardAlpha' operator='arithmetic' k2={-1} k3={1} />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.08 0'
        />
        <feBlend
          mode='normal'
          in2='shape'
          result='effect1_innerShadow_6_1796'
        />
        <feColorMatrix
          in='SourceAlpha'
          type='matrix'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feMorphology
          radius={2}
          operator='dilate'
          in='SourceAlpha'
          result='effect2_innerShadow_6_1796'
        />
        <feOffset dx={-4} />
        <feGaussianBlur stdDeviation={1.5} />
        <feComposite in2='hardAlpha' operator='arithmetic' k2={-1} k3={1} />
        <feColorMatrix
          type='matrix'
          values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.08 0'
        />
        <feBlend
          mode='normal'
          in2='effect1_innerShadow_6_1796'
          result='effect2_innerShadow_6_1796'
        />
      </filter>
      <pattern
        id='pattern0'
        patternContentUnits='objectBoundingBox'
        width={1}
        height={1}
      >
        <use transform='translate(0 -3.13889) scale(0.00163399 0.0277778)' />
      </pattern>
      <filter
        id='filter8_f_6_1796'
        x={153.981}
        y={23.9814}
        width={14.0371}
        height={14.0371}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend
          mode='normal'
          in='SourceGraphic'
          in2='BackgroundImageFix'
          result='shape'
        />
        <feGaussianBlur
          stdDeviation={1.00928}
          result='effect1_foregroundBlur_6_1796'
        />
      </filter>
      <linearGradient
        id='paint0_linear_6_1796'
        x1={218.5}
        y1={0}
        x2={218.5}
        y2={884}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#627389' />
        <stop offset={1} stopColor='#4A5D71' />
      </linearGradient>
      <linearGradient
        id='paint1_linear_6_1796'
        x1={6}
        y1={4.20974}
        x2={3.38932e-8}
        y2={4.20974}
        gradientUnits='userSpaceOnUse'
      >
        <stop offset={0.286458} stopColor='#78879A' />
        <stop offset={0.651042} stopColor='#66778D' stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id='paint2_linear_6_1796'
        x1={5}
        y1={4.20974}
        x2={2.82444e-8}
        y2={4.20974}
        gradientUnits='userSpaceOnUse'
      >
        <stop offset={0.286458} stopColor='#78879A' />
        <stop offset={0.651042} stopColor='#66778D' stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id='paint3_linear_6_1796'
        x1={10}
        y1={91.2097}
        x2={4}
        y2={91.2097}
        gradientUnits='userSpaceOnUse'
      >
        <stop offset={0.286458} stopColor='#78879A' />
        <stop offset={0.651042} stopColor='#66778D' stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id='paint4_linear_6_1796'
        x1={7}
        y1={4.20974}
        x2={3.95421e-8}
        y2={4.20974}
        gradientUnits='userSpaceOnUse'
      >
        <stop offset={0.286458} stopColor='#78879A' />
        <stop offset={0.651042} stopColor='#66778D' stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id='paint5_linear_6_1796'
        x1={95}
        y1={888.677}
        x2={88}
        y2={888.677}
        gradientUnits='userSpaceOnUse'
      >
        <stop offset={0.286458} stopColor='#78879A' />
        <stop offset={0.651042} stopColor='#66778D' stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id='paint6_linear_6_1796'
        x1={10}
        y1={792.21}
        x2={4}
        y2={792.21}
        gradientUnits='userSpaceOnUse'
      >
        <stop offset={0.286458} stopColor='#78879A' />
        <stop offset={0.651042} stopColor='#66778D' stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id='paint7_linear_6_1796'
        x1={436}
        y1={264}
        x2={436}
        y2={366}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#C0D1E6' />
        <stop offset={1} stopColor='#C0D1E6' />
      </linearGradient>
      <linearGradient
        id='paint8_linear_6_1796'
        x1={2}
        y1={326}
        x2={2}
        y2={390}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#C0D1E6' />
        <stop offset={1} stopColor='#C0D1E6' />
      </linearGradient>
      <linearGradient
        id='paint9_linear_6_1796'
        x1={2}
        y1={240}
        x2={2}
        y2={304}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#C0D1E6' />
        <stop offset={1} stopColor='#C0D1E6' />
      </linearGradient>
      <linearGradient
        id='paint10_linear_6_1796'
        x1={2}
        y1={178}
        x2={2}
        y2={209}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#C0D1E6' />
        <stop offset={1} stopColor='#C0D1E6' />
      </linearGradient>
      <radialGradient
        id='paint11_radial_6_1796'
        cx={0}
        cy={0}
        r={1}
        gradientUnits='userSpaceOnUse'
        gradientTransform='translate(162.875 29.125) rotate(149.931) scale(2.74431)'
      >
        <stop stopColor='#0052D0' stopOpacity={0.75} />
        <stop offset={0.806722} stopColor='#043581' stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id='paint12_radial_6_1796'
        cx={0}
        cy={0}
        r={1}
        gradientUnits='userSpaceOnUse'
        gradientTransform='translate(163 31) rotate(153.435) scale(3.3541)'
      >
        <stop stopColor='#2D62E6' />
        <stop offset={0.484375} stopColor='#1E5CDD' stopOpacity={0.4} />
        <stop offset={1} stopColor='#0050CB' stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id='paint13_radial_6_1796'
        cx={0}
        cy={0}
        r={1}
        gradientUnits='userSpaceOnUse'
        gradientTransform='translate(163 32.5) rotate(-170.538) scale(3.04138)'
      >
        <stop stopColor='#715CAA' stopOpacity={0.78} />
        <stop offset={1} stopColor='#043581' stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id='paint14_radial_6_1796'
        cx={0}
        cy={0}
        r={1}
        gradientUnits='userSpaceOnUse'
        gradientTransform='translate(159 33) rotate(-15.9454) scale(2.73004)'
      >
        <stop stopColor='#1A6D61' />
        <stop offset={1} stopColor='#043581' stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id='paint15_radial_6_1796'
        cx={0}
        cy={0}
        r={1}
        gradientUnits='userSpaceOnUse'
        gradientTransform='translate(158.5 31) scale(3.125)'
      >
        <stop stopColor='#327797' />
        <stop offset={1} stopColor='#043581' stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id='paint16_radial_6_1796'
        cx={0}
        cy={0}
        r={1}
        gradientUnits='userSpaceOnUse'
        gradientTransform='translate(159 29.5) rotate(87.3974) scale(2.75284)'
      >
        <stop stopColor='#256F5D' />
        <stop offset={1} stopColor='#043581' stopOpacity={0} />
      </radialGradient>
        </defs>
        <img width="612" height="262" src={dark01} />
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
            className="iphone_layout_child"
          >
            {element}
          </div>
        </div>
      )}
    </div>
  );
};

export default IphoneLayout;
