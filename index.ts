import {ApolloServer} from 'apollo-server-lambda';
import {schema} from './src/schema';
import {resolvers} from './src/resolvers';

const getUser = async ({requestContext: {authorizer}}: any) => {
  if (authorizer) {
    const {
      claims: {sub: id},
    } = authorizer;

    const user = {
      name: 'Panayiotis',
    };

    if (user) {
      return user;
    }
  }

  return null;
};

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  formatError: (error: any) => {
    console.log(error);
    return error;
  },
  formatResponse: (response: any) => {
    console.log(response);
    return response;
  },
  context: async ({event, context}: any) => ({
    headers: event.headers,
    functionName: context.functionName,
    event,
    context,
    user: await getUser(event),
  }),
  playground: {
    endpoint: process.env.STAGE === 'prod' ? '/prod/graphql' : '/dev/graphql',
  },
  tracing: true,
});

exports.graphqlHandler = server.createHandler({
  cors: {
    origin: '*',
  },
});
