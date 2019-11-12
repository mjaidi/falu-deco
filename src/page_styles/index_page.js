import styled from "styled-components"
import {
  shadowMain,
  headerFont,
  borderRadius,
} from "../components/Layout/variables"

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  font-family: ${headerFont};
  font-size: 35px;
  text-transform: uppercase;
`

export const About = styled.div`
  padding-top: 5rem;
  padding-bottom: 5rem;
  img {
    max-width: 100%;
    margin-right: 2rem;
    box-shadow: ${shadowMain};
  }
  p {
    white-space: pre-wrap;
    text-align: justify;
  }
`

export const Services = styled.div`
  padding-top: 3rem;
  padding-bottom: 10rem;
  a {
    text-decoration: none;
    color: inherit;
    height: 12rem;
    display: block;
  }
  .service-card {
    transition: all 0.5s;
    box-shadow: ${shadowMain};
    border-radius: ${borderRadius};
    height: 100%;
    background: white;

    &:hover {
      transform: scale(1.05);
    }
    img {
      width: 100%;
      max-height: 70%;
      object-fit: contain;
      margin-bottom: 0;
      border-radius: ${borderRadius} ${borderRadius} 0 0;
    }
    h4 {
      text-align: center;
      padding: 1rem 0;
      margin: 0;
    }
  }
`

export const Instagram = styled.div`
  padding-top: 3rem;
  padding-bottom: 10rem;
  .insta-card {
    transition: all 0.5s;
    box-shadow: ${shadowMain};
    border-radius: ${borderRadius};
    height: 100%;
    background: white;
    height: 25rem;

    &:hover {
      transform: scale(1.05);
    }
    .react_lightgallery_item {
      height: 70%;
    }
    .gatsby-image-wrapper {
      width: 100% !important;
      height: 100% !important;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      margin-bottom: 0;
      border-radius: ${borderRadius} ${borderRadius} 0px 0px;
    }
    p {
      text-align: center;
      padding: 1.5rem 0.4rem;
      margin: 0;
      overflow: hidden;
      height: 70px;
    }
  }
`

export const Clients = styled.div`
  padding-top: 5rem;
  padding-bottom: 5rem;
  img {
    width: 100%;
    max-height: 15rem;
    object-fit: contain;
  }
`
