import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';

config({ path: `${__dirname}/${process.env.NODE_ENV}/.env` });

const configService = new ConfigService({
  envFilePath: `${__dirname}/${process.env.NODE_ENV}/.env`,
});

export default new DataSource({
  logging: true,
  type: 'mysql',
  host: configService.get('DB_HOST'),
  port: configService.get('DB_PORT'),
  username: configService.get('DB_USER'),
  password: configService.get('DB_PASS'),
  database: configService.get('DB_NAME'),
  entities: ['dist/**/*.entity{.js}'],
  migrations: ['dist/migrations/*.{ts,js}'],
});
