import React from 'react';

function Scroll() {
  return (
    <div className="aniWrap">
      <div className="mouse">
        <div className="scroller" />
      </div>
      <style jsx>
        {`
          .aniWrap {
            display: block;
            width: 28px;

            margin: auto;
            margin-top: 20px;
          }

          .mouse {
            width: 28px;
            height: 50px;
            border: 2px solid skyblue;
            border-radius: 14px;
          }

          .scroller {
            width: 10px;
            height: 10px;
            border-radius: 10px;
            background: skyblue;
            position: relative;
            top: 10px;
            left: 0px;
            right: 0;
            margin: auto;
            animation: scrolls 1.3s ease-out infinite;
          }

          @keyframes scrolls {
            0% {
              top: 18px;
              opacity: 1;
              height: 4px;
            }
            95% {
              top: 5px;
              opacity: 0;
              height: 8px;
            }
            100% {
              top: 18px;
              opacity: 1;
              height: 4px;
            }
          }

          @keyframes sns {
            0% {
              top: 0px;
              opacity: 1;
              /* height: 4px; */
            }
            80% {
              top: -200px;
              opacity: 1;
              /* height: 8px; */
            }
            95% {
              top: -300px;
              opacity: 0;
              /* height: 8px; */
            }
            100% {
              top: -300px;
              opacity: 0.5;
              /* height: 4px; */
            }
          }
        `}
      </style>
    </div>
  );
}

export default Scroll;
