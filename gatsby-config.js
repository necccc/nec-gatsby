module.exports = {
  siteMetadata: {
    title: '_Nec',
    description: '',
    keywords: '',
    twitter: '@_nec',
    twitterUrl: 'https://twitter.com/_nec',
    instagramUrl: 'https://www.instagram.com/_nec',
    linkedinUrl: 'https://www.linkedin.com/in/szabolcsit',
    githubUrl: 'https://github.com/necccc',
    email: 'nec@shell8.net',
    siteUrl: 'https://nec.is'
  },
  plugins: [

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'writing',
        path: `${__dirname}/content/writing`,
        ignore: [
          `**/*.jpg`, 
          `**/*.svg`,
          `**/*.gif`,
          `**/*.jpeg`,
          `**/*.webp`,
          `**/*.png`,     
          `**/*.js`, 
          `**/*.mp4`, 
          `**/*.m4v`
        ],
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'postimages',
        path: `${__dirname}/content/writing`,
        ignore: [
          `**/*.mdx`, 
          `**/*.js`, 
          `**/*.mp4`, 
          `**/*.m4v`
        ],
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'postvideos',
        path: `${__dirname}/content/writing`,
        ignore: [
          `**/*.mdx`, 
          `**/*.js`, 
          `**/*.jpg`, 
          `**/*.svg`,
          `**/*.gif`,
          `**/*.jpeg`,
          `**/*.webp`,
          `**/*.png`,     
          `**/*.js`,
        ],
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'speaking',
        path: `${__dirname}/content/speaking`
      }
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-copy-linked-files`,
          },
          {
            resolve: `gatsby-remark-smartypants`,
          },
          {
            resolve: "gatsby-remark-embed-gist",
            options: {
              // Optional:

              // the github handler whose gists are to be accessed
              username: 'necccc',

              // a flag indicating whether the github default gist css should be included or not
              // default: true
              includeDefaultCss: true
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 330,
              showCaptions: true
            },
          },
        ],
      },
    },

    'gatsby-transformer-sharp',

    'gatsby-plugin-sharp',

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-112128951-1',
        // Puts tracking script in the head instead of the body
        head: false,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: 'nec.is',
      },
    },

    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  data: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug
                })
              })
            },

            /* if you want to filter for only published posts, you can do
             * something like this:
             * filter: { frontmatter: { published: { ne: false } } }
             * just make sure to add a published frontmatter field to all posts,
             * otherwise gatsby will complain
             **/
            query: `
            {
              allMdx(
                limit: 1000,
                sort: { order: DESC, fields: [frontmatter___date] },
              ) {
                edges {
                  node {
                    body
                    fields { slug }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            }
            `,
            output: '/rss.xml',
            title: 'Gatsby RSS feed',
          },
        ],
      },
    },

    'gatsby-plugin-force-trailing-slashes',

    'gatsby-plugin-react-helmet',

    'gatsby-plugin-catch-links',

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'nec.is',
        short_name: 'nec',
        start_url: '/',
        background_color: '#000000',
        theme_color: '#000000',
        display: 'minimal-ui',
        icon: 'src/images/logo.png', // This path is relative to the root of the site.
      },
    },

    'gatsby-plugin-offline',

    'gatsby-plugin-sass',

    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
          rule: {
            include: `${__dirname}/src/images`,
          }
      }
    },

    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Libre Baskerville`,
            variants: [`400`,`700`],
          },
          {
            family: `Libre Franklin`,
            variants: [`300`,`500`]
          },
        ],
      },
    },
  ],
}
