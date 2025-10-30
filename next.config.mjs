import nextra from 'nextra'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  defaultShowCopyCode: true,
  mdxOptions: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex]
  }
})

export default withNextra({
  reactStrictMode: true
})