import { ArgsType, Field } from 'type-graphql';
import { MaxLength } from 'class-validator';

@ArgsType()
export default class CreateSpaceArgs {
  @Field()
  @MaxLength(30)
  name: string;
}
