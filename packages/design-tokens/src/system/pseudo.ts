import { css, CSSObject } from 'styled-components'

export interface PseudoProps {
  /**
   * Styling for :hover pseudo class.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference)
   * @example <Box hoverStyle={{border: '1px solid black'}}/>
   */
  hoverStyle?: CSSObject
  /**
   * Styling for :focus pseudo class.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference)
   * @example <Box focusStyle={{border: '1px solid black'}}/>
   */
  focusStyle?: CSSObject
  /**
   * Styling for :active pseudo class.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference)
   * @example <Box activeStyle={{border: '1px solid black'}}/>
   */
  activeStyle?: CSSObject
}

const pseudoClassHover = (props: PseudoProps) => {
  return (
    props.hoverStyle &&
    css`
      :hover {
        ${props.hoverStyle};
      }
    `
  )
}

const pseudoClassFocus = (props: PseudoProps) => {
  return (
    props.focusStyle &&
    css`
      :focus {
        ${props.focusStyle};
      }
    `
  )
}

const pseudoClassActive = (props: PseudoProps) => {
  return (
    props.activeStyle &&
    css`
      :active {
        ${props.activeStyle};
      }
    `
  )
}

export const pseudoClasses = css`
  /**
   * Pseudo classes can be styled by passing a CSS.Properties type to the
   * corresponding pseudo class helper prop. For example: <Box
   * hoverStyle={{border: '1px solid black'}}/>
   */
  ${pseudoClassHover}
  ${pseudoClassFocus}
  ${pseudoClassActive}
`