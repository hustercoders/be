import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class initPostTag1560651459133 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    return await queryRunner.createTable(
      new Table({
        name: "post_tag",
        columns: [
          {
            name: "post_id",
            type: "integer",
            isNullable: false,
            isPrimary: true
          },
          {
            name: "tag_id",
            type: "integer",
            isNullable: false,
            isPrimary: true
          }
        ],
        foreignKeys: [
          {
            columnNames: ["post_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "posts",
            onDelete: "CASCADE"
          },
          {
            columnNames: ["tag_id"],
            referencedTableName: "tags",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE"
          }
        ]
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    return await queryRunner.dropTable("post_tag", true);
  }
}
