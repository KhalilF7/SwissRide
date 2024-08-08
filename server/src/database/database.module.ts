import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

const dbConfig = require("../../ormconfig.json");

@Module({
  imports: [TypeOrmModule.forRoot({
    ...dbConfig,
    type: 'mysql', // Use the standard mysql driver
  }),],
  exports: [TypeOrmModule],
})
export class DatabaseModule {
  constructor(connection: Connection) {
    if (connection.isConnected) console.log('DB Connected Successfully!');
  }
}