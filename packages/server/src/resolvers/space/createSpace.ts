import { Resolver, Mutation, Ctx, Args } from 'type-graphql';

import { IMyContext } from '../../types/Context';
import { Space } from '../../entity/Space';
import CreateSpaceArgs from './createSpace/CreateSpaceArgs';
import { Collection } from '../../entity/Collection';
import { Page } from '../../entity/Page';

@Resolver()
export class CreateSpaceResolver {
  @Mutation(() => Space)
  async createSpace(@Args() { name }: CreateSpaceArgs, @Ctx() ctx: IMyContext) {
    const { userId } = ctx.req.session!;

    const space = await Space.create({
      name,
      userId,
    }).save();

    const collection = await Collection.create({
      name: 'Main',
      spaceId: space.id,
    }).save();

    const page = await Page.create({
      collectionId: collection.id,
      spaceId: space.id,
    }).save();

    await Collection.update(collection.id, {
      pageTree: [{ id: page.id, children: [] }],
    });

    // console.log(space, collection, page);

    return space;
  }
}
