import { chordTypes, chords, chordsMeta } from '../data/library/chords';

export class Model {
  songs;
  layout;
  title;

  setSongs(songs) {
    this.songs = songs;
  }

  setSong(songId) {
    const selectedSong = this.songs.find(({ id }) => id === songId);

    this.title = selectedSong.title;

    this.layout = selectedSong.layout.reduce((acc, sectionName) => {
      const section = selectedSong.sections[sectionName];
      const sectionChords = section.reduce((acc, cur) => {
        const chordName = this.getChordName(cur);

        if (cur.repeat) {
          const repetitions = [];

          for (let i = 0; i < cur.repeat; i++) {
            repetitions.push('');
          }

          return [...acc, chordName].concat(repetitions);
        }

        return [...acc, chordName];
      }, []);

      return [...acc, { name: sectionName, chords: sectionChords }];
    }, []);
  }

  getChordNameBase(index, altType) {
    let chordName = chords[index - 1];
    const type = altType ?? chordsMeta[index - 1].type;
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
    return typeof chord !== 'number'
      ? this.getChordNameFromObject(chord)
      : this.getChordNameBase(chord);
  }
}
