import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  BeforeInsert,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { ObjectType, Field, ID, Root } from 'type-graphql';
import * as bcrypt from 'bcrypt';
import { Space } from './Space';

const nullToString = (value?: string): string => {
  return !value ? '' : value;
};

@Entity()
@ObjectType()
export class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Field()
  @Column({ type: 'text', unique: true })
  email: string;

  // TODO: remove password and use email auth.
  @Column()
  password: string;

  @Column({ default: false })
  confirmed: boolean;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  firstName?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  lastName?: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  profilePhoto?: string;

  @Field()
  @CreateDateColumn({ type: 'timestamp with time zone' })
  createdAt: Date;

  @Field(() => [Space])
  @OneToMany(() => Space, space => space.user)
  spaces: Promise<Space[]>;

  @BeforeInsert()
  async hashPasswordBeforeInsert() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  @Field(() => String, { nullable: true })
  fullName(@Root() { firstName, lastName }: User): string | null {
    const firstString = nullToString(firstName);
    const lastString = nullToString(lastName);

    return firstName !== null && lastName !== null
      ? firstString + lastString
      : null;
  }
}
