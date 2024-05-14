import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ProjectModule } from './project/project.module';

import { AuthModule } from './auth/auth.module';
import { ParamsModule } from './params/params.module';
import { PrismaService } from './shared/service/prisma/prisma.service';
import { UsersModule } from './users/users.module';
import { SchemaModule } from './schema/schema.module';

@Module({
  imports: [HttpModule, ProjectModule, ParamsModule, AuthModule, UsersModule, SchemaModule],
  providers: [PrismaService],
})
export class AppModule {}
