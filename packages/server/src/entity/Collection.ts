import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import { Space } from './Space';
import { Page } from './Page';
// import { PageTreeItem } from '../objectTypes/PageTree';

interface IPageTree {
  id: string;
  children: object[];
}

@Entity()
@ObjectType()
export class Collection extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Field()
  @Column()
  name: string;

  @Column({ type: 'jsonb', nullable: true })
  pageTree: IPageTree[];

  @Field(() => [Page])
  @OneToMany(() => Page, page => page.collection)
  pages: Promise<Page[]>;

  @Column('uuid', { nullable: true })
  spaceId: string;

  @ManyToOne(() => Space, space => space.collections, { nullable: true })
  space: Promise<Space>;

  // @Field(() => [PageTreeItem])
  // pageTree(@Root() {pageOrder}: Collection)
}
