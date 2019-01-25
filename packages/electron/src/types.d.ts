declare module 'nedb-promises' {
  type Query = Object;
  type Projection = Object;
  type Update = Object;
  type Options = Object;
  type Docs = Object | Object[];
  type CreateOptions = string | Object;

  class Cursor {
    sort(): any;
  }

  class Datastore {
    load(): Promise<any>;
    find(query: Query, projection: Projection): Cursor;
    findOne(query: Query, projection: Projection): Promise<Object>;
    insert(docs: Docs): Promise<Docs>;
    update(
      query: Query,
      update: Update,
      options: Options
    ): Promise<number | Object | Object[]>;
    remove(query: Query, options: Options): Promise<number>;
    count(query: Query): Promise<number>;
    ensureIndex(options: Options): Promise<undefined>;
    removeIndex(field: string): Promise<undefined>;
    create(options: CreateOptions): Proxy<string>;
  }

  export = Datastore as any;
}
