import React from 'react';
import { motion } from 'framer-motion';

import { Container } from '../components';

const splashEffects = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      yoyo: 8,
      duration: 1
    }
  }
}

export default function Splash() {
  return (
    <Container>
      <motion.svg
        variants={splashEffects}
        initial="hidden"
        animate="visible"
        width="400"
        height="513"
        viewBox="0 0 400 513"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M365.179 0H247.321C226.82 0 212.5 12.8508 212.5 31.25V75C212.5 94.2758 224.474 106.25 243.75 106.25H286.767L281.288 155.56C281.137 156.924 281.438 158.3 282.147 159.475C282.855 160.65 283.93 161.56 285.206 162.064C286.483 162.567 287.889 162.637 289.209 162.262C290.529 161.886 291.689 161.087 292.509 159.988L332.599 106.25H368.75C388.026 106.25 400 94.2758 400 75V31.25C400 12.8508 385.68 0 365.179 0ZM387.5 75C387.5 87.2656 381.016 93.75 368.75 93.75H329.464C328.491 93.75 327.532 93.9771 326.662 94.4133C325.792 94.8495 325.036 95.4827 324.455 96.2625L296.25 134.062L299.959 100.688C300.055 99.8151 299.967 98.9313 299.699 98.0946C299.431 97.2578 298.99 96.487 298.404 95.8323C297.818 95.1776 297.101 94.6538 296.299 94.295C295.497 93.9362 294.629 93.7505 293.75 93.75H243.75C231.484 93.75 225 87.2656 225 75V31.25C225 18.2977 236.211 12.5 247.321 12.5H365.179C376.289 12.5 387.5 18.2977 387.5 31.25V75ZM365.179 6.25H247.321C231.542 6.25 218.75 15.4687 218.75 31.25V75C218.75 90.7812 227.969 100 243.75 100H293.75L287.5 156.25L329.464 100H368.75C384.531 100 393.75 90.7812 393.75 75V31.25C393.75 15.4687 380.958 6.25 365.179 6.25ZM23.8359 250L6.25 143.75C6.25 135.12 13.2453 131.25 21.875 131.25H36.9828L42.888 137.5H21.875C15.8781 137.5 12.7344 139.453 12.5125 143.31L29.1367 243.75H60.7453L55.3594 222.207C54.5152 218.831 54.4518 215.306 55.1738 211.901C55.8958 208.497 57.3843 205.301 59.5262 202.558C61.6681 199.815 64.4071 197.596 67.535 196.069C70.663 194.543 74.0977 193.75 77.5781 193.75H93.2477C94.2436 193.749 95.234 193.813 96.2131 193.939L116.563 215.478L123.63 243.75H143.275L149.18 250H118.75L109.404 212.614C108.503 209.011 106.424 205.813 103.497 203.527C100.57 201.241 96.9623 200 93.2484 200H77.5781C75.0474 200 72.55 200.577 70.2757 201.686C68.0013 202.796 66.0097 204.41 64.4523 206.404C62.8949 208.399 61.8126 210.722 61.2876 213.198C60.7626 215.674 60.8088 218.236 61.4227 220.691L68.75 250H23.8359ZM280.882 362.512L281.25 362.5L243.75 143.75C243.75 135.12 236.755 131.25 228.125 131.25H131.25L153.984 250H153.981H149.18L162.805 264.421L180.178 356.25H198.245L192.859 334.707C192.015 331.331 191.952 327.806 192.674 324.401C193.396 320.997 194.884 317.801 197.026 315.058C199.087 312.418 201.702 310.263 204.684 308.745L209.233 313.56C208.738 313.745 208.252 313.954 207.776 314.186C205.501 315.296 203.51 316.91 201.952 318.904C200.395 320.899 199.313 323.222 198.788 325.698C198.263 328.174 198.309 330.736 198.923 333.191L206.25 362.5H137.5L128.154 325.114C127.253 321.511 125.174 318.313 122.247 316.027C119.32 313.741 115.712 312.5 111.998 312.5H96.3281C93.7974 312.5 91.3 313.077 89.0257 314.186C86.7513 315.296 84.7597 316.91 83.2023 318.904C81.6449 320.899 80.5626 323.222 80.0376 325.698C79.5126 328.174 79.5588 330.736 80.1726 333.191L87.5 362.5H51.5625C49.4905 362.5 47.5034 363.323 46.0382 364.788C44.5731 366.253 43.75 368.241 43.75 370.312V385.938C43.75 388.009 44.5731 389.997 46.0382 391.462C47.5034 392.927 49.4905 393.75 51.5625 393.75H212.5H385.938C388.009 393.75 389.997 392.927 391.462 391.462C392.927 389.997 393.75 388.009 393.75 385.938V370.312C393.75 368.241 392.927 366.253 391.462 364.788C389.997 363.323 388.009 362.5 385.938 362.5H332.031C330.166 362.5 328.378 363.241 327.059 364.559C325.741 365.878 325 367.666 325 369.531C325 370.982 324.424 372.373 323.398 373.398C322.373 374.424 320.982 375 319.531 375H292.969C291.518 375 290.127 374.424 289.102 373.398C288.076 372.373 287.5 370.982 287.5 369.531C287.5 367.666 286.759 365.878 285.441 364.559C284.22 363.338 282.596 362.613 280.882 362.512ZM247.769 354.347L256.25 363.323L280.882 362.512C280.745 362.504 280.607 362.5 280.469 362.5H256.25L246.904 325.114C246.003 321.511 243.924 318.313 240.997 316.027C238.07 313.741 234.462 312.5 230.748 312.5H215.078C213.078 312.5 211.098 312.86 209.233 313.56L214.174 318.789C212.905 318.9 211.665 319.243 210.516 319.803C209.096 320.497 207.852 321.504 206.879 322.75C205.906 323.996 205.23 325.448 204.902 326.994C204.574 328.541 204.603 330.141 204.986 331.675L211.13 356.25H248.245L247.769 354.347ZM247.769 354.347L214.174 318.789C214.474 318.763 214.776 318.75 215.078 318.75H230.748C233.069 318.748 235.323 319.523 237.152 320.951C238.981 322.379 240.279 324.378 240.84 326.63L247.769 354.347ZM204.684 308.745C204.8 308.685 204.917 308.627 205.035 308.569C208.163 307.043 211.598 306.25 215.078 306.25H230.748C235.857 306.244 240.822 307.949 244.849 311.093C248.877 314.237 251.735 318.64 252.969 323.598L261.13 356.25H273.837L256.695 256.25H161.259L162.805 264.421L204.684 308.745ZM143.275 243.75L116.563 215.478L115.469 211.098C114.235 206.14 111.377 201.737 107.349 198.593C104.107 196.062 100.257 194.463 96.2131 193.939L86.4455 183.601C89.036 181.605 91.0655 178.96 92.3227 175.925C93.7419 172.499 94.1132 168.729 93.3897 165.092C92.6662 161.455 90.8805 158.114 88.2582 155.492C85.636 152.87 82.2951 151.084 78.6579 150.36C75.0208 149.637 71.2508 150.008 67.8247 151.427C65.1191 152.548 62.7239 154.282 60.8215 156.481L42.888 137.5H126.072L146.172 243.75H143.275ZM65.1461 161.058L60.8215 156.481C60.3149 157.066 59.8432 157.685 59.4099 158.333C57.3497 161.416 56.25 165.042 56.25 168.75C56.2556 173.721 58.2328 178.487 61.7479 182.002C65.263 185.517 70.0289 187.494 75 187.5C78.7084 187.5 82.3335 186.4 85.4169 184.34C85.7688 184.105 86.1118 183.859 86.4455 183.601L82.1212 179.025C85.3718 176.767 87.5 173.007 87.5 168.75C87.5 161.846 81.9035 156.25 75 156.25C70.9973 156.25 67.434 158.131 65.1461 161.058ZM69.5418 165.71L65.1461 161.058C63.4881 163.179 62.5 165.849 62.5 168.75C62.5 175.654 68.0964 181.25 75 181.25C77.6463 181.25 80.1006 180.428 82.1212 179.025L77.727 174.374C78.351 174.071 78.9238 173.665 79.4194 173.169C80.2935 172.295 80.8887 171.182 81.1299 169.969C81.3711 168.757 81.2473 167.5 80.7742 166.358C80.3012 165.216 79.5001 164.24 78.4723 163.553C77.4445 162.867 76.2361 162.5 75 162.5C73.343 162.502 71.7543 163.161 70.5826 164.333C70.17 164.745 69.8209 165.21 69.5418 165.71ZM69.5418 165.71C69.0282 166.632 68.7512 167.677 68.75 168.75C68.75 169.986 69.1166 171.195 69.8033 172.222C70.4901 173.25 71.4662 174.051 72.6082 174.524C73.7503 174.997 75.0069 175.121 76.2193 174.88C76.7442 174.775 77.2505 174.605 77.727 174.374L69.5418 165.71ZM237.5 250H187.5L180.173 220.691C179.559 218.236 179.513 215.674 180.038 213.198C180.563 210.722 181.645 208.399 183.202 206.404C184.76 204.41 186.751 202.796 189.026 201.686C191.3 200.577 193.797 200 196.328 200H211.998C215.712 200 219.32 201.241 222.247 203.527C225.174 205.813 227.253 209.011 228.154 212.614L237.5 250ZM206.25 168.75C206.25 175.654 200.654 181.25 193.75 181.25C186.846 181.25 181.25 175.654 181.25 168.75C181.25 161.846 186.846 156.25 193.75 156.25C200.654 156.25 206.25 161.846 206.25 168.75ZM106.25 281.25C106.25 288.154 100.654 293.75 93.75 293.75C86.8464 293.75 81.25 288.154 81.25 281.25C81.25 274.346 86.8464 268.75 93.75 268.75C100.654 268.75 106.25 274.346 106.25 281.25ZM225 281.25C225 288.154 219.404 293.75 212.5 293.75C205.596 293.75 200 288.154 200 281.25C200 274.346 205.596 268.75 212.5 268.75C219.404 268.75 225 274.346 225 281.25ZM256.25 62.5C263.154 62.5 268.75 56.9036 268.75 50C268.75 43.0964 263.154 37.5 256.25 37.5C249.346 37.5 243.75 43.0964 243.75 50C243.75 56.9036 249.346 62.5 256.25 62.5ZM318.75 50C318.75 56.9036 313.154 62.5 306.25 62.5C299.346 62.5 293.75 56.9036 293.75 50C293.75 43.0964 299.346 37.5 306.25 37.5C313.154 37.5 318.75 43.0964 318.75 50ZM356.25 62.5C363.154 62.5 368.75 56.9036 368.75 50C368.75 43.0964 363.154 37.5 356.25 37.5C349.346 37.5 343.75 43.0964 343.75 50C343.75 56.9036 349.346 62.5 356.25 62.5ZM332.031 356.25H385.937C389.666 356.254 393.24 357.737 395.877 360.373C398.513 363.01 399.996 366.584 400 370.312V385.938C399.996 389.666 398.513 393.24 395.877 395.877C393.24 398.513 389.666 399.996 385.937 400H51.5625C47.8342 399.996 44.2597 398.513 41.6234 395.877C38.987 393.24 37.5041 389.666 37.5 385.938V370.827L0 144.264V143.75C0 132.359 8.58672 125 21.875 125H228.125C241.189 125 249.708 132.109 249.993 143.175L286.797 357.867C288.781 358.944 290.458 360.507 291.671 362.411C292.883 364.315 293.591 366.497 293.727 368.75H318.773C318.976 365.37 320.461 362.195 322.925 359.872C325.388 357.55 328.645 356.254 332.031 356.25ZM86.1518 326.994C85.8238 328.541 85.8526 330.141 86.2359 331.675L92.3797 356.25H129.495L122.09 326.63C121.529 324.378 120.231 322.379 118.402 320.951C116.573 319.523 114.319 318.748 111.998 318.75H96.3281C94.7473 318.75 93.1872 319.11 91.7665 319.803C90.3457 320.497 89.1017 321.504 88.1288 322.75C87.1559 323.996 86.4798 325.448 86.1518 326.994ZM134.219 323.598L142.38 356.25H167.457L148.538 256.25H31.2055L47.843 356.766C49.054 356.427 50.3051 356.254 51.5625 356.25H79.4953L74.1094 334.707C73.2652 331.331 73.2018 327.806 73.9238 324.401C74.6458 320.997 76.1343 317.801 78.2762 315.058C80.4181 312.315 83.1571 310.096 86.285 308.569C89.413 307.043 92.8477 306.25 96.3281 306.25H111.998C117.107 306.244 122.072 307.949 126.099 311.093C130.127 314.237 132.985 318.64 134.219 323.598ZM67.4018 214.494C67.0738 216.041 67.1026 217.641 67.4859 219.175L73.6297 243.75H110.745L103.34 214.13C102.779 211.878 101.481 209.879 99.652 208.451C97.8231 207.023 95.5688 206.248 93.2484 206.25H77.5781C75.9973 206.25 74.4372 206.61 73.0165 207.303C71.5957 207.997 70.3517 209.004 69.3788 210.25C68.4059 211.496 67.7298 212.948 67.4018 214.494ZM186.152 214.494C185.824 216.041 185.853 217.641 186.236 219.175L192.38 243.75H229.495L222.09 214.13C221.529 211.878 220.231 209.879 218.402 208.451C216.573 207.023 214.319 206.248 211.998 206.25H196.328C194.747 206.25 193.187 206.61 191.766 207.303C190.346 207.997 189.102 209.004 188.129 210.25C187.156 211.496 186.48 212.948 186.152 214.494ZM237.5 144.282V143.75C237.5 139.602 234.345 137.5 228.125 137.5H138.793L158.895 243.75H179.495L174.109 222.207C173.265 218.831 173.202 215.306 173.924 211.901C174.646 208.497 176.134 205.301 178.276 202.558C180.418 199.815 183.157 197.596 186.285 196.069C189.413 194.543 192.848 193.75 196.328 193.75H211.998C217.107 193.744 222.072 195.449 226.099 198.593C230.127 201.737 232.985 206.14 234.219 211.098L242.38 243.75H254.552L237.5 144.282ZM50 370.312V385.938C50 386.352 50.1646 386.749 50.4576 387.042C50.7507 387.335 51.1481 387.5 51.5625 387.5H206.25V368.75H51.5625C51.1481 368.75 50.7507 368.915 50.4576 369.208C50.1646 369.501 50 369.898 50 370.312ZM387.042 387.042C387.335 386.749 387.5 386.352 387.5 385.938V370.312C387.5 369.898 387.335 369.501 387.042 369.208C386.749 368.915 386.352 368.75 385.937 368.75H332.031C331.824 368.75 331.625 368.832 331.479 368.979C331.332 369.125 331.25 369.324 331.25 369.531C331.246 372.638 330.011 375.617 327.814 377.814C325.617 380.011 322.638 381.246 319.531 381.25H292.969C289.862 381.246 286.883 380.011 284.686 377.814C282.489 375.617 281.253 372.638 281.25 369.531C281.25 369.324 281.168 369.125 281.021 368.979C280.875 368.832 280.676 368.75 280.469 368.75H218.75V387.5H385.937C386.352 387.5 386.749 387.335 387.042 387.042ZM204.167 184.34C201.083 186.4 197.458 187.5 193.75 187.5C188.779 187.494 184.013 185.517 180.498 182.002C176.983 178.487 175.006 173.721 175 168.75C175 165.042 176.1 161.416 178.16 158.333C180.22 155.25 183.149 152.846 186.575 151.427C190.001 150.008 193.771 149.637 197.408 150.36C201.045 151.084 204.386 152.87 207.008 155.492C209.63 158.114 211.416 161.455 212.14 165.092C212.863 168.729 212.492 172.499 211.073 175.925C209.654 179.351 207.25 182.28 204.167 184.34ZM197.222 163.553C196.194 162.867 194.986 162.5 193.75 162.5C192.093 162.502 190.504 163.161 189.333 164.333C188.161 165.504 187.502 167.093 187.5 168.75C187.5 169.986 187.867 171.195 188.553 172.222C189.24 173.25 190.216 174.051 191.358 174.524C192.5 174.997 193.757 175.121 194.969 174.88C196.182 174.639 197.295 174.043 198.169 173.169C199.043 172.295 199.639 171.182 199.88 169.969C200.121 168.757 199.997 167.5 199.524 166.358C199.051 165.216 198.25 164.24 197.222 163.553ZM93.75 262.5C90.0416 262.5 86.4165 263.6 83.3331 265.66C80.2496 267.72 77.8464 270.649 76.4273 274.075C75.0081 277.501 74.6368 281.271 75.3603 284.908C76.0837 288.545 77.8695 291.886 80.4917 294.508C83.114 297.13 86.4549 298.916 90.0921 299.64C93.7292 300.363 97.4992 299.992 100.925 298.573C104.351 297.154 107.28 294.75 109.34 291.667C111.4 288.583 112.5 284.958 112.5 281.25C112.494 276.279 110.517 271.513 107.002 267.998C103.487 264.483 98.7211 262.506 93.75 262.5ZM93.75 287.5C92.5139 287.5 91.3055 287.133 90.2777 286.447C89.2499 285.76 88.4488 284.784 87.9758 283.642C87.5027 282.5 87.3789 281.243 87.6201 280.031C87.8613 278.818 88.4565 277.705 89.3306 276.831C90.2047 275.957 91.3183 275.361 92.5307 275.12C93.7431 274.879 94.9997 275.003 96.1418 275.476C97.2838 275.949 98.2599 276.75 98.9467 277.778C99.6334 278.806 100 280.014 100 281.25C99.9981 282.907 99.3391 284.496 98.1674 285.667C96.9957 286.839 95.407 287.498 93.75 287.5ZM202.083 265.66C205.166 263.6 208.792 262.5 212.5 262.5C217.471 262.506 222.237 264.483 225.752 267.998C229.267 271.513 231.244 276.279 231.25 281.25C231.25 284.958 230.15 288.583 228.09 291.667C226.03 294.75 223.101 297.154 219.675 298.573C216.249 299.992 212.479 300.363 208.842 299.64C205.205 298.916 201.864 297.13 199.242 294.508C196.619 291.886 194.834 288.545 194.11 284.908C193.387 281.271 193.758 277.501 195.177 274.075C196.596 270.649 199 267.72 202.083 265.66ZM209.028 286.447C210.055 287.133 211.264 287.5 212.5 287.5C214.157 287.498 215.746 286.839 216.917 285.667C218.089 284.496 218.748 282.907 218.75 281.25C218.75 280.014 218.383 278.806 217.697 277.778C217.01 276.75 216.034 275.949 214.892 275.476C213.75 275.003 212.493 274.879 211.281 275.12C210.068 275.361 208.955 275.957 208.081 276.831C207.206 277.705 206.611 278.818 206.37 280.031C206.129 281.243 206.253 282.5 206.726 283.642C207.199 284.784 208 285.76 209.028 286.447ZM256.25 31.25C252.542 31.25 248.916 32.3497 245.833 34.4099C242.75 36.4702 240.346 39.3986 238.927 42.8247C237.508 46.2508 237.137 50.0208 237.86 53.6579C238.584 57.2951 240.37 60.636 242.992 63.2582C245.614 65.8805 248.955 67.6662 252.592 68.3897C256.229 69.1132 259.999 68.7419 263.425 67.3227C266.851 65.9036 269.78 63.5004 271.84 60.4169C273.9 57.3335 275 53.7084 275 50C274.994 45.0289 273.017 40.263 269.502 36.7479C265.987 33.2328 261.221 31.2556 256.25 31.25ZM256.25 56.25C255.014 56.25 253.805 55.8834 252.778 55.1967C251.75 54.5099 250.949 53.5338 250.476 52.3918C250.003 51.2497 249.879 49.9931 250.12 48.7807C250.361 47.5683 250.956 46.4547 251.831 45.5806C252.705 44.7065 253.818 44.1112 255.031 43.8701C256.243 43.6289 257.5 43.7527 258.642 44.2257C259.784 44.6988 260.76 45.4999 261.447 46.5277C262.133 47.5555 262.5 48.7639 262.5 50C262.498 51.657 261.839 53.2457 260.667 54.4174C259.496 55.5891 257.907 56.2481 256.25 56.25ZM295.833 34.4099C298.916 32.3497 302.542 31.25 306.25 31.25C311.221 31.2556 315.987 33.2328 319.502 36.7479C323.017 40.263 324.994 45.0289 325 50C325 53.7084 323.9 57.3335 321.84 60.4169C319.78 63.5004 316.851 65.9036 313.425 67.3227C309.999 68.7419 306.229 69.1132 302.592 68.3897C298.955 67.6662 295.614 65.8805 292.992 63.2582C290.37 60.636 288.584 57.2951 287.86 53.6579C287.137 50.0208 287.508 46.2508 288.927 42.8247C290.346 39.3986 292.75 36.4702 295.833 34.4099ZM302.778 55.1967C303.805 55.8834 305.014 56.25 306.25 56.25C307.907 56.2481 309.496 55.5891 310.667 54.4174C311.839 53.2457 312.498 51.657 312.5 50C312.5 48.7639 312.133 47.5555 311.447 46.5277C310.76 45.4999 309.784 44.6988 308.642 44.2257C307.5 43.7527 306.243 43.6289 305.031 43.8701C303.818 44.1112 302.705 44.7065 301.831 45.5806C300.956 46.4547 300.361 47.5683 300.12 48.7807C299.879 49.9931 300.003 51.2497 300.476 52.3918C300.949 53.5338 301.75 54.5099 302.778 55.1967ZM356.25 31.25C352.542 31.25 348.916 32.3497 345.833 34.4099C342.75 36.4702 340.346 39.3986 338.927 42.8247C337.508 46.2508 337.137 50.0208 337.86 53.6579C338.584 57.2951 340.37 60.636 342.992 63.2582C345.614 65.8805 348.955 67.6662 352.592 68.3897C356.229 69.1132 359.999 68.7419 363.425 67.3227C366.851 65.9036 369.78 63.5004 371.84 60.4169C373.9 57.3335 375 53.7084 375 50C374.994 45.0289 373.017 40.263 369.502 36.7479C365.987 33.2328 361.221 31.2556 356.25 31.25ZM356.25 56.25C355.014 56.25 353.805 55.8834 352.778 55.1967C351.75 54.5099 350.949 53.5338 350.476 52.3918C350.003 51.2497 349.879 49.9931 350.12 48.7807C350.361 47.5683 350.956 46.4547 351.831 45.5806C352.705 44.7065 353.818 44.1112 355.031 43.8701C356.243 43.6289 357.5 43.7527 358.642 44.2257C359.784 44.6988 360.76 45.4999 361.447 46.5277C362.133 47.5555 362.5 48.7639 362.5 50C362.498 51.657 361.839 53.2457 360.667 54.4174C359.496 55.5891 357.907 56.2481 356.25 56.25ZM60.5313 512L83.0618 458.602H68.1738L52.8888 494.928L38.1001 458.602H22.1203L44.5515 512H60.5313ZM104.863 458.602H89.3799V512H104.863V458.602ZM90.1739 448.676C91.9605 450.331 94.2764 451.158 97.1217 451.158C99.9669 451.158 102.283 450.331 104.069 448.676C105.856 446.956 106.749 444.806 106.749 442.225C106.749 439.843 105.856 437.858 104.069 436.27C102.283 434.682 99.9669 433.888 97.1217 433.888C94.2764 433.888 91.9605 434.715 90.1739 436.369C88.3874 438.023 87.4941 440.074 87.4941 442.523C87.4941 444.971 88.3874 447.022 90.1739 448.676ZM173.624 512V438.354H158.141V464.259C154.303 459.958 148.976 457.808 142.161 457.808C137.132 457.808 132.566 458.933 128.464 461.182C124.428 463.432 121.252 466.641 118.936 470.81C116.62 474.979 115.462 479.809 115.462 485.301C115.462 490.793 116.62 495.623 118.936 499.792C121.252 503.96 124.428 507.17 128.464 509.419C132.566 511.669 137.132 512.794 142.161 512.794C149.439 512.794 154.998 510.478 158.835 505.846V512H173.624ZM154.568 496.119C151.987 498.766 148.745 500.09 144.841 500.09C140.871 500.09 137.595 498.766 135.015 496.119C132.434 493.407 131.144 489.8 131.144 485.301C131.144 480.801 132.434 477.228 135.015 474.582C137.595 471.869 140.871 470.512 144.841 470.512C148.745 470.512 151.987 471.869 154.568 474.582C157.148 477.228 158.438 480.801 158.438 485.301C158.438 489.8 157.148 493.407 154.568 496.119ZM239.963 489.668C240.162 487.087 240.261 485.698 240.261 485.499C240.261 479.941 239.037 475.078 236.589 470.909C234.207 466.674 230.898 463.432 226.663 461.182C222.429 458.933 217.698 457.808 212.47 457.808C207.111 457.808 202.247 458.999 197.88 461.381C193.579 463.697 190.171 466.972 187.657 471.207C185.209 475.376 183.985 480.074 183.985 485.301C183.985 490.594 185.242 495.325 187.756 499.494C190.271 503.663 193.844 506.938 198.476 509.32C203.107 511.636 208.434 512.794 214.455 512.794C224.116 512.794 231.461 509.916 236.49 504.159L228.252 495.226C226.399 497.013 224.381 498.336 222.197 499.196C220.08 499.99 217.631 500.387 214.852 500.387C210.816 500.387 207.441 499.428 204.729 497.509C202.016 495.59 200.295 492.976 199.567 489.668H239.963ZM203.736 472.497C206.118 470.512 209.063 469.52 212.57 469.52C216.01 469.52 218.922 470.545 221.304 472.596C223.686 474.582 225.142 477.261 225.671 480.636H199.369C199.898 477.195 201.354 474.482 203.736 472.497ZM260.793 509.32C265.292 511.636 270.354 512.794 275.978 512.794C281.603 512.794 286.632 511.636 291.065 509.32C295.498 506.938 298.972 503.663 301.487 499.494C304.001 495.325 305.258 490.594 305.258 485.301C305.258 480.007 304.001 475.276 301.487 471.108C298.972 466.939 295.498 463.697 291.065 461.381C286.632 458.999 281.603 457.808 275.978 457.808C270.354 457.808 265.292 458.999 260.793 461.381C256.359 463.697 252.885 466.939 250.371 471.108C247.857 475.276 246.599 480.007 246.599 485.301C246.599 490.594 247.857 495.325 250.371 499.494C252.885 503.663 256.359 506.938 260.793 509.32ZM285.705 496.119C283.191 498.766 279.949 500.09 275.978 500.09C272.008 500.09 268.733 498.766 266.152 496.119C263.572 493.407 262.281 489.8 262.281 485.301C262.281 480.801 263.572 477.228 266.152 474.582C268.733 471.869 272.008 470.512 275.978 470.512C279.949 470.512 283.191 471.869 285.705 474.582C288.286 477.228 289.576 480.801 289.576 485.301C289.576 489.8 288.286 493.407 285.705 496.119ZM364.043 463.763C360.007 459.793 354.68 457.808 348.063 457.808C344.424 457.808 341.083 458.436 338.039 459.694C334.995 460.885 332.448 462.605 330.396 464.855V458.602H315.608V512H331.091V485.599C331.091 480.834 332.249 477.261 334.565 474.879C336.881 472.431 339.991 471.207 343.895 471.207C347.402 471.207 350.082 472.266 351.934 474.383C353.787 476.434 354.713 479.577 354.713 483.812V512H370.197V481.43C370.197 473.622 368.146 467.733 364.043 463.763Z" fill="url(#paint0_linear)"/>
        <defs>
          <linearGradient id="paint0_linear" x1="-112.034" y1="256.398" x2="523.281" y2="256.398" gradientUnits="userSpaceOnUse">
            <stop stopColor="#99E6FC"/>
            <stop offset="0.5725" stopColor="#01D0FB"/>
            <stop offset="1" stopColor="#4F66D0"/>
          </linearGradient>
        </defs>
      </motion.svg>
    </Container>
  )
}
