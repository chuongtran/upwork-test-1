import { createGlobalStyle } from 'styled-components';

const basicStyle = `
  body {
    font-family: "Montserrat", sans-serif;
    height: 100%;
    letter-spacing: -0.24px;
    line-height: 1.6;
    font-size: 15px;
    color: #101F2D;
    fill: #101F2D;

    * {
      box-sizing: border-box;
    }

    p {
      font-size: 15px;
      line-height: 1.6;
      font-weight: 500;
      margin: 0;
    }
  }
  #root {
    min-height: 100vh;
    display: flex;
    flex-flow: column;
    & > div {
      flex: 1;
    }
  }
  img {
    max-width: 100%;
  }
  h1 {
    font-weight: bold;
    margin-bottom: 0;
    font-size: 34px;
  }

  h2 {
    font-weight: bold;
    margin-bottom: 0;
  }

  h3 {
    font-size: 20px;
    line-height: 1.6;
    font-weight: bold;
    margin-bottom: 0;
    margin-top: 0;
  }

  h4 {
    font-size: 18px;
    line-height: 1.3;
    letter-spacing: 0.01em;
  }

  hr {
    border-top: 0;
    border-color: #C4C4C4;
    opacity: 0.21;
  }

  .text-center {
    text-align: center;
  }
  .text-left {
    text-align: left;
  }
  .text-right {
    text-align: right;
  }
  .w-full {
    width: 100%;
  }

  .uppercase {
    text-transform: uppercase;
  }

  .text {
    &--courgette {
      font-family: Courgette;
    }
    &--nowrap {
      white-space: nowrap;
    }
    &--primary {
      color: #5B86E5;
      fill: #5B86E5;
    }
    &--secondary {
      color: #8A84FC;
      fill: #8A84FC;
    }
    &--orange {
      background-image: linear-gradient(91.67deg, #FC9D83 -0.59%, #FFCE00 107.84%);
      fill: linear-gradient(91.67deg, #FC9D83 -0.59%, #FFCE00 107.84%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    &--white {
      color: #fff;
      fill: #fff;
    }
    &--black {
      color: #101F2D;
      fill: #101F2D;
    }
    &--danger {
      color: #ff6357;
    }
    &--success {
      color: #3CB758;
    }
    &--grey {
      opacity: 0.8;
    }
    &--tight {
      letter-spacing: -0.41px;
    }

    &--disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &--500 {
      font-weight: 500;
    }
    &--semibold {
      font-weight: 600;
    }
    &--bold {
      font-weight: 700;
    }
    &--normal {
      font-weight: normal;
    }
  }

  button, input, textarea {
    outline: none !important;
  }


  .flex {
    display: flex;
    &--row {
      flex-flow: row;
    }
    &--column {
      flex-flow: column;
    }

    &--1 {
      flex: 1;
      min-height: 0;
    }

    &--auto {
      flex: auto;
    }

    &--wrap {
      flex-wrap: wrap;
    }
    &--no-wrap {
      flex-wrap: no-wrap;
    }
  }

  .justify-content {
    &-start {
      justify-content: flex-start;
    }
    &-end {
      justify-content: flex-end;
    }
    &-center {
      justify-content: center;
    }
    &-space-around {
      justify-content: space-around;
    }
    &-space-between {
      justify-content: space-between;
    }
  }

  .align-items {
    &-start {
      align-items: flex-start;
    }
    &-end {
      align-items: flex-end;
    }
    &-center {
      align-items: center;
    }
  }

  .switch-wrapper {
    position: relative;
    // overflow: auto;
    margin-bottom: 70px;
  }

  .switch-wrapper > div {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .buttons {
    position: fixed;
    bottom: 1.6rem;
    left: 0;
    right: 0;
    padding-left: 1.6rem;
    padding-right: 1.6rem;
    max-width: 510px;
    margin-left: auto;
    margin-right: auto;

    &--with-menu {
      bottom: 80px;
    }
  }

`;

const directions = {
  t: 'top',
  b: 'bottom',
  l: 'left',
  r: 'right',
};

const spacingTypes = {
  p: 'padding',
  m: 'margin',
};
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const paddingStyle = arr.map((item) => {
  let output = '';
  Object.keys(spacingTypes).forEach((spacingType) => {
    Object.keys(directions).forEach((dKey) => {
      output += `
        .${spacingType}${dKey}-${item} {
          ${spacingTypes[spacingType]}-${directions[dKey]}: ${5 * item}px;
        }
      `;
    });
  });

  return output;
});

const keyFrames = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(60px);
    }
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;

const animationDelay = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const animationStep = 0.1;
const animations = `
  .fade-in-up {
    opacity: 0;
    animation-name: fadeInUp;
    animation-duration: 0.8s;
    animation-fill-mode: forwards;
  }
  ${animationDelay.map((delay) => `.animation--delay-${delay} { animation-delay: ${delay * animationStep}s }`).join(';')}
  ${animationDelay.map((delay) => `.animation:nth-child(${delay}) { animation-delay: ${delay * animationStep}s }`).join(';')}
`;

const textSizes = [13, 14, 15, 16, 17, 18, 22, 24];
const textSizeStyle = textSizes.map((size) => `.text--size-${size} {font-size: ${size}px;}`);
export default createGlobalStyle`
  ${basicStyle}
  ${paddingStyle.join(' ')}
  ${textSizeStyle.join(' ')}
  ${animations}
  ${keyFrames}
`;
