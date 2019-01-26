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
import { Collection } from './Collection';

@Entity()
@ObjectType()
export class Page extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Field(() => Block, { nullable: true })
  @OneToOne(() => Block, { nullable: true })
  @JoinColumn()
  root: Promise<Block>;

  @Field({ nullable: true })
  @Column({ nullable: true })
  name: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  icon: string;

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

  @Column('uuid')
  spaceId: string;

  @ManyToOne(() => Space, space => space.pages)
  space: Promise<Space>;

  @Column('uuid')
  collectionId: string;

  @ManyToOne(() => Collection, collection => collection.pages)
  collection: Promise<Collection>;

  // TODO: We probably don't need this
  @ManyToOne(() => Page, page => page.childPages, { nullable: true })
  parentPage: Page;

  // TODO: We probably don't need this
  @OneToMany(() => Page, page => page.parentPage, { nullable: true })
  childPages: Page[];
}
