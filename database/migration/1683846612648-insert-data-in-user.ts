import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertDataInUser1683846612648 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO "User" (user_name,password) VALUES ('s2credit','61f77e3a91c37a841f32bbedc8349970')`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM "Project" WHERE id > 0`);
  }
}
