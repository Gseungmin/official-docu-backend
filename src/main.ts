import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TimeoutInterceptor } from './common/interceptor/timeout.intercetor';
import { ConfigService } from '@nestjs/config';
import { HttpExceptionFilter } from './common/exception/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new TimeoutInterceptor(configService));

  app.enableCors({
    origin: true,
    credentials: true,
  });

  const port = configService.get<number>('PORT');
  await app.listen(port);
}
bootstrap();
