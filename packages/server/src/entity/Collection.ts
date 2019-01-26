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

  @Column({ type: 'jsonb', nullable: true })
  pageTree: IPageTree[];

  @Field()
  @Column()
  name: string;

  // @Field(() => [Page])
  // pageTree: Promise<Page[]>;

  @OneToMany(() => Page, page => page.collection)
  pages: Promise<Page[]>;

  @Column('uuid')
  spaceId: string;

  @ManyToOne(() => Space, space => space.collections)
  space: Promise<Space>;
}
