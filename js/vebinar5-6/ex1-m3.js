const playlist = {
  name: 'My playlist',
  rating: 5,
  tracks: ['track-1', 'track-2', 'track-3'],
  //   trackCount: 3,
  changeName(newName) {
    this.name = newName;
  },
  addTrack(track) {
    this.tracks.push(track);
    // this.trackCount += 1;
    // this.trackCount = this.tracks.length;
  },
  updateRating(newRating) {
    this.rating = newRating;
  },
  getTrackCount() {
    return (this.trackCount = this.tracks.length);
  },
};
console.log(playlist);
console.log(playlist.getTrackCount());

playlist.changeName('New Name');
console.log(playlist);
playlist.addTrack('new track');
console.log(playlist);
playlist.updateRating(4);
console.log(playlist);
console.log(playlist.getTrackCount());
