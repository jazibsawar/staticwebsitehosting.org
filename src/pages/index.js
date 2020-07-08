import React, { useState, useMemo } from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import { sortBy, uniq, flatMap, isEmpty } from 'lodash'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ControlBar from '../components/controlbar'
import ProjectCard from '../components/projectcard'
import PromoCard from '../components/promocard'

const ProjectsList = styled.ul`
  display: grid;
  justify-content: space-between;
  grid-row-gap: 32px;
  list-style-type: none;
  padding-left: 0;
  margin: 48px auto;
  max-width: 320px;

  @media (min-width: 720px) {
    grid-template-columns: 47% 47%;
    max-width: 720px;
  }

  @media (min-width: 960px) {
    grid-template-columns: 31% 31% 31%;
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 23% 23% 23% 23%;
    max-width: 1200px;
  }
`

function compare(a, b, reverse) {
  const type = typeof a
  if (type === 'number') return reverse ? b - a : a - b
  if (type === 'string') return reverse ? b.localeCompare(a) : a.localeCompare(b)
  return 0
}

function statsForDays(allStats, targetDays) {
  const { projects } = allStats.find(({ days }) => targetDays === days) || {}
  return projects
}

function getProjectStats(allStats = [], id) {
  return allStats.find(({ id: projectId }) => id === projectId)
}

const IndexPage = ({ data }) => {
  const {
    allMarkdownRemark: { nodes: allMarkdownRemark },
    allSiteMetadataMarkdownRemark: { nodes: allSiteMetadataMarkdownRemark },
    site: { siteMetadata: siteMeta },
  } = data

  const projects = useMemo(() => {
    return allMarkdownRemark
      .filter(({ parent: { dir } }) => dir.endsWith('projects'))
      .map(({ frontmatter, parent }) => {
        const id = parent.name
        return {
          ...frontmatter,
          id,
        }
      })
  }, [allMarkdownRemark])


  const promoText = useMemo(() => {
    return allSiteMetadataMarkdownRemark.find(({ name }) => name === 'promo').html
  }, [allSiteMetadataMarkdownRemark])
  
  const sortedProjects = projects.sort((a, b) => {
    var textA = a.title.toUpperCase();
    var textB = b.title.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  })

  const renderProjects = () => {
    const list = sortedProjects.map(project => (
      <li key={project.id}>
        <ProjectCard {...project} />
      </li>
    ))
    list.splice(3, 0, <PromoCard key="promo" dangerouslySetInnerHTML={{ __html: promoText }} />)
    return list
  }

  return (
    <Layout>
      <SEO />
      <ProjectsList>{renderProjects()}</ProjectsList>
    </Layout>
  )
}

export const query = graphql`
  query ProjectsQuery {
    site {
      siteMetadata {
        fields {
          name
          label
        }
        filters {
          field
          emptyLabel
          multiple
        }
        sorts {
          field
          label
          reverse
          days
        }
        fallbackSortField
      }
    }
    allMarkdownRemark {
      nodes {
        frontmatter {
          description
          homepage
          cosmicapplink
          pricing
          title
          twitter
        }
        parent {
          ... on File {
            name
            dir
          }
        }
      }
    }
    allSiteMetadataMarkdownRemark {
      nodes {
        name
        html
      }
    }
  }
`

export default IndexPage
