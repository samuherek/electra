import { Resolver, Mutation, Ctx, Args } from 'type-graphql';
import { getConnection } from 'typeorm';
import { IMyContext } from '../../types/Context';
import DeleteSpaceArgs from './deleteSpace/DeleteSpaceArgs';
import { Space } from '../../entity/Space';
import { Collection } from '../../entity/Collection';
import { Page } from '../../entity/Page';

@Resolver()
export class DeleteSpaceResolver {
  @Mutation(() => Boolean)
  async deleteSpace(@Args() { id }: DeleteSpaceArgs, @Ctx() ctx: IMyContext) {
    const { userId } = ctx.req.session!;
    const space = await Space.findOne(id);

    if (!space) {
      throw new Error('no such space');
    }

    if (space.userId !== userId) {
      throw new Error('We could not do what you are asking');
    }

    try {
      await getConnection()
        .createQueryBuilder()
        .update(Collection)
        .set({ spaceId: null })
        .where('"spaceId" = :id', { id: space.id })
        .execute();

      await getConnection()
        .createQueryBuilder()
        .update(Page)
        .set({ spaceId: null })
        .where('"spaceId" = :id', { id: space.id })
        .execute();

      await getConnection()
        .createQueryBuilder()
        .delete()
        .from(Space)
        .where('id = :id', { id })
        .execute();

      return true;
    } catch (err) {
      throw new Error(err);
    }
  }
}
