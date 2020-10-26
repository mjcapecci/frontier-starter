import BackgroundImage from "gatsby-background-image"
import styled from 'styled-components';

export const Bg = styled(BackgroundImage)`
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: fixed;
  &::before,
  &::after {
    filter: brightness(0.62);
  }
`