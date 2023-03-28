import { Module } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class StudentResolver {
  @Query(() => String)
  getStudent(@Args('id') id: number) {
    return `Student ${id}`;
  }
}
