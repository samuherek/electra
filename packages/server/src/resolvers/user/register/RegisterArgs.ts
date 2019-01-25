import { ArgsType, Field } from 'type-graphql';
import { IsEmail, Min } from 'class-validator';

@ArgsType()
export default class RegisterArgs {
  @Field()
  @IsEmail()
  email: string;

  @Field()
  @Min(3)
  password: string;
}
