import { ElementCreator } from './elementCreator';

export class View {
  titleEl;
  sectionsEl;
  create;
  data;

  constructor(model) {
    this.model = model;
    this.initElements();
    this.create = new ElementCreator();
  }

  initElements() {
    this.titleEl = document.querySelector('#song-title');
    this.sectionsEl = document.querySelector('#song-sections');
  }

  updateUI() {
    this.updateTitle();
    this.updateSections();
  }

  updateTitle() {
    this.titleEl.textContent = this.model.title;
  }

  updateSections() {
    this.model.layout.forEach(item => {
      const sectionEl = this.create.sectionEl([
        this.create.sectionNameEl(item.name),
        this.create.sectionChordsEl(item.chords),
      ]);

      this.sectionsEl.appendChild(sectionEl);
    });
  }
}
