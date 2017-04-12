var AlbumDetailsView = function(container, albumList){
  this.container = container
  this.albumList = albumList
}

AlbumDetailsView.prototype = {
  display: function(albums){
    
    console.log(albums)
  },

  createAlbumEntry: function(){
    var albumDiv = document.createElement('div')
    albumDiv.classList.add('album')
    return albumDiv
  },

  appendAlbumDetails: function(div, album){

  }
}