export class Controller {
  view;
  model;

  constructor(view, model) {
    this.view = view;
    this.model = model;

    this.view.addTransposeHandler(value => this.transpose(value));
  }

  loadSongs(songs) {
    this.model.setSongs(songs);
  }

  loadSong(id) {
    this.model.setSong(id);
    this.view.updateUI();
  }

  transpose(value) {
    this.model.setTranspose(value);
    console.log(this.model.transpose);

    this.view.updateTranspose();
  }
}
