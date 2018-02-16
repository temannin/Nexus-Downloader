// Format for NMM Download url
// https://www.nexusmods.com/Core/Libs/Common/Widgets/DownloadPopUp?id=1000172397&nmm=1&game_id=110&source=ModPage - SkyUI
// https://www.nexusmods.com/Core/Libs/Common/Widgets/DownloadPopUp?id=1000183703&nmm=1&game_id=110&source=ModPage - Immersive Armors
// https://www.nexusmods.com/Core/Libs/Common/Widgets/DownloadPopUp?id=1000023285&nmm=1&game_id=110&source=ModPage - Immersive Weapons

var myPort = browser.runtime.connect({
  name: "4e36a53c948953415d7faf918cd6fc0f3649bbcf@temporary-addon"
});
document.body.addEventListener("click", compileMods, true);

// Compiles an array of all the mods on screen
var modList = document.getElementsByClassName("btnexpand");
var urls = [];

compileMods();

function compileMods() {
  urls = [];
  for (let i = 0; i < modList.length; i++) {
    var items = modList[i].getElementsByTagName("li");
    var ul = items[0].getElementsByTagName("ul");
    var listItems = ul[0].getElementsByTagName("li");

    var url = listItems[0].getElementsByTagName("a")[0].href; // retrieves URL for each independent mod - needs the hardcoded 0
    urls.push(url);
    console.log(urls);

    var li = document.createElement("li");
    var span = document.createElement("a");
    span.setAttribute("class", "mod-track");
    span.appendChild(document.createTextNode("Download Mod"));

    li.setAttribute("id", "download" + i);
    li.appendChild(span);
    li.addEventListener("click", function() {
      console.log(i);
      downloadMod(urls[i]);
    });

    if (document.getElementById("download" + i) == null) {
      ul[0].appendChild(li);
    } else {
        document.getElementById("download" + i) = li;
    }
  }
}

function downloadMod(url) {
  myPort.postMessage({ greeting: url });
}
