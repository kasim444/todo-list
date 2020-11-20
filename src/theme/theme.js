const base = {
  fontSizes: {
    title: '4em',
    subTitle: '2em',
    default: '1em',
  },
}

export const lightTheme = {
  color: {
    background: '#f5f5f5',
    secondaryBackground: '#fafafa',
    text: '#393e46',
    fadedText: '#929aab',
    head: '#c6a567',
  },
  ...base,
}

export const darkTheme = {
  color: {
    background: '#282828',
    secondaryBackground: '#3c3b3a',
    text: '#6B8096',
    fadedText: '#716f6c',
    head: '#c6a567',
  },
  ...base,
}
