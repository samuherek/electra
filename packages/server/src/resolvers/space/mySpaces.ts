import { Resolver, Ctx, Query } from 'type-graphql';

import { IMyContext } from '../../types/Context';
import { User } from '../../entity/User';

@Resolver()
export class MySpacesResolver {
  @Query(() => User, { nullable: true })
  async me(@Ctx() ctx: IMyContext) {
    const { userId } = ctx.req.session!;
    return userId ? User.findOne(userId) : null;
  }
}
