import { MiddlewareConsumer, Module, NestModule, RequestMethod, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LoggerMiddleware } from 'src/shared/middleware/logger/logger.middleware';
import { AuthMiddleware } from 'src/shared/middleware/auth/auth.middleware';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware).forRoutes(
        { path: '/auth', method: RequestMethod.GET },
        { path: '/auth', method: RequestMethod.POST }
      )
      .apply(AuthMiddleware).forRoutes('auth')
  }
}
