import { SemanticColors } from '../../system'
import { palette } from './palette'

const {
  blue500,
  charcoal000,
  charcoal100,
  charcoal300,
  charcoal400,
  charcoal500,
  charcoal600,
  primary500,
  primary600,
  primary700,
  purple000,
  purple100,
  purple400,
  red000,
  red100,
  red400,
  red500,
  red600,
  red700,
  white,
} = palette

export const semanticColors: SemanticColors = {
  danger: {
    altText: red400,
    borderColor: charcoal300,
    dark: red600,
    darker: red700,
    light: red100,
    lighter: red000,
    linkColor: blue500,
    main: red500,
    text: white,
  },
  neutral: {
    altText: charcoal600,
    borderColor: charcoal300,
    dark: charcoal500,
    darker: charcoal600,
    light: charcoal100,
    lighter: charcoal000,
    linkColor: blue500,
    main: charcoal400,
    text: white,
  },
  primary: {
    altText: purple400,
    borderColor: charcoal300,
    dark: primary600,
    darker: primary700,
    light: purple100,
    lighter: purple000,
    linkColor: blue500,
    main: primary500,
    text: white,
  },
  secondary: {
    altText: purple400,
    borderColor: charcoal300,
    dark: primary600,
    darker: primary700,
    light: purple100,
    lighter: purple000,
    linkColor: blue500,
    main: primary500,
    text: white,
  },
}
