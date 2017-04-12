var AlbumList = function(url){
  this.url = url
  this.albums = []
}

AlbumList.prototype = {
  getData: function(){
    var request = new XMLHttpRequest()
    request.open('GET', this.url)

    request.onload = function(){
      if (request.status !== 200) return
      var jsonString = request.responseText //can just be this?
      var albums = JSON.parse(jsonString)
      this.albums = albums.albums.items
    }.bind(this)

    request.send()
  },

 
}