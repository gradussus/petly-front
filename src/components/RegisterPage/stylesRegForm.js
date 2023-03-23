import { theme } from '../../theme';


export const BackBtn = {
    fontWeight: theme.fontWeights.middle,
    fontSize: theme.fontSizes.mx,
    borderRadius: theme.radii.large,
    paddingTop: "5px",
    paddingBottom: "5px",
    border: theme.borders.large,
    background: "trasparent",
    color: theme.colors.black,
    cursor: 'pointer',
    textTransform: "none",
    "&:hover": {
      border: theme.borders.large,
    },
  }

  export const nextBtn = {
    fontWeight: theme.fontWeights.middle,
    fontSize: theme.fontSizes.mx,
    borderRadius: theme.radii.large,
    paddingTop: "5px",
    paddingBottom: "5px",
    border: theme.borders.large,
    background: theme.colors.accent,
    color: theme.colors.white,
    textTransform: "none",
    cursor: 'pointer',
    "&:hover": {
        background: theme.colors.accent,
      border: theme.borders.large,
    },
  }

export const submitBtn = {
    margiTop: "16px",
    fontWeight: theme.fontWeights.middle,
    fontSize: theme.fontSizes.mx,
    borderRadius: theme.radii.large,
    paddingTop: "5px",
    paddingBottom: "5px",
    border: theme.borders.large,
    background: theme.colors.accent,
    color: theme.colors.white,
    cursor: 'pointer',
    textTransform: "none",

    "&:hover": {
      background:  theme.colors.accent,
      border: theme.borders.large,
    },
  }