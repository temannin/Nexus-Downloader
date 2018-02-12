var portFromCS;
var modPage;

function connected(p) {
    portFromCS = p;
    portFromCS.postMessage({ greeting: "hi there content script!" });

    portFromCS.onMessage.addListener(function (m) {
        var test = window.open(m.greeting);
        setTimeout(function(){
           test.close();
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