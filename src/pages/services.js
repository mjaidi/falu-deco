import React from "react"
import { Link, graphql } from "gatsby"
import ScrollAnimation from "react-animate-on-scroll"
import remark from "remark"
import recommended from "remark-preset-lint-recommended"
import remarkHtml from "remark-html"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PageHeader from "../components/common/pageHeader"
import Button from "../components/common/button"
import { ServicesWrapper, ServicesCard } from "../page_styles/services"
import {
  accentSecondary,
  accentSecondaryLight,
  background,
} from "../components/Layout/variables"
import TriangleClip from "../components/common/triangleClip.js"

import servicesTitleImg from "../../content/assets/services.jpeg"

const Services = props => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const services = data.allMdx.edges

  return (
    <Layout location="/services" title={siteTitle}>
      <PageHeader title="Nos Services" image={servicesTitleImg}></PageHeader>
      <SEO title="Nos Services" />
      <ServicesWrapper>
        {services.map((p, index) => {
          const title = p.node.frontmatter.title || p.node.fields.slug
          return (
            <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce={true}>
              <div key={p.node.fields.slug}>
                {index !== 0 && (
                  <TriangleClip
                    color={index % 2 === 1 ? accentSecondaryLight : background}
                    textured={index % 2 === 1 ? true : false}
                  ></TriangleClip>
                )}
                <ServicesCard
                  background={
                    index % 2 === 1 ? accentSecondaryLight : background
                  }
                  textured={index % 2 === 1 ? true : false}
                  className={index % 2 === 1 ? "" : "padded"}
                >
                  <img
                    src={p.node.frontmatter.image}
                    alt={p.node.frontmatter.title}
                    className={index % 2 === 0 ? "show top" : "hide top"}
                  ></img>
                  <div className="services-content">
                    <h3>{title}</h3>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: remark()
                          .use(recommended)
                          .use(remarkHtml)
                          .processSync(p.node.frontmatter.description)
                          .toString(),
                      }}
                    />
                    <Link to={`/services${p.node.fields.slug}`}>
                      <Button background={accentSecondary}>
                        En savoir plus...
                      </Button>
                    </Link>
                  </div>
                  <img
                    src={p.node.frontmatter.image}
                    alt={p.node.frontmatter.title}
                    className={index % 2 === 1 ? "show bottom" : "hide bottom"}
                  ></img>
                </ServicesCard>
                {index !== services.length - 1 && (
                  <TriangleClip
                    color={index % 2 === 1 ? accentSecondaryLight : background}
                    textured={index % 2 === 1 ? true : false}
                    direction="bottom"
                  ></TriangleClip>
                )}
              </div>
            </ScrollAnimation>
          )
        })}
      </ServicesWrapper>
    </Layout>
  )
}

export default Services

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      filter: {
        parent: { internal: { description: { regex: "/content/services/" } } }
      }
      sort: { order: ASC, fields: frontmatter___order }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            description
            image
          }
        }
      }
    }
  }
`
