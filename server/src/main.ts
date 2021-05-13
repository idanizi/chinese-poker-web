require('dotenv-flow').config()

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import morgan from 'morgan';
import { Logger } from '@nestjs/common';

const config = require('config').get('main')
const port = process.env.port || config.port;
const logger = new Logger();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: true });
  app.setGlobalPrefix('/api')
  
  app.use(morgan('combined'))
  await app.listen(port);
  logger.log(`Application up and running on ${port}`, 'Main')
}
bootstrap();
