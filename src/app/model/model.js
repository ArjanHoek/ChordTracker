import { chordTypes, chords, chordsMeta } from '../data/library/chords';

export class Model {
  sections;
  title;

  setData(data) {
    this.title = data.title;

    this.sections = data.layout.reduce((acc, sectionName) => {
      const section = data.sections[sectionName];
      const sectionChords = section.map(chord => this.getChordName(chord));

      return [...acc, { name: sectionName, chords: sectionChords }];
    }, []);
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
}
