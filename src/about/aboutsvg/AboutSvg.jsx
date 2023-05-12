import photo from "../../assets/german2.png";
export const AboutSvg = () => {
  return (
    <div className="svg-photo-container">
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#26E6C6"
          d="M31.7,-51.2C41.3,-49.3,49.5,-41.3,55,-31.7C60.5,-22.2,63.4,-11.1,66.1,1.6C68.8,14.2,71.4,28.5,67.9,41.6C64.4,54.6,54.9,66.5,42.5,73.6C30.2,80.6,15.1,82.7,0.9,81.1C-13.2,79.5,-26.5,74.2,-40.4,68C-54.2,61.9,-68.7,55,-69,43.5C-69.3,32,-55.3,16,-53.7,0.9C-52.1,-14.2,-63,-28.4,-63.3,-40.9C-63.6,-53.4,-53.4,-64.1,-41.1,-64.4C-28.8,-64.7,-14.4,-54.5,-1.7,-51.6C11,-48.7,22.1,-53,31.7,-51.2Z"
          transform="translate(100 100)"
        />
      </svg>
      {/* <svg
        className="about-image"
        viewBox="0 0 550 592"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask id="maskBorder" mask-type="alpha">
          <path
            d="M263 48.1782C270.426 43.891 279.574 43.891 287 48.1782L501.157 
      171.822C508.583 176.109 513.157 184.032 513.157 192.606V439.894C513.157 
      448.468 508.583 456.391 501.157 460.678L287 584.322C279.574 588.609 
      270.426 588.609 263 584.322L48.843 460.678C41.4174 456.391 36.843 448.468 36.843 
      439.894V192.606C36.843 184.032 41.4174 176.109 48.843 171.822L263 48.1782Z"
            fill="#26e6c6"
          />
        </mask>
        <g mask="url(#maskBorder)">
          <rect x="37" width="476" height="630" fill="url(#pattern2)" />

          <path
            d="M285 51.6423L499.157 175.286C505.345 178.859 509.157 185.461 509.157 
      192.606V439.894C509.157 447.039 505.345 453.641 499.157 457.214L285 
      580.858C278.812 584.43 271.188 584.43 265 580.858L50.843 457.214C44.655 453.641 
      40.843 447.039 40.843 439.894V192.606C40.843 185.461 44.655 178.859 50.843 
      175.286L265 51.6423C271.188 48.0697 278.812 48.0696 285 51.6423Z"
            stroke="#26e6c6"
            strokeWidth="10"
          />
        </g>

        <rect x="37" width="476" height="300" fill="url(#pattern3)" />

        <defs>
          <pattern
            id="pattern2"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              href="#imageBorder"
              transform="matrix(0.00143057 0 0 0.00108108 0.0404062 0)"
            />
          </pattern>

          <pattern
            id="pattern3"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              href="#imageBorder"
              transform="matrix(0.00143057 0 0 0.00226984 0.0404062 0)"
            />
          </pattern>
        </defs>
      </svg> */}
      <img src={photo} alt="" className="photo" />
    </div>
  );
};
