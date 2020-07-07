import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { EntypoTwitter, EntypoCredit } from 'react-entypo'

const TwitterIcon = styled(EntypoTwitter)`
  width: 16px !important;
  height: 16px !important;
  color: #666
`

const CardContainer = styled.div`
  background: #fff;
  border: 1px solid #eee;
  border-radius: 8px;
  color: #313d3e;
  display: block;
  font-size: 14px;
  padding: 18px;
  text-decoration: none;

  ul {
    padding: 10px 0 8px 20px;
  }

  .type {
    display: inline;
  }
`

const CardBodyLink = styled(Link)`
  display: block;
  margin: -18px;
  padding: 18px;

  &,
  &:link,
  &:active,
  &:hover {
    color: #313d3e;
    text-decoration: none;
  }
`

const Title = styled.h4`
  margin: 0 -18px 0px;
  font-weight: normal;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: ${props => (props.small ? '24px' : '30px')};
  padding: ${props => (props.small ? '7px 18px 10px' : '0 18px 6px')};
`

const Description = styled.p`
  margin-top: 16px;
  margin-bottom: 10px;
  hyphens: auto;
`

const StatsContainer = styled.div`
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  background: #fcfcfc;
  padding: 18px;
  margin: 16px -18px 0;
  display: flex;
  justify-content: center;
`

const CustomLink = styled.a`
  display: inline-block;
  white-space: nowrap;
  margin-right: 18px;

  &,
  &:visited {
    color: #666;
  }

  &:link,
  &:active,
  &:hover {
    color: #222;
    text-decoration: none;
  }
`

const CustomLinkInstall = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fcfcfc;
  border-top: 1px solid #eee;
  margin: 20px -18px -18px;
  border-radius: 0 0 8px 8px;
  color: #374344 !important;
  font-size: 17px;
  padding: 11px;

  &,
  &:link,
  &:active,
  &:hover {
    color: #313d3e;
    text-decoration: none;
  }

  img {
    width: 28px;
    margin-right: 8px;
  }
`

const Card = props => {
  const {
    id,
    title,
    description,
    cosmicapplink,
    twitter,
    pricing,
    fields,
    stats: { stars, issues, forks, followers } = {},
    previousStats: {
      stars: starsPrevious,
      issues: issuesPrevious,
      forks: forksPrevious,
      followers: followersPrevious,
    } = {},
    previousStatsAgeInDays,
  } = props
  return (
    <CardContainer>
      <CardBodyLink to={`/${id}`}>
        <Title small={title && title.length > 14}>{title}</Title>
        {
          twitter && 
          <CustomLink target="_blank" onClick={(e) => { e.stopPropagation()}} href={`https://twitter.com/${twitter}`}><TwitterIcon /> Twitter</CustomLink>
        }
        {
          pricing &&
          <CustomLink target="_blank" onClick={(e) => { e.stopPropagation()}} href={pricing}><EntypoCredit /> Pricing</CustomLink>
        }
        <Description>{description}</Description>
      </CardBodyLink>
      {cosmicapplink && (
        <CustomLinkInstall target="_blank" onClick={(e) => { e.stopPropagation()}} href={cosmicapplink}>
          <img alt="" width="30" src="https://web-assets.cosmicjs.com/images/logo.svg" />Deploy Cosmic Starter
        </CustomLinkInstall>
      )}
    </CardContainer>
  )
}

export default Card
