function(){var numberOfVideos;function getParentOfTiles(){var e=$("#remoteVideos")[0];return $(e).children()[1].firstChild.children}function getNumberOfParticipants(){return jChildren2=getParentOfTiles(),jChildren2.length}function getNameOfParticipant(e){return jChildren2=getParentOfTiles(),[jChildren2[e].getElementsByClassName("displayname")[0].innerHTML,jChildren2[e]]}function modifyCSS(){var e=document.createElement("style");e.type="text/css",e.innerHTML=".videocontainer { position:relative !important; top: unset !important; left: unset !important; text-align:center;overflow:hidden;  }";var t=document.createElement("style");t.type="text/css",t.innerHTML=".tile-view .remote-videos > div {flex-wrap:wrap;}",document.body.appendChild(e),document.body.appendChild(t)}function sortParticipants(){numberOfVideos=getNumberOfParticipants();var e=new Array;for(i=0;i<numberOfVideos;i++)e[i]=new Array(2),e[i]=getNameOfParticipant(i);for(e.sort((e,t)=>e[0].localeCompare(t[0])),i=0;i<numberOfVideos;i++)$(e[i][1]).css("order",i)}function checkNewParticipant(){var e=getNumberOfParticipants();e<numberOfVideos?(numberOfVideos=e,console.log("Participant left")):numberOfVideos<e&&(sortParticipants(),console.log("Sorted video tiles"))}modifyCSS(),sortParticipants();let interval=setInterval(()=>checkNewParticipant(),1e3);function stopInterval(){setTimeout(()=>{clearInterval(interval)},10)}}
