export const unchainMyHeart = {
  title: 'Unchain My Heart',
  key: 'C',
  sections: {
    verse: [6, 6, 6, 6, 2, 6],
    chorus: [
      2,
      6,
      2,
      6,
      {
        index: 4,
        extensions: ['9'],
      },
      {
        index: 3,
        type: 'major',
        extensions: ['7', '#9'],
      },
    ],
    break: [6, 6],
    bridge: [
      2,
      6,
      2,
      {
        index: 3,
        type: 'major',
        extensions: ['7'],
      },
    ],
    solo: [
      6,
      6,
      6,
      6,
      2,
      2,
      6,
      6,
      {
        index: 4,
        extensions: ['9'],
      },
      {
        index: 3,
        extensions: ['7', ' #9'],
      },
    ],
  },
  layout: ['break', 'verse', 'chorus'],
};
