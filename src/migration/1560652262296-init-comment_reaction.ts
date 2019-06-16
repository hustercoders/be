import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class initCommentReaction1560652262296 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    return await queryRunner.createTable(
      new Table({
        name: "comment_reaction",
        columns: [
          {
            name: "user_id",
            type: "integer",
            isNullable: false,
            isPrimary: true
          },
          {
            name: "reaction_id",
            type: "integer",
            isNullable: false,
            isPrimary: true
          },
          {
            name: "comment_id",
            type: "integer",
            isNullable: false,
            isPrimary: true
          }
        ],
        foreignKeys: [
          {
            columnNames: ["comment_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "comments",
            onDelete: "CASCADE"
          },
          {
            columnNames: ["user_id"],
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE"
          },
          {
            columnNames: ["reaction_id"],
            referencedTableName: "reactions",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE"
          }
        ]
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    return await queryRunner.dropTable("comment_reaction", true);
  }
}
