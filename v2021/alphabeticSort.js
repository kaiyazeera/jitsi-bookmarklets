function(){
  var container = $('#filmstripRemoteVideosContainer')[0];
  var jChildren = $(container).children();
  const numberOfVideos = jChildren.length;
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
