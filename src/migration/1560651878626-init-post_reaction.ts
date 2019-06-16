import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class initPostReaction1560651878626 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    return await queryRunner.createTable(
      new Table({
        name: "post_reaction",
        columns: [
          {
            name: "post_id",
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
            name: "user_id",
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
    return await queryRunner.dropTable("post_reaction", true);
  }
}
