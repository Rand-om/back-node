import { Model, DataTypes } from 'sequelize';
import sequelize from './database';

class PostModel extends Model {
  public id!: number;
  public name!: string;
  public description!: string;
  public created_at!: Date;
}

PostModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: 'Post',
    tableName: 'posts',
    createdAt: 'created_at',
    updatedAt: false
  }
);

export default PostModel;
