import { ObjectType } from 'type-graphql';

@ObjectType()
export class PageTreeItem {
  id: string;
  children: any[];
}
