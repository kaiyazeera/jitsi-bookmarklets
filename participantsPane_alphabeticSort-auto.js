
  // Alphabetically sorts the participant list in participant pane once per second.
  // Note: Before activating the script, open the participant list. You can close it again afterwards, but it must be open during activation.

  var paneClosed;
  if ($(".participants_pane-content")[0] == undefined ){
    paneClosed = true;
  } else {
    paneClosed = false;
  }

  function prepareParent(){
    var parentOfParticipants=$(".participants_pane-content")[0].children[1].children[4];
    $(parentOfParticipants).css('display', 'flex');
    $(parentOfParticipants).css('flex-direction', 'column');
  }

  function sortParticipants(){
    var parentOfParticipants=$(".participants_pane-content")[0].children[1].children[4];
    var participants=$(".participants_pane-content")[0].children[1].children[4].children;

    var names = new Array();

    for(i=0; i<numParticipants; i++) {
      var participant = participants[i];
      var participantName = participants[i].children[1].children[0].children[0].children[0].innerText;
    //  names[i] = new Array (2);
      names[i] = [ participantName, participant ];
      }

      //sort Array
      names.sort((a, b) => a[0].localeCompare(b[0]));

      //reorder the tiles
      for(i = 0; i < numParticipants; i++){
        $(names[i][1]).css('order', i);
      }
  }

  if(!paneClosed){
    var numParticipants = getNumberOfParticipants();
    prepareParent();
    sortParticipants();
  }

  function getNumberOfParticipants(){
      return $(".participants_pane-content")[0].children[1].children[4].children.length;
  }

  function checkNewParticipant(){
      if ($(".participants_pane-content")[0] == undefined ){
        paneClosed = true;
        return;
      }
      var num = numParticipants;
      var numParticipants = getNumberOfParticipants();
      if(num > numParticipants){
        // update and do nothing
        numParticipants = num;
      } else if (num < numParticipants){
        // if a new participant has joined, sort tiles
        sortParticipants();
      } else if (paneClosed){
        prepareParent();
        sortParticipants();
        paneClosed = false;
      }
      return;
  }

  // call function every second
  let interval = setInterval( () => checkNewParticipant(), 1000 );

  // unused function that can be used to stop the interval, consider implementing
  // a button as trigger.
  function stopInterval(){
    setTimeout( ()=> {clearInterval(interval)},10);
  }
