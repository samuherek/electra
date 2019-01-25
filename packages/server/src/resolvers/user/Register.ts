import { Resolver, Mutation, Ctx, Args } from 'type-graphql';

import { User } from '../../entity/User';
import { userSessionIdPrefix } from '../../constants';
import RegisterArgs from './register/RegisterArgs';
import { IMyContext } from '../../types/Context';

@Resolver()
export class RegisterResolver {
  @Mutation(() => Boolean)
  async register(
    @Args() { email, password }: RegisterArgs,
    @Ctx() ctx: IMyContext
  ) {
    const userAlreadyExists = await User.findOne({
      select: ['id'],
      where: { email },
    });

    if (userAlreadyExists) {
      throw new Error('User already exists');
    }

    const user = await User.create({
      email,
      password,
    }).save();

    // registration successful
    ctx.req.session!.userId = user.id;

    if (ctx.req.sessionID) {
      await ctx.redis.lpush(
        `${userSessionIdPrefix}${user.id}`,
        ctx.req.sessionID
      );
    }

    // await sendEmail(
    //   'samuherekbiz@gmail.com',
    //   await createConfirmEmailLink(ctx.url, user.id, ctx.redis)
    // );

    return true;
  }
}
