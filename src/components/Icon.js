import React from "react";

const Icon = ({ name, size = "24" }) => {
  switch (name) {
    case "logo-light":
      return (
        <svg
          width="40"
          height="27"
          viewBox="0 0 214 142"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M141.414 141.489H107.224L78.5638 81.5248L95.6588 45.7618L141.414 141.489ZM109.501 137.875H135.681L95.6588 54.1416L82.5678 81.5248L109.501 137.875ZM34.8474 141.489H0.683411L66.9392 2.8722C67.6906 1.2992 69.3052 0.279999 71.0498 0.279999C72.7944 0.279999 74.409 1.2966 75.1604 2.8722L88.1318 30.011L34.8474 141.489ZM6.41641 137.875H32.5698L84.1252 30.011L71.8974 4.4296C71.5854 3.7744 70.5116 3.777 70.1996 4.4296L6.41641 137.875Z"
            fill="#fff"
            fillOpacity="0.85"
          />
          <path
            d="M151.538 44.6412H180.957V141.72H151.538V44.6412ZM119.178 26.9872H213.317V0.511414H119.178V26.9872Z"
            fill="#fff"
            fillOpacity="0.85"
          />
        </svg>
      );
    case "logo-dark":
      return (
        <svg
          width="40"
          height="27"
          viewBox="0 0 214 142"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M141.414 141.489H107.224L78.5638 81.5248L95.6588 45.7618L141.414 141.489ZM109.501 137.875H135.681L95.6588 54.1416L82.5678 81.5248L109.501 137.875ZM34.8474 141.489H0.68335L66.9392 2.8722C67.6906 1.2992 69.3052 0.279999 71.0498 0.279999C72.7944 0.279999 74.409 1.2966 75.1604 2.8722L88.1318 30.011L34.8474 141.489ZM6.41635 137.875H32.5698L84.1252 30.011L71.8974 4.4296C71.5854 3.7744 70.5116 3.777 70.1996 4.4296L6.41635 137.875Z"
            fill="#121212"
          />
          <path
            d="M151.538 44.6412H180.957V141.72H151.538V44.6412ZM119.178 26.9872H213.317V0.511414H119.178V26.9872Z"
            fill="#121212"
          />
        </svg>
      );
    case "day":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 302.4 302.4"
        >
          <path
            fill="#FFF"
            d="M204.8 97.6C191.2 84 172 75.2 151.2 75.2s-40 8.4-53.6 22.4c-13.6 13.6-22.4 32.8-22.4 53.6a76.3 76.3 0 0 0 76 76 76.3 76.3 0 0 0 76-76c0-20.8-8.4-40-22.4-53.6zm-14.4 92.8c-10 10-24 16-39.2 16s-29.2-6-39.2-16-16-24-16-39.2 6-29.2 16-39.2 24-16 39.2-16 29.2 6 39.2 16 16 24 16 39.2-6 29.2-16 39.2zM292 140.8h-30.8c-5.6 0-10.4 4.8-10.4 10.4 0 5.6 4.8 10.4 10.4 10.4H292c5.6 0 10.4-4.8 10.4-10.4 0-5.6-4.8-10.4-10.4-10.4zM151.2 250.8c-5.6 0-10.4 4.8-10.4 10.4V292c0 5.6 4.8 10.4 10.4 10.4 5.6 0 10.4-4.8 10.4-10.4v-30.8c0-5.6-4.8-10.4-10.4-10.4zM258 243.6l-22-22c-3.6-4-10.4-4-14.4 0s-4 10.4 0 14.4l22 22c4 4 10.4 4 14.4 0s4-10.4 0-14.4zM151.2 0c-5.6 0-10.4 4.8-10.4 10.4v30.8c0 5.6 4.8 10.4 10.4 10.4 5.6 0 10.4-4.8 10.4-10.4V10.4c0-5.6-4.8-10.4-10.4-10.4zM258.4 44.4c-4-4-10.4-4-14.4 0l-22 22c-4 4-4 10.4 0 14.4 3.6 4 10.4 4 14.4 0l22-22c4-4 4-10.4 0-14.4zM41.2 140.8H10.4c-5.6 0-10.4 4.8-10.4 10.4s4.4 10.4 10.4 10.4h30.8c5.6 0 10.4-4.8 10.4-10.4 0-5.6-4.8-10.4-10.4-10.4zM80.4 221.6c-3.6-4-10.4-4-14.4 0l-22 22c-4 4-4 10.4 0 14.4s10.4 4 14.4 0l22-22c4-4 4-10.4 0-14.4zM80.4 66.4l-22-22c-4-4-10.4-4-14.4 0s-4 10.4 0 14.4l22 22c4 4 10.4 4 14.4 0s4-10.4 0-14.4z"
          />
        </svg>
      );
    case "night":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 480 480"
        >
          <path d="M459.8 347.3a16 16 0 0 0-17.8-5A176.2 176.2 0 0 1 208.7 176c0-58.3 28.8-112.7 77-145.4a16 16 0 0 0-6.6-29C271.6.3 264 0 256.6 0c-132.3 0-240 107.6-240 240s107.7 240 240 240c84 0 160.5-42.7 204.4-114.2 3.6-5.8 3-13.2-1.2-18.5z" />
        </svg>
      );
    case "arrow-down":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M29.5205 7.62115L28.5378 6.63163C28.2285 6.32261 27.8171 6.15236 27.3773 6.15236C26.9378 6.15236 26.5258 6.32261 26.2166 6.63163L15.0067 17.842L3.78393 6.6192C3.47515 6.31017 3.0632 6.14017 2.62368 6.14017C2.18416 6.14017 1.77197 6.31017 1.46294 6.6192L0.480004 7.60262C-0.160001 8.24214 -0.160001 9.28385 0.480004 9.92337L13.8421 23.3335C14.1508 23.6423 14.5623 23.8598 15.0057 23.8598H15.0109C15.4506 23.8598 15.8621 23.642 16.1709 23.3335L29.5205 9.95971C29.8298 9.65093 29.9995 9.22702 30 8.78751C30 8.34775 29.8298 7.92969 29.5205 7.62115Z" />
        </svg>
      );
    case "arrow-up":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 30 30"
          fill="none"
          transform="rotate(180deg)"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M29.5205 7.62115L28.5378 6.63163C28.2285 6.32261 27.8171 6.15236 27.3773 6.15236C26.9378 6.15236 26.5258 6.32261 26.2166 6.63163L15.0067 17.842L3.78393 6.6192C3.47515 6.31017 3.0632 6.14017 2.62368 6.14017C2.18416 6.14017 1.77197 6.31017 1.46294 6.6192L0.480004 7.60262C-0.160001 8.24214 -0.160001 9.28385 0.480004 9.92337L13.8421 23.3335C14.1508 23.6423 14.5623 23.8598 15.0057 23.8598H15.0109C15.4506 23.8598 15.8621 23.642 16.1709 23.3335L29.5205 9.95971C29.8298 9.65093 29.9995 9.22702 30 8.78751C30 8.34775 29.8298 7.92969 29.5205 7.62115Z" />
        </svg>
      );
    case "source":
      return (
        <svg
          width="40"
          height="40"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0)">
            <path
              d="M38.393 28.5712H36.6071C36.3463 28.5712 36.1323 28.6548 35.9657 28.8227C35.7978 28.9896 35.7143 29.2035 35.7143 29.4641V38.3926C35.7143 39.6203 35.2774 40.6711 34.4033 41.5454C33.5291 42.4196 32.4779 42.8564 31.2502 42.8564H8.03556C6.8079 42.8564 5.75684 42.4196 4.88247 41.5454C4.0083 40.6712 3.57126 39.6204 3.57126 38.3926V15.1782C3.57126 13.9506 4.0082 12.8999 4.88247 12.0256C5.75684 11.1513 6.8079 10.7143 8.03556 10.7143H27.6782C27.9391 10.7143 28.1531 10.6304 28.3203 10.4632C28.4875 10.2958 28.5711 10.082 28.5711 9.82139V8.03542C28.5711 7.77527 28.4875 7.56115 28.3203 7.39403C28.1531 7.22662 27.9391 7.14307 27.6782 7.14307H8.03556C5.82222 7.14307 3.92943 7.92899 2.35739 9.50075C0.785926 11.0724 0 12.9652 0 15.1785V38.3929C0 40.6062 0.785926 42.4993 2.35748 44.0704C3.92953 45.6423 5.82232 46.4286 8.03566 46.4286H31.2502C33.4634 46.4286 35.3564 45.6423 36.9282 44.0704C38.5002 42.4993 39.2861 40.6063 39.2861 38.3929V29.4647C39.2861 29.2039 39.2025 28.9899 39.0346 28.8227C38.8672 28.6548 38.6531 28.5712 38.393 28.5712Z"
              fill="#D9D9D9"
            />
            <path
              d="M49.4696 4.10185C49.1161 3.74837 48.6971 3.57178 48.2138 3.57178H33.9282C33.4447 3.57178 33.0259 3.74837 32.6727 4.10185C32.3192 4.45514 32.1422 4.8737 32.1422 5.35736C32.1422 5.84101 32.3192 6.25968 32.6727 6.61316L37.5832 11.5238L19.3915 29.7159C19.2053 29.9018 19.1124 30.1159 19.1124 30.3573C19.1124 30.5995 19.2056 30.8134 19.3915 30.9994L22.5724 34.1799C22.7583 34.3658 22.9724 34.4586 23.2141 34.4586C23.4559 34.4586 23.67 34.3659 23.8559 34.1799L42.0477 15.9881L46.9586 20.8987C47.3118 21.2522 47.7305 21.429 48.2141 21.429C48.6978 21.429 49.1164 21.2522 49.47 20.8987C49.8235 20.5453 50.0001 20.1268 50.0001 19.6432V5.35736C50 4.87341 49.8228 4.45514 49.4696 4.10185Z"
              fill="#D9D9D9"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="50" height="50.0001" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case "github":
      return (
        <svg
          width="32"
          height="32"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0)">
            <path
              d="M14.4274 32.1614C14.1493 32.2132 14.0278 32.3437 14.0626 32.5519C14.0973 32.7601 14.2535 32.8297 14.5313 32.7601C14.8094 32.6908 14.9308 32.569 14.8958 32.3956C14.8614 32.2047 14.7051 32.1265 14.4274 32.1614Z"
              fill="#D9D9D9"
            />
            <path
              d="M12.9429 32.37C12.665 32.37 12.5262 32.465 12.5262 32.6564C12.5262 32.882 12.6739 32.9772 12.9689 32.9426C13.2467 32.9426 13.3857 32.8471 13.3857 32.6564C13.3857 32.431 13.238 32.3351 12.9429 32.37Z"
              fill="#D9D9D9"
            />
            <path
              d="M10.9117 32.2911C10.8423 32.4822 10.9553 32.6121 11.2501 32.6818C11.5106 32.7856 11.6756 32.7337 11.7449 32.5255C11.7971 32.3348 11.6841 32.1962 11.4064 32.1088C11.1459 32.0396 10.9811 32.0995 10.9117 32.2911Z"
              fill="#D9D9D9"
            />
            <path
              d="M37.7994 2.20032C36.3323 0.733531 34.5663 0 32.4999 0H7.49995C5.43417 0 3.66748 0.733531 2.20032 2.20032C0.733532 3.66738 0 5.43408 0 7.49995V32.5002C0 34.5662 0.733532 36.3327 2.20032 37.7995C3.66738 39.2665 5.43417 40.0001 7.49995 40.0001H13.3333C13.7149 40.0001 14.0016 39.9869 14.1925 39.9614C14.3833 39.9351 14.5741 39.8222 14.7652 39.6224C14.9564 39.4229 15.0516 39.132 15.0516 38.7502C15.0516 38.6984 15.0471 38.1075 15.0385 36.9791C15.0296 35.8504 15.0254 34.9564 15.0254 34.2966L14.4264 34.4008C14.0445 34.4701 13.5627 34.5007 12.981 34.4919C12.3996 34.4832 11.7962 34.4226 11.1713 34.3097C10.546 34.1967 9.96461 33.9364 9.42636 33.5287C8.88839 33.1204 8.50648 32.5867 8.28073 31.9271L8.02023 31.3278C7.84665 30.9289 7.57338 30.486 7.20005 30.0003C6.82671 29.5139 6.44918 29.184 6.06728 29.0104L5.88494 28.8802C5.76354 28.7934 5.65071 28.6888 5.54645 28.5674C5.44238 28.4456 5.3643 28.324 5.31222 28.2028C5.26014 28.0811 5.30337 27.9812 5.44238 27.9028C5.58139 27.8248 5.83286 27.7862 6.19762 27.7862L6.71826 27.8642C7.0656 27.9335 7.49503 28.1416 8.00746 28.4891C8.51953 28.8362 8.94047 29.2875 9.27039 29.8429C9.6699 30.5549 10.1512 31.0971 10.7157 31.4704C11.2798 31.8441 11.8485 32.0307 12.4213 32.0307C12.9941 32.0307 13.4889 31.9873 13.9057 31.9009C14.3221 31.8138 14.7128 31.6833 15.0775 31.5097C15.2338 30.3467 15.6592 29.4521 16.3534 28.8272C15.3639 28.7229 14.4743 28.5669 13.6841 28.3583C12.8944 28.1498 12.0783 27.8115 11.2364 27.3426C10.3941 26.8738 9.69544 26.2926 9.13986 25.5977C8.58438 24.9028 8.1285 23.9915 7.77286 22.8633C7.41704 21.7346 7.23909 20.4323 7.23909 18.9568C7.23909 16.8563 7.9251 15.0678 9.29657 13.5922C8.65407 12.0124 8.71472 10.2418 9.47872 8.27982C9.98221 8.12348 10.7289 8.24078 11.7184 8.63144C12.708 9.02238 13.4326 9.35667 13.8929 9.63405C14.3531 9.91152 14.7219 10.1461 14.9997 10.3373C16.6146 9.88589 18.2812 9.66023 19.9998 9.66023C21.7184 9.66023 23.3852 9.88589 25.0002 10.3373L25.9897 9.71231C26.6671 9.29547 27.4656 8.91356 28.3858 8.5665C29.306 8.21935 30.0089 8.12375 30.4953 8.28009C31.2762 10.2421 31.3461 12.0127 30.7032 13.5924C32.0746 15.0681 32.7608 16.8565 32.7608 18.9571C32.7608 20.4329 32.5829 21.7395 32.227 22.8764C31.8715 24.0135 31.4117 24.9253 30.847 25.611C30.2829 26.2969 29.5797 26.8737 28.7378 27.3428C27.8957 27.8113 27.0797 28.1503 26.2897 28.3582C25.4997 28.5667 24.6101 28.7234 23.6205 28.8276C24.5227 29.6086 24.974 30.8409 24.974 32.5252V38.7494C24.974 39.0446 25.0171 39.2831 25.1039 39.4655C25.1913 39.6477 25.3299 39.7732 25.5208 39.8432C25.7126 39.9125 25.881 39.9558 26.029 39.9731C26.1769 39.9905 26.3892 39.9993 26.667 39.9993H32.5003C34.5661 39.9993 36.3329 39.2657 37.7993 37.7987C39.2664 36.3316 39.9999 34.5648 39.9999 32.499V7.49995C39.9997 5.43408 39.2662 3.66711 37.7994 2.20032Z"
              fill="#D9D9D9"
            />
            <path
              d="M7.91661 29.1145C7.7952 29.201 7.81253 29.3399 7.96878 29.5309C8.14263 29.7044 8.28137 29.7306 8.38562 29.6089C8.50703 29.5224 8.4897 29.3835 8.33318 29.1921C8.15969 29.0362 8.02086 29.01 7.91661 29.1145Z"
              fill="#D9D9D9"
            />
            <path
              d="M7.05747 28.4636C7.00548 28.5854 7.06623 28.6896 7.23981 28.7761C7.37854 28.8632 7.49173 28.846 7.5783 28.7243C7.63029 28.6025 7.56954 28.4982 7.39596 28.4111C7.22238 28.359 7.10955 28.3765 7.05747 28.4636Z"
              fill="#D9D9D9"
            />
            <path
              d="M8.72413 30.1304C8.5677 30.2169 8.5677 30.3736 8.72413 30.599C8.88038 30.825 9.02769 30.8856 9.16679 30.7812C9.32313 30.6595 9.32313 30.4946 9.16679 30.2862C9.02805 30.0611 8.88038 30.0084 8.72413 30.1304Z"
              fill="#D9D9D9"
            />
            <path
              d="M9.63578 31.3019C9.47944 31.4411 9.51392 31.6054 9.73995 31.797C9.948 32.0049 10.1217 32.031 10.2606 31.8744C10.3996 31.7359 10.3648 31.5711 10.1564 31.3801C9.94837 31.1721 9.7747 31.1458 9.63578 31.3019Z"
              fill="#D9D9D9"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="40" height="40" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    default:
      return "Icon does not exist";
  }
};

export default Icon;
