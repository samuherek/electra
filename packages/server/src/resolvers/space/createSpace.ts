import { Resolver, Mutation, Ctx, Args } from 'type-graphql';

import { IMyContext } from '../../types/Context';
import { Space } from '../../entity/Space';
import CreateSpaceArgs from './createSpace/CreateSpaceArgs';

@Resolver()
export class CreateSpaceResolver {
  @Mutation(() => Space)
  async createSpace(@Args() { name }: CreateSpaceArgs, @Ctx() ctx: IMyContext) {
    const { userId } = ctx.req.session!;
    const space = await Space.create({
      name,
      userId,
    }).save();

    console.log(space);

    return space;
  }
}
