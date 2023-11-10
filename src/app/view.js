import { chordTypes, chords, chordsMeta } from './data/library/chords';

export class View {
  titleEl;
  sectionsEl;

  constructor() {
    this.titleEl = document.querySelector('#song-title');
    this.sectionsEl = document.querySelector('#song-sections');
  }

  showTitle(title) {
    this.titleEl.textContent = title;
  }

  getChordNameFromObject(chord) {
    return 'B';
  }

  getChordNameBase(index, altType) {
    index -= 1;
    let chordName = chords[index];
    const type = altType ?? chordsMeta[index].type;
    const { abbr } = chordTypes[type];
    if (abbr) chordName += abbr;
    return chordName;
  }

  getChordNameFromObject({ index, type, extensions }) {
    let baseName = this.getChordNameBase(index, type);
    if (extensions) {
      baseName += extensions.join('');
    }
    return baseName;
  }

  getChordName(chord) {
    if (typeof chord !== 'number') return this.getChordNameFromObject(chord);
    return this.getChordNameBase(chord);
  }

  createSectionNameEl(name) {
    const nameEl = document.createElement('p');
    nameEl.textContent = name;
    return nameEl;
  }

  createSectionEl(children = []) {
    const sectionEl = document.createElement('div');
    sectionEl.classList.add('song-section');
    children.forEach(child => sectionEl.appendChild(child));
    return sectionEl;
  }

  showChords(sections, layout) {
    const output = layout.reduce((acc, sectionName) => {
      const section = sections[sectionName];
      const sectionChords = section.map(chord => this.getChordName(chord));

      return [...acc, { name: sectionName, chords: sectionChords }];
    }, []);

    output.forEach(item => {
      const sectionEl = this.createSectionEl([
        this.createSectionNameEl(item.name),
      ]);

      const chordsEl = document.createElement('div');
      chordsEl.classList.add('chords-container');

      item.chords.forEach(chordName => {
        const chordEl = document.createElement('span');
        chordEl.textContent = chordName;
        chordsEl.appendChild(chordEl);
      });

      this.sectionsEl.appendChild(sectionEl);
      this.sectionsEl.appendChild(chordsEl);
    });
  }

  createChordEl(chord) {
    const chordEl = document.createElement('span');
    chordEl.textContent = chord;
    return chordEl;
  }
}
