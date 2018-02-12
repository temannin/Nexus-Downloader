var portFromCS;
var modPage;

function connected(p) {
    portFromCS = p;
    portFromCS.postMessage({ greeting: "hi there content script!" });

    portFromCS.onMessage.addListener(function (m) {
        var test = browser.windows.create({
            url: m.greeting,
            allowScriptsToClose: true,
            state: "minimized"
        });
        test.then(onCreated, onError);

        function onCreated(windowInfo) {
            document.body.style.border = "5px solid red";
            console.log(windowInfo);
            // var removed = browser.windows.remove(windowInfo.id);
          }
          
          function onError(error) {
            console.log(`Error: ${error}`);
          }

    });


}

browser.runtime.onConnect.addListener(connected);
