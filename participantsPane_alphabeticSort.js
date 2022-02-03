
// Alphabetically sorts the participant list in participant pane once.

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

function getNumberOfParticipants(){
    return $(".participants_pane-content")[0].children[1].children[4].children.length;
}

function sortParticipants(){
  var names = new Array();
  var participants=$(".participants_pane-content")[0].children[1].children[4].children;
  var numParticipants=getNumberOfParticipants();

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
  prepareParent();
  sortParticipants();
}
