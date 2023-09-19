import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../instances/pg';

export interface TodoInstance extends Model {
    id: number,
    title: string,
    done: boolean
};

export const Todo = sequelize.define<TodoInstance>('Todo',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title:{
        type: DataTypes.STRING
    },
    done:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
},{
    tableName: 'todos',
    timestamps: false
});