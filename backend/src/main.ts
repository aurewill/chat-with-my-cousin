import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const port = process.env.BACKEND_SERVICE_PORT || 8000;
const prefix = process.env.BACKEND_ROUTE_PREFIX || "/api";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(prefix);
  await app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
}
bootstrap();
