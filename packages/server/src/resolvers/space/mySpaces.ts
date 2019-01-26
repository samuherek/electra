import { Resolver, Ctx, Query } from 'type-graphql';

import { IMyContext } from '../../types/Context';
import { Space } from '../../entity/Space';

@Resolver()
export class MySpacesResolver {
  @Query(() => [Space])
  async mySpaces(@Ctx() ctx: IMyContext) {
    const { userId } = ctx.req.session!;
    return Space.find({ where: { userId } });
  }
}
