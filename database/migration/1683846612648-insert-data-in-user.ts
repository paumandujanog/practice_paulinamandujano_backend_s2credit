import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertDataInUser1683846612648 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO "User" (user_name,password) VALUES ('s2credit','98f43f47eef52d9fb6a5e98a91e317fb')`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM "Project" WHERE id > 0`);
  }
}
