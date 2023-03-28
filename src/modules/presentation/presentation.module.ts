import { Module } from '@nestjs/common';

import { _StudentPresentationModule } from './student/student.presentation.module';

@Module({
  imports: [_StudentPresentationModule],
})
export class PresentationModule {}
