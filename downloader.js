// Format for NMM Download url
// https://www.nexusmods.com/Core/Libs/Common/Widgets/DownloadPopUp?id=1000172397&nmm=1&game_id=110&source=ModPage - SkyUI
// https://www.nexusmods.com/Core/Libs/Common/Widgets/DownloadPopUp?id=1000183703&nmm=1&game_id=110&source=ModPage - Immersive Armors
// https://www.nexusmods.com/Core/Libs/Common/Widgets/DownloadPopUp?id=1000023285&nmm=1&game_id=110&source=ModPage - Immersive Weapons

// Compiles an array of all the mods on screen
var modList = document.getElementsByClassName("btnexpand");

for (let i = 0; i < modList.length; i++) {

    var items = modList[i].getElementsByTagName("li");
    var ul = items[0].getElementsByTagName("ul");
    var listItems = ul[0].getElementsByTagName("li");

    var url = listItems[0].getElementsByTagName('a')[0].href; // retrieves URL for each independent mod - needs the hardcoded 0

    var li = document.createElement("li");
    var span = document.createElement("a");
    span.setAttribute("class", "mod-track");
    span.appendChild(document.createTextNode("Download Mod"));

    li.setAttribute("id","download");
    li.appendChild(span);
    li.addEventListener("click", function() {
        downloadMod(url);
    });

    ul[0].appendChild(li);
   
}

function downloadMod(url) {
    var currentWindow = window.location;
    window.open(url, '_blank');
    console.log(window.location);
}

