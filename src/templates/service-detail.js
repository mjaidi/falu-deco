import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery"
import remark from "remark"
import recommended from "remark-preset-lint-recommended"
import remarkHtml from "remark-html"
import pluralize from "pluralize"

import Container from "../components/common/container"
import PageHeader from "../components/common/pageHeader"
import Grid from "../components/common/grid"
import GridItem from "../components/common/gridItem"
import {
  GalleryItem,
  CategorySelector,
  CategoryHeader,
  ServiceNavigation,
} from "../template_styles/service-detail"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import "lightgallery.js/dist/css/lightgallery.css"

const ServiceDetailTemplate = props => {
  const [activeCategory, setActiveCategory] = useState("Tous")
  const service = props.data.allMdx.edges[0].node

  const siteTitle = props.data.site.siteMetadata.title
  const { previous, next } = props.pageContext
  let allImgs = []
  if (service.frontmatter.categories !== null) {
    for (const cat of service.frontmatter.categories) {
      for (const img of cat.images) {
        allImgs.push({ image: img, category: cat.title })
      }
    }
  }
  let filteredImgs = allImgs
  if (activeCategory !== "Tous") {
    filteredImgs = allImgs.filter(i => i.category === activeCategory)
  }
  const categoryList = [...new Set(allImgs.map(i => i.category))]
  categoryList.unshift("Tous")

  const categoryTitle = ["a", "e", "i", "o", "u"].includes(
    service.frontmatter.title.toLowerCase().charAt(0)
  )
    ? "Types d'"
    : "Types de "
  return (
    <Layout location={props.location} title={siteTitle}>
      <PageHeader
        title={service.frontmatter.title}
        image={service.frontmatter.image}
      ></PageHeader>

      <Container>
        <SEO
          title={service.frontmatter.seo_title}
          description={service.frontmatter.seo_description}
        />

        <ServiceNavigation>
          <li>
            {previous && (
              <Link to={`/services${previous.fields.slug}`} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`/services${next.fields.slug}`} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
          <div
            class="text-container"
            dangerouslySetInnerHTML={{
              __html: remark()
                .use(recommended)
                .use(remarkHtml)
                .processSync(service.frontmatter.description)
                .toString(),
            }}
          />
        </ServiceNavigation>

        <CategoryHeader>
          {categoryTitle}
          <span className="uppercase">
            {service.frontmatter.title
              .split(" ")
              .map(s => pluralize(s))
              .join(" ")}
          </span>
        </CategoryHeader>

        <CategorySelector>
          {categoryList.map(c => (
            <li
              onClick={event => setActiveCategory(c)}
              className={c === activeCategory ? "active" : ""}
              key={c}
            >
              {c}
            </li>
          ))}
        </CategorySelector>
        {filteredImgs.length > 0 && (
          <LightgalleryProvider>
            <Grid>
              {allImgs.map((i, index) => {
                return (
                  <GridItem
                    key={index}
                    hidden={filteredImgs.includes(i) ? false : true}
                  >
                    <GalleryItem>
                      <LightgalleryItem group={i.category} src={i.image}>
                        <img src={i.image} alt={i.category} />
                      </LightgalleryItem>
                    </GalleryItem>
                  </GridItem>
                )
              })}
            </Grid>
          </LightgalleryProvider>
        )}
      </Container>
    </Layout>
  )
}

export default ServiceDetailTemplate

export const pageQuery = graphql`
  query serviceDetailBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          id
          frontmatter {
            seo_title
            seo_description
            title
            description
            image
            categories {
              images
              title
            }
          }
        }
      }
    }
  }
`
