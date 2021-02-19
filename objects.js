var playlist = {
  theWeekend: 'Die For You'
}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]:songTitle})
}

function removeFromPlaylist(playlist, artistName) {

}
