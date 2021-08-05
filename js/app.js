installManifest();

function installManifest() {
    //var req = navigator.mozApps.installPackage("https://kaios.tri1.workers.dev/manifest?url=https://disk.liaronce.com/cloudmusic/update.webapp"); //return "undefined"
    var req = navigator.mozApps.install("https://kaios.tri1.workers.dev/manifest?url=https://disk.liaronce.com/cloudmusic/manifest.webapp"); //works
    req.onsuccess = function (result) {
        console.log("result", result);
    };
    req.onerror = function (error) {
        console.log("error", error);
    };
}