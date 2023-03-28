import { Module } from '@nestjs/common';

import { StudentResolver } from './resolvers/student.resolver';

@Module({
  providers: [StudentResolver],
})
export class _StudentPresentationModule {}
