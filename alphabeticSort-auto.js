function(){
  var numberOfVideos;

  function sortParticipants(){
    var container = $('#filmstripRemoteVideosContainer')[0];
    var jChildren = $(container).children();
    numberOfVideos = jChildren.length;
    var names = new Array();

    //only applicable in tiles mode!
    for(i=0; i<numberOfVideos; i++) {
      names[i] = new Array (2);
      names[i][0] = jChildren[i].getElementsByClassName("displayname")[0].innerHTML;
      names[i][1] = jChildren[i];
    }

    //sort Array
    names.sort((a, b) => a[0].localeCompare(b[0]));

    //reorder the tiles
    for(i = 0; i < numberOfVideos; i++){
      $(names[i][1]).css('order', i);
    }
  }

  function checkNewParticipant(){
      var numParticipants = $($('#filmstripRemoteVideosContainer')[0]).children().length;
      if(numberOfVideos > numParticipants){
        // update and do nothing
        numberOfVideos = numParticipants;
      } else if (numberOfVideos < numParticipants){
        // if a new participant has joined, sort tiles
        sortParticipants();
      }
  }

  // call function once when calling the script
  sortParticipants();
  // call function every second
  let interval = setInterval( () => checkNewParticipant(), 1000 );

  // unused function that can be used to stop the interval, consider implementing
  // a button as trigger.
  function stopInterval(){
    setTimeout( ()=> {clearInterval(interval)},10);
  }
}
