# fxos-addon-messenger-viewport

Very simple add-on which adds a viewport meta tag to messenger.com pages.

[(Thx Chris)](https://github.com/mdn/simple-addon)

## Enable Messenger.com on Firefox OS

For whatever reason, messenger.com doesn't work by default with Firefox OS's UA.

In order to get messenger.com to display the app, rather than an advertisment for their apps, and make this add-on useful, follow the following steps:

1. Open WebIDE
2. Go to: `Runtime -> Device Preferences`
3. Add a new `String` prefrence called `general.useragent.override.www.messenger.com` with a value of `Mozilla/5.0 (X11; Linux x86_64; rv:45.0) Gecko/20100101 Firefox/45.0` (or any other UA which makes messenger.com work)
