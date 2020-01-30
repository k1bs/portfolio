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
