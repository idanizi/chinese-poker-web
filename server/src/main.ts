require('dotenv-flow').config()

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import morgan from 'morgan';
import { Logger } from '@nestjs/common';
import chalk from 'chalk';

const config = require('config').get('main')
const port = process.env.port || config.port;
const logger = new Logger();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: true });
  app.setGlobalPrefix('/api')
  
  //#region morgan
  morgan.token('context', () => 'Http')
  morgan.token('pid', () => String(process.pid))
  morgan.token('timestamp', logger.getTimestamp)
  app.use(morgan(chalk.magentaBright(`[:context] :pid   - :timestamp   [:method] :url :status :response-time ms`)))
  //#endregion
  
  await app.listen(port);
  logger.log(`Application up and running on ${port}`, 'Main')
}
bootstrap();
