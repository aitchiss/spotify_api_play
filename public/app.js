var app = function(){
  var url = 'https://api.spotify.com/v1/search?q=cats&type=album'
  requestAlbums(url, getAlbumInfo)

}

var getAlbumInfo = function(){
  if (this.status !== 200) return
  var jsonString = this.responseText
  var albumResultObject = JSON.parse(jsonString)
  var albumsArray = albumResultObject.albums.items
  populatePage(albumsArray)
}

var populatePage = function(albums){
  var displayDiv = document.querySelector('#albums')
  for (album of albums){
    //create a div
    var albumContainer = getAlbumContainer()
    //append the album details to it
    appendAlbumTitleInfo(albumContainer, album)
    appendAlbumArtistInfo(albumContainer, album)
    //append the div to displayDiv
    displayDiv.appendChild(albumContainer)
  }
}

var appendAlbumTitleInfo = function(container, album){
  var titleInfo = document.createElement('p')
  titleInfo.innerText = 'title: ' + album.name
  container.appendChild(titleInfo)
}



var appendAlbumArtistInfo = function(container, album){
  var artistInfo = document.createElement('p')
  var artistString = 'artist: '
  if (album.artists.length > 1){
    for (artist of album.artists){
      artistString += artist.name + ', '
    }
    artistString = artistString.substring(0, artistString.lastIndexOf(','))
  } else {
    artistString = album.artists[0].name
  }
  
  artistInfo.innerText = artistString
  container.appendChild(artistInfo)
}

var getAlbumContainer = function(){
  var div = document.createElement('div')
  div.classList.add('album-entry')
  return div
}

var requestAlbums = function(url, callback){
  var request = new XMLHttpRequest()
  request.open('GET', url)
  request.onload = callback
  request.send()
}

window.onload = app;