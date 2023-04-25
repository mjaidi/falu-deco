import React from "react"
import { Link, graphql } from "gatsby"
import ScrollAnimation from "react-animate-on-scroll"
import remark from "remark"
import recommended from "remark-preset-lint-recommended"
import remarkHtml from "remark-html"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import Grid from "../components/common/grid"
import GridItem from "../components/common/gridItem"
import Container from "../components/common/container"
import TriangleClip from "../components/common/triangleClip.js"
import Carousel from "../components/Carousel"
// import CarouselCard from "../components/CarouselCard"

import {
  About,
  Services,
  ProjetsPhares,
  Clients,
  Title,
} from "../page_styles/index_page"

const IndexPage = props => {
  const homePageData = props.data.home.nodes[0].frontmatter
  const aboutData = props.data.about.nodes[0].frontmatter
  const aboutText = remark()
    .use(recommended)
    .use(remarkHtml)
    .processSync(aboutData.text)
    .toString()

  const services = props.data.services.edges
  const clients = props.data.clients.nodes[0].frontmatter
  // const instagram = props.data.insta.edges.filter(
  //   i => i.node.localFile !== null
  // )

  const carouselImgs = homePageData.banner_gallery.map(g => {
    return { headline: g.title, subline: g.subtitle, url: g.image }
  })
  // const instagramImgs = instagram.map(i => {
  //   return {
  //     headline: i.node.caption,
  //     url: i.node.localFile.childImageSharp.fixed.src,
  //   }
  // })

  return (
    <Layout location="/">
      <SEO
        title={homePageData.seo_title}
        description={homePageData.seo_description}
      />
      {/* Main Banner Carousel */}
      <Carousel images={carouselImgs} />

      {/* Our History Section */}
      <Container>
        <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={2}>
          <About>
            <Grid>
              <GridItem lgColumns={10} lgNbColumns={4} margin={15}>
                <img src={aboutData.image} alt="about" />
              </GridItem>
              <GridItem lgColumns={10} lgNbColumns={6} margin={15}>
                <Title>{aboutData.title}</Title>
                <div dangerouslySetInnerHTML={{ __html: aboutText }} />
              </GridItem>
            </Grid>
          </About>
        </ScrollAnimation>
      </Container>

      {/* Services Cards */}
      <TriangleClip textured />
      <Container textured>
        <Services>
          <Title>Nos Services</Title>
          <Grid>
            {services.map(({ node }) => {
              return (
                <GridItem lgColumns={2} mdColumns={1} key={node.fields.slug}>
                  <ScrollAnimation
                    animateIn="fadeIn"
                    animateOnce={true}
                    duration={2}
                  >
                    <Link to={`services${node.fields.slug}`}>
                      <div className="service-card">
                        <Grid>
                          <GridItem lgColumns={2}>
                            <img
                              src={node.frontmatter.icon}
                              alt={node.frontmatter.title}
                            />
                            <h4>{node.frontmatter.title}</h4>
                          </GridItem>
                          <GridItem lgColumns={2}>
                            {node.frontmatter.categories.map(c => (
                              <p key={c.title}>{c.title}</p>
                            ))}
                          </GridItem>
                        </Grid>
                      </div>
                    </Link>
                  </ScrollAnimation>
                </GridItem>
              )
            })}
          </Grid>
        </Services>
      </Container>
      <TriangleClip direction="bottom" textured />

      {/* Projets Phares Cards */}
      <Container>
        <ProjetsPhares>
          <Title>Autres Réalisations</Title>
          <Grid>
            {aboutData.best_gallery.map((i, index) => {
              return (
                <GridItem key={index}>
                  <ScrollAnimation
                    animateIn="fadeIn"
                    animateOnce={true}
                    duration={2}
                  >
                    <div className="projets-card">
                      <img src={i.image} alt={i.title}></img>
                      <div className="overlay">
                        <p>{i.title}</p>
                      </div>
                    </div>
                  </ScrollAnimation>
                </GridItem>
              )
            })}
          </Grid>
        </ProjetsPhares>
      </Container>

      {/* Nouveautés Carousel */}
      {/* <TriangleClip textured />
      <Container textured>
        <div style={{ paddingTop: "2rem" }}>
          <Title>Nouveautés</Title>
          <ScrollAnimation animateIn="fadeIn" animateOnce={true} duration={2}>
            <CarouselCard images={instagramImgs} />
          </ScrollAnimation>
        </div>
      </Container>
      <TriangleClip direction="bottom" textured /> */}

      {/* Clients Section */}
      <Container>
        <Clients>
          <Title>Nos Clients</Title>
          <Grid justifyContent="left">
            {clients.client_gallery.map((c, index) => (
              <GridItem
                lgColumns={7}
                mdColumns={5}
                smColumns={3}
                key={JSON.stringify(c.logo)}
              >
                <ScrollAnimation
                  animateIn="fadeIn"
                  animateOnce={true}
                  duration={2}
                >
                  <img src={c.logo} alt={c.name}></img>
                </ScrollAnimation>
              </GridItem>
            ))}
          </Grid>
        </Clients>
      </Container>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    home: allMdx(
      filter: {
        parent: {
          internal: { description: { regex: "/content/home/home.md/" } }
        }
      }
    ) {
      nodes {
        frontmatter {
          banner_gallery {
            image
            subtitle
            title
          }
          seo_title
          seo_description
        }
      }
    }
    about: allMdx(
      filter: {
        parent: {
          internal: { description: { regex: "/content/home/about.md/" } }
        }
      }
    ) {
      nodes {
        frontmatter {
          best_gallery {
            image
            title
          }
          image
          text
          title
        }
      }
    }
    services: allMdx(
      filter: {
        parent: { internal: { description: { regex: "/content/services/" } } }
      }
      sort: { order: ASC, fields: frontmatter___order }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            icon
            categories {
              title
            }
          }
        }
      }
    }
    # insta: allInstaNode {
    #   edges {
    #     node {
    #       caption
    #       localFile {
    #         childImageSharp {
    #           fixed {
    #             ...GatsbyImageSharpFixed
    #           }
    #         }
    #       }
    #     }
    #   }
    # }
    clients: allMdx(
      filter: {
        parent: {
          internal: { description: { regex: "/content/home/clients.md/" } }
        }
      }
    ) {
      nodes {
        frontmatter {
          client_gallery {
            logo
            name
          }
        }
      }
    }
  }
`
