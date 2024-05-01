import { MigrationInterface, QueryRunner } from "typeorm";

export class Initialize1714512640970 implements MigrationInterface {
    name = 'Initialize1714512640970'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "outage" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "link" varchar NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "outage"`);
    }

}
