void({
  var numberOfVideos;

  function getParentOfTiles(){
    var container = $('#remoteVideos')[0];
    var jChildren = $(container).children();
    var jChildren2 = jChildren[1].firstChild.children;
    return jChildren2;
  }

  function getNumberOfParticipants(){
    jChildren2 = getParentOfTiles();
    return jChildren2.length;
  }

  function getNameOfParticipant(i){
    jChildren2 = getParentOfTiles();
    return [jChildren2[i].getElementsByClassName("displayname")[0].innerHTML, jChildren2[i] ];
  }

  function modifyCSS(){
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".videocontainer { position:relative !important; top: unset !important; left: unset !important; text-align:center;overflow:hidden;  }"

    var css2 = document.createElement("style");
    css2.type = "text/css";
    css2.innerHTML = ".tile-view .remote-videos > div {flex-wrap:wrap;}"

    document.body.appendChild(css)
    document.body.appendChild(css2)
  }


  function sortParticipants(){
    numberOfVideos = getNumberOfParticipants();

    var names = new Array();

    //only applicable in tiles mode!
    for(i=0; i<numberOfVideos; i++) {
      names[i] = new Array (2);
      names[i] = getNameOfParticipant(i);
    }

    //sort Array
    names.sort((a, b) => a[0].localeCompare(b[0]));

    //reorder the tiles
    for(i = 0; i < numberOfVideos; i++){
      $(names[i][1]).css('order', i);
    }
  }

  function checkNewParticipant(){
      var numParticipants = getNumberOfParticipants();
      if(numberOfVideos > numParticipants){
        // update and do nothing
        numberOfVideos = numParticipants;
        console.log("Participant left");
      } else if (numberOfVideos < numParticipants){
        // if a new participant has joined, sort tiles
        sortParticipants();
        console.log("Sorted video tiles");
      }
      return;
  }

  // modifyCSS so that tiles are sortable again
  modifyCSS();

  // call function once when calling the script
  sortParticipants();
  // call function every second
  let interval = setInterval( () => checkNewParticipant(), 1000 );

  // unused function that can be used to stop the interval, consider implementing
  // a button as trigger.
  function stopInterval(){
    setTimeout( ()=> {clearInterval(interval)},10);
  }
});
