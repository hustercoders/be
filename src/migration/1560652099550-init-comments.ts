import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class initComments1560652099550 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: "comments",
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
            name: "content",
            type: "text",
            isNullable: false
          },
          {
            name: "user_id",
            type: "integer",
            isNullable: false
          },
          {
            name: "post_id",
            type: "integer",
            isNullable: false
          },
          {
            name: "reply_id",
            type: "integer",
            default: 0
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
            columnNames: ["user_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "users",
            onDelete: "CASCADE"
          },
          {
            columnNames: ["post_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "posts",
            onDelete: "CASCADE"
          },
          {
            columnNames: ["reply_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "comments",
            onDelete: "CASCADE"
          }
        ]
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    return await queryRunner.dropTable("comments", true);
  }
}
