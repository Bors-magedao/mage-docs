// theme.config.tsx
import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Mage Labs Docs</span>,
  /*project: {
    link: 'https://github.com/magelabs/mage-docs',
  },*/
  docsRepositoryBase: 'https://github.com/johnforfar/mage-docs',
  darkMode: true,
  sidebar: {
    //defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  navbar: {
    extraContent: (
      <>
        <a 
          href="https://t.me/magelabs" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ 
            display: 'inline-block',
            marginRight: '16px',
            verticalAlign: 'middle',
            fontSize: '20px'
          }}
          title="Telegram"
        >
          ✈️
        </a>
        <a 
          href="https://x.com/MageLabsOnSol" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ 
            display: 'inline-block',
            verticalAlign: 'middle',
            fontSize: '20px'
          }}
          title="X (formerly Twitter)"
        >
          𝕏
        </a>
      </>
    )
  },
  footer: {
    content: 'Mage Labs Docs'
  },
  // Setting navigation to false to disable any default navigation items
  navigation: false
}

export default config