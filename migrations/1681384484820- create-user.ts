import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUser1681384484820 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    return await queryRunner.manager.query(`CREATE TABLE users (
            id varchar(100) not null,
            first_name varchar(200) not null,
            last_name varchar(200) not null,
            email varchar (200) not null,
            phone_number varchar(50) not null,
            created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP)`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    return await queryRunner.manager.query(`DROP TABLE users`);
  }
}
