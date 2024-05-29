import { GraphQLClient } from 'graphql-request';

const endpoint = 'https://gql.hashnode.com/';

const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    // Add any necessary headers here (e.g., authorization)
  },
});

const query = `
  query {
    publication(host: "canokan.hashnode.dev") {
      posts(first: 9) {
        edges {
          node {
            title
            brief
            url
            coverImage {
              url
            }
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
`;

export const fetchPosts = async () => {
  const data = await graphQLClient.request(query);
  return data.publication.posts.edges;
};