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
        console.log(1);
        setTimeout(function(){
           browser.windows.remove(4);
        }, 2000);
        // var test = window.open(m.greeting, '_new');
        // modPage.then(onCreated, onError);

        function onCreated(windowInfo) {
            window.close();
          }
          
          function onError(error) {
            console.log(`Error: ${error}`);
          }

    });


}

browser.runtime.onConnect.addListener(connected);