import { createGlobalStyle } from "styled-components";

const MyGlobalStyle = createGlobalStyle`
:root {
  font-size: 60%;

  --color-background: #f0f0f7;
  --color-primary-lighter: #9871f5;
  --color-primary-light: #916bea;
  --color-primary: #8257e5;
  --color-primary-dark: #774dd6;
  --color-primary-darker: #6842c2;
  --color-secundary: #04d361;
  --color-secundary-dark: #04bf58;
  --color-title-in-primary: #ffffff;
  --color-text-in-primary: #d4c2ff;
  --color-text-title: #32264d;
  --color-text-complement: #9c98a6;
  --color-text-base: #6a6180;
  --color-line-in-white: #e6e6f0;
  --color-input-background: #f8f8fc;
  --color-button-text: #ffffff;
  --color-box-base: #ffffff;
  --color-box-footer: #fafafc;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body,
#root {
  height: 100vh;
}

body {
  background-color: var(--color-background);
}

#root {
  display: flex;
  align-items: center;
  justify-content: center;
}

body,
button,
input,
textarea {
  font: 500 1.6rem Poppins;
  color: var(--color-text-base);
}

.container {
  width: 90vw;
  max-width: 700px;
}

@media (min-width: 700px) {
  :root {
    font-size: 62.5%;
  }
}
`;

export default MyGlobalStyle;
