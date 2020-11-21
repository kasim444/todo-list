const base = {
  fontSizes: {
    title: '4em',
    subTitle: '2em',
    default: '1.1em',
  },
}

export const lightTheme = {
  color: {
    background: '#f5f5f5',
    secondaryBackground: '#fafafa',
    text: '#393e46',
    fadedText: '#929aab',
    head: '#c6a567',
    shadowLight: 'rgba(255,255,255,0.05)',
    shadowDark: 'rgba(0,0,0,0.2)',
  },
  ...base,
}

export const darkTheme = {
  color: {
    background: '#282828',
    secondaryBackground: '#3c3b3a',
    text: '#d6d2c4',
    fadedText: '#968c83',
    head: '#c6a567',
    shadowLight: 'rgba(255,255,255,0.05)',
    shadowDark: 'rgba(0,0,0,0.2)',
  },
  ...base,
}
