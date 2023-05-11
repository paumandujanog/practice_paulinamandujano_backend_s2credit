import { MigrationInterface, QueryRunner } from 'typeorm';

export class createTableUser1683845430286 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "User" (
        "id" SERIAL NOT NULL, 
        "created_at" TIMESTAMP NOT NULL DEFAULT now(), 
        "updated_at" TIMESTAMP DEFAULT now(), 
        "deleted_at" TIMESTAMP,
        "user_name"  varchar,
        "password"   varchar,
        CONSTRAINT "PK_2725f461500317f74b0c8f11859" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "User"`);
  }
}
