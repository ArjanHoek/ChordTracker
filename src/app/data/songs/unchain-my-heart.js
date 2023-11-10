export const unchainMyHeart = {
  id: 'song-1',
  title: 'Unchain My Heart',
  key: 'C',
  sections: {
    verse: [
      { index: 6, repeat: 3 },
      { index: 2, repeat: 1 },
      { index: 6, repeat: 1 },
    ],
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
      {
        index: 2,
        repeat: 1,
      },
      {
        index: 6,
        repeat: 1,
      },
      {
        index: 2,
        repeat: 1,
      },
      {
        index: 3,
        type: 'major',
        extensions: ['7'],
      },
      {
        index: 3,
        type: 'major',
        extensions: ['7'],
      },
    ],
    solo: [
      {
        index: 6,
        repeat: 3,
      },
      {
        index: 2,
        repeat: 1,
      },
      {
        index: 6,
        repeat: 1,
      },
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
    outro: [
      {
        index: 6,
        repeat: 13,
        numRepetitions: true,
      },
    ],
    end: [
      {
        index: 4,
        extensions: ['9'],
      },
      {
        index: 3,
        type: 'major',
        extensions: ['7', '#9'],
      },
      6,
    ],
  },
  layout: [
    'break',
    'verse',
    'chorus',
    'break',
    'verse',
    'chorus',
    'break',
    'bridge',
    'verse',
    'chorus',
    'break',
    'solo',
    'break',
    'bridge',
    'verse',
    'chorus',
    'break',
    'outro',
    'end',
  ],
};
