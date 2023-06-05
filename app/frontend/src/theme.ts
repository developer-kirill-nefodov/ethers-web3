export type ITheme = typeof theme;

export type IBreakpointsName = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export const theme = {
  breakpoints: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536
  },
  colors: {
    border: "#d1d5db",
    label: "#374151",
    error: '#bd0202',
    navigate: '#282b3b'
  },
};
