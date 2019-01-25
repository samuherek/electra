import { Resolver, FieldResolver, Root } from 'type-graphql';
import { User } from '../../entity/User';

const nullToString = (value?: string): string => {
  return !value ? '' : value;
};

@Resolver(() => User)
export class UserFieldResolversResolver {
  @FieldResolver()
  async fullName(@Root() { firstName, lastName }: User) {
    const firstString = nullToString(firstName);
    const lastString = nullToString(lastName);

    return firstName !== null && lastName !== null
      ? firstString + lastString
      : null;
  }
}
