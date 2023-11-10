export class Controller {
  view;
  model;

  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  loadSongs(songs) {
    this.model.setSongs(songs);
  }

  loadSong(id) {
    this.model.setSong(id);
    this.view.updateUI();
  }
}
