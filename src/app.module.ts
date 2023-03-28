import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PresentationModule } from './modules/presentation/presentation.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: 'schema.gql',
      driver: ApolloDriver,
    }),
    PresentationModule,
  ],
})
export class AppModule {}
