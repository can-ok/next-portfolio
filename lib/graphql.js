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
      url
      posts(first: 8) {
        edges {
          node {
            title
            brief
            slug
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
  const baseUrl = data.publication.url.replace(/\/+$/, '');
  return data.publication.posts.edges.map((edge) => ({
    ...edge,
    node: {
      ...edge.node,
      url: `${baseUrl}/${edge.node.slug.replace(/^\/+/, '')}`,
    },
  }));
};