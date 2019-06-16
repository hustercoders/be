import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class initPosts1560649779222 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: "posts",
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
            name: "title",
            type: "nvarchar",
            length: "255",
            isNullable: false
          },
          {
            name: "content",
            type: "text",
            isNullable: false
          },
          {
            name: "author_id",
            type: "integer",
            isNullable: false
          },
          {
            name: "created_at",
            type: "timestamp",
            isNullable: false
          },
          {
            name: "updated_at",
            type: "timestamp",
            isNullable: false
          }
        ],
        foreignKeys: [
          {
            columnNames: ["author_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "users",
            onDelete: "CASCADE"
          }
        ]
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable("posts", true);
  }
}
