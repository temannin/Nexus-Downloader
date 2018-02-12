var portFromCS;
var modPage;

function connected(p) {
    portFromCS = p;
    portFromCS.postMessage({ greeting: "hi there content script!" });

    portFromCS.onMessage.addListener(function (m) {
        var test = browser.windows.create({
            url: m.greeting,
            allowScriptsToClose: true
        });
        test.then(onCreated, onError);
        // var test = window.open(m.greeting, '_new');
        // modPage.then(onCreated, onError);

        function onCreated(windowInfo) {
            var removed = browser.windows.remove(windowInfo.id);
          }
          
          function onError(error) {
            console.log(`Error: ${error}`);
          }

    });


}

browser.runtime.onConnect.addListener(connected);