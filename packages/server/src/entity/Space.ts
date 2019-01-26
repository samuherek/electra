import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { ObjectType, Field, ID, Root } from 'type-graphql';
import { User } from './User';
import { Page } from './Page';
import { Collection } from './Collection';

@Entity()
@ObjectType()
export class Space extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Field()
  @Column({ type: 'text' })
  name: string;

  @Field()
  @CreateDateColumn({ type: 'timestamp with time zone' })
  createdAt: Date;

  @Field()
  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updatedAt: Date;

  @Column('uuid')
  userId: string;

  @ManyToOne(() => User, user => user.spaces)
  user: Promise<User>;

  // @Field(() => [Page])
  @OneToMany(() => Page, page => page.space)
  pages: Promise<Page>;

  @Field(() => [Collection])
  @OneToMany(() => Collection, collection => collection.space)
  collections(@Root() parent: Space): Promise<Collection[]> {
    return Collection.find({ where: { spaceId: parent.id } });
  }
}
