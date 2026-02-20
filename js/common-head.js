function loadScript(src) {
  const script = document.createElement('script');
  script.src = src;
  script.async = false; 
  document.head.appendChild(script);
}

// jQuery를 먼저 로드하고, 그 다음 script.js 로드
loadScript("https://code.jquery.com/jquery-3.7.1.min.js");
loadScript("../js/script.js");

const cssContent = `
<link rel="stylesheet" href="../css/common.css" />
<link rel="stylesheet" href="../css/styles.css" />
<link rel="stylesheet" href="../css/font.css" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,200,0,0" />
`;
document.head.insertAdjacentHTML('afterbegin', cssContent);