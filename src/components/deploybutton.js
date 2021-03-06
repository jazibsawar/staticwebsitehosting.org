import React from 'react'
import styled from '@emotion/styled'

const DeployButton = styled(({ repo, className }) => (
  <a href="https://app.cosmicjs.com/add-bucket?import_bucket=5eff8acd3ea035000753b4b9"><img alt="" src="https://web-assets.cosmicjs.com/images/powered-by-cosmic.svg" /></a>
))`
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

export default DeployButton
