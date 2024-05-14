import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ProjectModule } from './project/project.module';
import { SchemaModule } from './schema/schema.module';
import { ParamsModule } from './params/params.module';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './shared/service/prisma/prisma.service';
import { UsersModule } from './users/users.module';


@Module({
  imports: [HttpModule, ProjectModule, SchemaModule, ParamsModule, AuthModule, UsersModule],
  providers: [PrismaService],

})
export class AppModule { }
