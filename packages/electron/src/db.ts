// main/src/db.js
import { app } from 'electron';
import Datastore from 'nedb-promises';

const dbFactory = (fileName: string) =>
  Datastore.create({
    autoload: true,
    filename: `${
      // @ts-ignore
      process.env.NODE_ENV === 'development' ? '.' : app.getAppPath('userData')
    }/data/${fileName}`,
    timestampData: true,
  });

console.log(
  `${
    // @ts-ignore
    process.env.NODE_ENV === 'development' ? '.' : app.getAppPath('userData')
  }/data/posts.db`
);

const db = {
  posts: dbFactory('posts.db'),
  tags: dbFactory('tags.db'),
};

export default db;
