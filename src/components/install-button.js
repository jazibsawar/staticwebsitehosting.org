import React from 'react'
import styled from '@emotion/styled'

const installButton = styled(({ link, className }) => (
  <a className={className} href={link}><img alt="" width="30" src="https://web-assets.cosmicjs.com/images/logo.svg" />Install on Cosmic</a>
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

export default installButton
