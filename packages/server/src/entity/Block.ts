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
import { Page } from './Page';

@Entity()
@ObjectType()
export class Block extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Field()
  @Column({ default: true })
  alive: boolean;

  @Field()
  @Column({ default: false })
  isPageRoot: boolean;

  @Field({ nullable: true })
  @Column({ nullable: true })
  title: string;

  @Field()
  content: string;

  @Field()
  @CreateDateColumn({ type: 'timestamp with time zone' })
  createdAt: Date;

  @Field()
  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updatedAt: Date;

  @Column({ default: 'text' })
  type: string;

  @ManyToOne(() => Page, page => page.content)
  page: Promise<Page>;
}
