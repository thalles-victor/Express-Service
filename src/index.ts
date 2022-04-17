import express, { Request, Response } from 'express';
import { graphqlHTTP } from 'express-graphql';


const app = express();
const PORT = process.env.PORT || 3000 || 4000

/* PostRouters by Rest API */
import { postRouter, getPostById, addPost } from './routers/PostsRouter';
/* ----------- */

/* Graphql ultilities */
import { resolvers } from './graphql/Resolvres/resolver';
import { schema } from './graphql/Shemas/shema';

const booStrap = async () => {
  app.get('/', (req: Request, res: Response) => {
    res.status(200).send("Hello my frend")
  })

  app.use(postRouter);
  app.use(getPostById);
  app.use(addPost);
  app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
  }));

  app.listen(PORT, () => {
    console.log(`http://127.0.0.1:${PORT}`);
  });
}

booStrap()
  .then(() => {
    console.log('Server is running ✌️');
  })
  .catch((err) => {
    console.log('Have erro while running 😭, ', err)
  })
