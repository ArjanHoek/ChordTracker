import { ElementCreator } from './elementCreator';

export class View {
  titleEl;
  sectionsEl;
  transposeEl;
  create;
  data;

  constructor(model) {
    this.model = model;
    this.initElements();
    this.create = new ElementCreator();
  }

  addTransposeHandler(handler) {
    const transpose = document.querySelector('#js-transpose');

    transpose.addEventListener('click', ({ target }) => {
      const btn = target.closest('button');
      if (!btn) return;

      handler(+btn.value);
    });
  }

  initElements() {
    this.titleEl = document.querySelector('#song-title');
    this.sectionsEl = document.querySelector('#song-sections');
    this.transposeEl = document.querySelector('#transpose');
  }

  updateUI() {
    this.updateTitle();
    this.updateSections();
    this.updateTranspose();
  }

  updateTitle() {
    this.titleEl.textContent = this.model.title;
  }

  updateTranspose() {
    this.transposeEl.textContent = this.model.transpose;
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
