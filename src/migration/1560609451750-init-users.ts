import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class initUsers1560609451750 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "integer",
            isPrimary: true,
            isNullable: false,
            isGenerated: true,
            generationStrategy: "increment"
          },
          {
            name: "is_admin",
            type: "boolean",
            default: false
          },
          {
            name: "username",
            type: "varchar",
            length: "255",
            isNullable: false
          },
          {
            name: "password",
            type: "varchar",
            length: "255",
            isNullable: false
          }
        ]
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable("users", true);
  }
}
