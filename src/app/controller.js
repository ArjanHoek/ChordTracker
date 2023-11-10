export class Controller {
  view;
  model;

  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  loadSongs(songs) {
    this.loadSong(songs[0]);
  }

  loadSong(songData) {
    this.model.setData(songData);
    this.view.updateTitle();
    this.view.updateSections();
  }
}
