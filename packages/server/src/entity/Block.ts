import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import { User } from './User';

@Entity()
@ObjectType()
export class Block extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Field()
  @Column({ default: true })
  alive: boolean;

  @Field({ nullable: true })
  @Column({ nullable: true })
  title: string;

  // TODO: one to many of its own
  @Column({ type: 'uuid', array: true })
  contentIds?: string[];

  @Field(() => [Block])
  content: Promise<Block[]>;

  @Column('uuid')
  createdById: string;

  @Field(() => User)
  createdBy: Promise<User>;

  @Field()
  @CreateDateColumn({ type: 'timestamp with time zone' })
  createdAt: Date;

  @Field()
  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updatedAt: Date;

  // TODO: One to one of its own
  @Column('uuid')
  parentId: string;

  @Column({ default: 'text' })
  type: string;
}
