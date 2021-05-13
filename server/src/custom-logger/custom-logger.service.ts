import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class CustomLoggerService extends Logger {}
