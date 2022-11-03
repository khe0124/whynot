import { createGlobalStyle } from 'styled-components';
import AggroTTF from 'Asset/font/SB-aggro-M.ttf';
import AggroWOFF from 'Asset/font/SB-aggro-M.woff';
import AggroEOT from 'Asset/font/SB-aggro-M.eot';
import AggroBTTF from 'Asset/font/SB-aggro-B.ttf';
import AggroBWOFF from 'Asset/font/SB-aggro-B.woff';
import AggroBEOT from 'Asset/font/SB-aggro-B.eot';
import NotoSansKRTTF from 'Asset/font/NotoSansKR-Regular.ttf';
import NotoSansKRWOFF from 'Asset/font/NotoSansKR-Regular.woff';
import NotoSansKREOT from 'Asset/font/NotoSansKR-Regular.eot';

export const ResetCss = createGlobalStyle`

@font-face {
  font-family: "SB Aggro-B";
  font-display: fallback;
  src: url(${AggroBTTF}) format('truetype'),
  url(${AggroBWOFF}) format('woff'),url(${AggroBEOT}?iefix) format('embedded-opentype');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: "SB Aggro";
  font-display: fallback;
  src: url(${AggroTTF}) format('truetype'),
  url(${AggroWOFF}) format('woff'),url(${AggroEOT}?iefix) format('embedded-opentype');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: "NotoSansKR";
  font-display: fallback;
  src: url(${NotoSansKRTTF}) format('truetype'),
  url(${NotoSansKRWOFF}) format('woff'),url(${NotoSansKREOT}?iefix) format('embedded-opentype');
  font-weight: 400;
  font-style: normal;
}

* {  
    font-family: "NotoSansKR";
    margin: 0px;
    padding: 0px;
    position: relative;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
}

img {
  max-width: 100%;
}

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	vertical-align: baseline;
  text-decoration: none;
  color : inherit;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}

html, body {
  margin: 0;
  padding: 0;
}

ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
}

a {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

img{
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

input, textarea, select,div{
  outline: 0 none;
  resize: none;
}

select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}

select::-ms-expand {
  display: none;
}
`;
