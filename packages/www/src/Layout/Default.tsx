/*

 MIT License

 Copyright (c) 2019 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

import { MDXRenderer } from 'gatsby-plugin-mdx'
import { graphql } from 'gatsby'
import React from 'react'
import { Heading } from '@looker/components'
import Layout, { LayoutMain } from './Layout'

interface PageQuery {
  data: {
    mdx: {
      body: string
      frontmatter: {
        title: string
      }
    }
  }
}

const DefaultLayout = (props: PageQuery) => {
  const { mdx } = props.data
  const { title } = mdx.frontmatter

  return (
    <Layout>
      <LayoutMain>
        <Heading as="h1" fontSize="xxxxlarge" fontWeight="light">
          {title}
        </Heading>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </LayoutMain>
    </Layout>
  )
}

export default DefaultLayout

export const pageQuery = graphql`
  query BasicPage($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
      tableOfContents
    }
  }
`