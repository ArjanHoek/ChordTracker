export class ElementCreator {
  sectionNameEl(name) {
    return this.el('p', {
      classes: ['section-name'],
      text: name,
    });
  }

  chordEl(chordName) {
    return this.el('div', {
      classes: ['chord-name'],
      text: chordName,
    });
  }

  sectionChordsEl(chords) {
    return this.el('div', {
      classes: ['chords-container'],
      children: chords.map(chordName => this.chordEl(chordName)),
    });
  }

  sectionEl(children) {
    return this.el('div', {
      classes: ['song-section'],
      children,
    });
  }

  el(tag, { text = '', classes = null, children = null }) {
    const el = document.createElement(tag);

    if (text) {
      el.textContent = text;
    }

    if (classes) {
      classes.forEach(className => el.classList.add(className));
    }

    if (children) {
      children.forEach(child => el.appendChild(child));
    }

    return el;
  }
}
