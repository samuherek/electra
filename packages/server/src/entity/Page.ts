import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import { Space } from './Space';
import { Block } from './Block';

@Entity()
@ObjectType()
export class Page extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  // @Column({ type: 'uuid', nullable: true })
  // rootId: string;

  @Field(() => Block, { nullable: true })
  @OneToOne(() => Block, { nullable: true })
  @JoinColumn()
  root: Promise<Block>;

  // @Field(() => String, { nullable: true })
  // @Column({ nullable: true })
  // tables: string;

  @Column({ type: 'uuid', array: true, nullable: true })
  contentIds: string[];

  @Field(() => [Block], { nullable: true })
  @OneToMany(() => Block, block => block.page)
  content: Promise<Block[]>;

  @Field()
  @CreateDateColumn({ type: 'timestamp with time zone' })
  createdAt: Date;

  @Field()
  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updatedAt: Date;

  @ManyToOne(() => Space, space => space.pages)
  space: Promise<Space>;
}
