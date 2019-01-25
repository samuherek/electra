import { ArgsType, Field } from 'type-graphql';
import { IsEmail } from 'class-validator';

@ArgsType()
export default class RegisterArgs {
  @Field()
  @IsEmail()
  email: string;

  @Field()
  password: string;
}
