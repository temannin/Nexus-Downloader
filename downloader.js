// Format for NMM Download Link
// https://www.nexusmods.com/Core/Libs/Common/Widgets/DownloadPopUp?id=1000172397&nmm=1&game_id=110&source=ModPage - SkyUI
// https://www.nexusmods.com/Core/Libs/Common/Widgets/DownloadPopUp?id=1000183703&nmm=1&game_id=110&source=ModPage - Immersive Armors
// https://www.nexusmods.com/Core/Libs/Common/Widgets/DownloadPopUp?id=1000023285&nmm=1&game_id=110&source=ModPage - Immersive Weapons

console.log("still here")
var modList = document.getElementsByClassName("btnexpand");
console.log(modList.length);

console.log(modList[0].className.split(' '));


var entry = document.createElement('li');
entry.appendChild(document.createTextNode("Download Mod"));
modList[0].appendChild(entry);
