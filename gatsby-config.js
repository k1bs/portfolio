require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Alex Kibler, Web Developer',
    description: 'Alex Kibler is a senior-level web developer, proficient in React 16, Redux, Ruby on Rails, TDD, and CI/CD.',
    author: 'Alex Kibler (alex@alex-kibler.com)',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-default-html-attrs',
            options: {
              h1: ['subtitle', 'is-1'],
              h2: ['subtitle', 'is-2'],
              h3: ['subtitle', 'is-3'],
              h4: ['subtitle', 'is-4'],
              h5: ['subtitle', 'is-5'],
              h6: ['subtitle', 'is-6'],
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/src/blog`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-s3',
      options: {
        bucketName: `${process.env.S3_BUCKET_NAME}`,
      },
    },
    'gatsby-plugin-favicon',
  ],
};
