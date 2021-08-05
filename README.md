# Test-InstallPackage-KaiOS
Test `mozApps.install()` and `mozApps.installPackage()` in KaiOS

## Install and Test

 1. Open Kaiosrt or WebIDE with a connected device
 2. Open 'Device Preferences'
 3. Type `apps.serviceCenter.allowedOrigins` into the search bar
 4. Append `app://disk.liaronce.com,https://kaios.tri1.workers.dev` to the comma-separated list in `apps.serviceCenter.allowedOrigins`
 5. Run this app

## Knows issue

Cannot use `mozApps.installPackage()` with `success` return but `installOrigins`, `manifestURL` and etc. are returned `undefined`.