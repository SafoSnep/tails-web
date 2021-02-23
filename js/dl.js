var oldVersionWarned = !1;

function checkVersion() {
  if (!oldVersionWarned) {
    var ua = window.navigator.userAgent;
    if (-1 < ua.indexOf("iPhone OS")) {
      var ver = ua.match(/\b(\d+)_(\d+)(?:_(\d+))?\b/);
      return 4 === ver.length && 14 <= parseInt(ver[1]);
    }
  }
  return !0;
}

function checkVersionAndDownload(e) {
  if (!checkVersion()) return e.preventDefault(), oldVersionWarned = !0, alert("iOS 14 or newer is required. You may try the install anyway by tapping the button again, but you're on your own."), 
  !1;
}