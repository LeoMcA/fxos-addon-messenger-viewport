// If injecting into an app that was already running at the time
// the app was enabled, simply initialize it.
if (document.documentElement) {
  initialize();
}

// Otherwise, we need to wait for the DOM to be ready before
// starting initialization since add-ons are injected
// *before* `document.documentElement` is defined.
else {
  window.addEventListener('DOMContentLoaded', initialize);
}

function initialize() {
  if (document.querySelector('meta[name="viewport"]')) {
    // Already injected, abort.
    return;
  } else {
    var head = document.querySelector('head');
    var metaTag = document.createElement('meta');
    metaTag.name = "viewport"
    metaTag.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"

    head.appendChild(metaTag);
  }
}
