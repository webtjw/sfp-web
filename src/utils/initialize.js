function checkBrowserVersion () {
  const ua = navigator.userAgent.toLowerCase();

  if (ua.indexOf('msie') > -1) {
    const reg = ua.match(/msie\s*([0-9\.]+);/);
    
    if (reg && reg.length === 2 && parseInt(reg[1], 10) < 10) {
      alert('本站不支持在IE9及以下的IE浏览器中浏览，请使用最新版本的谷歌浏览器');
    }
  }
}

function initialize () {
  checkBrowserVersion();
}

module.exports = initialize;