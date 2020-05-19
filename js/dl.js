var oldVersionWarned = !1;

function checkVersion() {
  if (!oldVersionWarned) {
    var ua = window.navigator.userAgent;
    if (-1 < ua.indexOf("iPhone OS")) {
      var ver = ua.match(/\b(\d+)_(\d+)(?:_(\d+))?\b/);
      return 4 === ver.length && 13 <= parseInt(ver[1]);
    }
  }
  return !0;
}

function checkVersionAndDownload(e) {
  if (!checkVersion()) return e.preventDefault(), oldVersionWarned = !0, alert("iOS 13 or newer is required. You may download the .ipa by tapping the download button again, and try to install it, but you're on your own."), 
  !1;
}