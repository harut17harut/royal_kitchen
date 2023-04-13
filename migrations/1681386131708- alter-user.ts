import { MigrationInterface, QueryRunner } from "typeorm"

export class  AlterUser1681386131708 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        return await queryRunner.manager.query(`ALTER TABLE users ADD CONSTRAINT unique_email UNIQUE (email),
        ADD PRIMARY KEY (id)`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        return await queryRunner.manager.query(`ALTER TABLE users DROP CONSTRAINT unique_email`)
    }

}
