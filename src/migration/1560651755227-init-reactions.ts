import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class initReactions1560651755227 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    return await queryRunner.createTable(
      new Table({
        name: "reactions",
        columns: [
          {
            name: "id",
            type: "integer",
            isNullable: false,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment"
          },
          {
            name: "name",
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
    return await queryRunner.dropTable("reactions", true);
  }
}
