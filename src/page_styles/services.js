import styled from "styled-components"
import { headerFont, background } from "../components/Layout/variables"

export const ServicesWrapper = styled.div`
  margin: 0 auto;
`
export const ServicesCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 7rem 0;
  background: ${props => props.background || background};
  img {
    width: 30%;
    object-fit: cover;
    height: 15rem;
    margin: 0 3rem;
  }
  .services-content {
    width: 50%;
    text-align: center;
    padding: 0 1rem;
    margin: 0 auto;
    h3 {
      font-family: ${headerFont};
      text-transform: uppercase;
    }
    p {
      white-space: pre-wrap;
      text-align: justify;
      padding-bottom: 1rem;
    }
    a {
      width: 100%;
    }
    button {
      margin: 0 auto;
    }
  }

  .hide {
    display: none;
  }
  @media (max-width: 900px) {
    margin: 0;
    img {
      width: 80%;
      height: 12rem;
    }
    .services-content {
      width: 100%;
      margin-bottom: 4rem;
    }
    .top {
      display: block;
    }
    .bottom {
      display: none;
    }
  }
`
