export class Controller {
  view;

  constructor(view) {
    this.view = view;
  }

  loadSong(song) {
    this.view.showTitle(song.title);
    this.view.showChords(song.sections, song.layout);
  }
}
