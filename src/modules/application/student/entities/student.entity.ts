import { ObjectType } from '@nestjs/graphql';

@ObjectType({ description: '生徒' })
export class Student {
  id: number;
  jukuId: number;
  name: string;
}
