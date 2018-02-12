// Format for NMM Download Link
// https://www.nexusmods.com/Core/Libs/Common/Widgets/DownloadPopUp?id=1000172397&nmm=1&game_id=110&source=ModPage - SkyUI
// https://www.nexusmods.com/Core/Libs/Common/Widgets/DownloadPopUp?id=1000183703&nmm=1&game_id=110&source=ModPage - Immersive Armors
// https://www.nexusmods.com/Core/Libs/Common/Widgets/DownloadPopUp?id=1000023285&nmm=1&game_id=110&source=ModPage - Immersive Weapons

// Compiles an array of all the mods on screen
var modList = document.getElementsByClassName("btnexpand");

var items = modList[0].getElementsByTagName("li");
var ul = items[0].getElementsByTagName("ul");
var listItems = ul[0].getElementsByTagName("li");

var link = listItems[0].getElementsByTagName('a')[0].href; // retrieves URL for each independent mod - needs the hardcoded 0
console.log(link);






// var li = document.createElement("li");
// var a = document.createElement("a");
// a.setAttribute("class", "mod-track");
// a.appendChild(document.createTextNode("Download Mod"));


// li.setAttribute("id","download");
// li.appendChild(a);



// ul[0].appendChild(li);
