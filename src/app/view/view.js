import { ElementCreator } from './elementCreator';

export class View {
  titleEl;
  sectionsEl;
  elementCreator;
  data;

  constructor(model) {
    this.model = model;
    this.initElements();
    this.elementCreator = new ElementCreator();
  }

  initElements() {
    this.titleEl = document.querySelector('#song-title');
    this.sectionsEl = document.querySelector('#song-sections');
  }

  updateTitle() {
    this.titleEl.textContent = this.model.title;
  }

  updateSections() {
    this.model.sections.forEach(item => {
      const sectionEl = this.elementCreator.createSectionEl([
        this.elementCreator.createSectionNameEl(item.name),
        this.elementCreator.createSectionChordsEl(item.chords),
      ]);

      this.sectionsEl.appendChild(sectionEl);
    });
  }
}
