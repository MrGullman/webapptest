// Make sure serviceworker are supported

if ("serviceWorker" in navigator) {
    console.log("Will the service worker register?");

    window.addEventListener("load", () => {
        navigator.serviceWorker
            .register("sw_cashed_pages.js")
            .then(reg => console.log("Service Worker: Registered"))
            .catch(error => console.log(`Service Worker: Error ${error}`));
    });

    // navigator.serviceWorker
    //     .register("sw_cached_pages.js")
    //     .then(function(reg) {
    //         console.log("Yes, it did.");
    //     })
    //     .catch(function(err) {
    //         console.log("No it didn't. This happened: ", err);
    //     });
}
