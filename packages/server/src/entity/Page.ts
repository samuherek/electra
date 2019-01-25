import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import { Space } from './Space';

@Entity()
@ObjectType()
export class Page extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Field(() => String, { nullable: true })
  @Column({ type: 'text', nullable: true })
  root: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  tables: string;

  @Field()
  @CreateDateColumn({ type: 'timestamp with time zone' })
  createdAt: Date;

  @Field()
  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updatedAt: Date;

  @ManyToOne(() => Space, space => space.pages)
  space: Promise<Space>;
}
