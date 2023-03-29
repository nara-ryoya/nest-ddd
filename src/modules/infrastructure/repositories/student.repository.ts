import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';
import { Prisma, Student } from '../prismaClient';

@Injectable()
export class StudentRepository {
  constructor(private prisma: PrismaService) {}

  async find(studentId: number): Promise<Student | null> {
    return this.prisma.student.findUnique({
      where: { id: studentId },
    });
  }

  async create(data: Prisma.StudentCreateInput): Promise<Student> {
    return this.prisma.student.create({ data });
  }
}
