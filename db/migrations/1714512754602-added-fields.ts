import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedFields1714512754602 implements MigrationInterface {
    name = 'AddedFields1714512754602'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_outage" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "link" varchar NOT NULL, "http_code" integer, "http_message" varchar, "date" datetime NOT NULL, "wasSuccessful" boolean NOT NULL)`);
        await queryRunner.query(`INSERT INTO "temporary_outage"("id", "link") SELECT "id", "link" FROM "outage"`);
        await queryRunner.query(`DROP TABLE "outage"`);
        await queryRunner.query(`ALTER TABLE "temporary_outage" RENAME TO "outage"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "outage" RENAME TO "temporary_outage"`);
        await queryRunner.query(`CREATE TABLE "outage" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "link" varchar NOT NULL)`);
        await queryRunner.query(`INSERT INTO "outage"("id", "link") SELECT "id", "link" FROM "temporary_outage"`);
        await queryRunner.query(`DROP TABLE "temporary_outage"`);
    }

}
