import styled from "styled-components"
import {
  dark,
  headerFont,
  accentMain,
  accentMainLight,
  background,
  shadowMain,
} from "../../Layout/variables"
export const Wrapper = styled.div`
  a {
    color: ${dark};
    text-decoration: none;
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    font-family: ${headerFont};
    &:hover {
      color: ${accentMain};
    }
  }

  .active {
    color: ${accentMain};
  }

  .navbarLink {
    position: relative;
    display: inline-block;
  }

  ${({ desktop }) =>
    desktop
      ? `
			@media (max-width: 960px) {
					display: none;
			}

			.navbarLink {
					margin-right: 3rem;

					&:last-child {
							margin-right: unset;
					}
			}
		`
      : `
			padding: 3rem;
			display: flex;
			flex-direction: column;

			.navbarLink {
					margin-bottom: 1rem;

					&:last-child {
							margin-bottom: unset;
					}
			}
	`}
`

export const Menu = styled.ul`
  display: none;
  list-style: none;
  padding: 1rem;
  position: absolute;
  top: 35px;
  left: 0;
  z-index: 20;
  min-width: 200px;
  background: ${background};
  box-shadow: ${shadowMain};
  a {
    font-size: 15px;
    text-transform: none;
    font-weight: 500;
  }

  &.active {
    display: block;
  }
  li {
    color: ${dark};
    padding: 0.5rem;
    a:hover {
      color: ${dark};
    }
    &:hover {
      background: ${accentMainLight};
    }
  }
  ${({ desktop }) =>
    desktop
      ? ``
      : `
    &.active {
      position: relative;
      top: 0;
      left: 5px;
      padding: 0;
      box-shadow: none;
    }
  `}
`
