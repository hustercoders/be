import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class initTags1560651255156 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: "tags",
        columns: [
          {
            name: "id",
            type: "integer",
            isPrimary: true,
            generationStrategy: "increment",
            isGenerated: true,
            isNullable: false
          },
          {
            name: "name",
            type: "varchar",
            isNullable: false,
            length: "255"
          }
        ]
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable("tags", true);
  }
}
