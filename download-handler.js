var portFromCS;
var modPage;

function connected(p) {
    portFromCS = p;
    

    portFromCS.onMessage.addListener(function (m) {
        var test = browser.windows.create({
            url: m.greeting,
            allowScriptsToClose: true,
            state: "minimized"
        });
<<<<<<< HEAD
<<<<<<< HEAD
        modWindow.then(onCreated, onError);

        function onCreated(tab) {
            controlTab(tab.id);
        }

        function onError() {
            console.log("Error");
        }
    });

    function controlTab(tabId) {
        console.log("Sending code to " + tabId);

        function onExecuted(result) {
            console.log(`Mod Downloaded`);
        }

        function onError(error) {
=======
=======
>>>>>>> parent of 0df9d46... Extension can finally download  mods however does not scale across multiple pages
        test.then(onCreated, onError);

        function onCreated(windowInfo) {
            document.body.style.border = "5px solid red";
            console.log(windowInfo);
            portFromCS.postMessage({ greeting: windowInfo.id});
            // var removed = browser.windows.remove(windowInfo.id);
          }
          
          function onError(error) {
<<<<<<< HEAD
>>>>>>> parent of 0df9d46... Extension can finally download  mods however does not scale across multiple pages
            console.log(`Error: ${error}`);
          }

    });


=======
            console.log(`Error: ${error}`);
          }

    });


>>>>>>> parent of 0df9d46... Extension can finally download  mods however does not scale across multiple pages
}

browser.runtime.onConnect.addListener(connected);
