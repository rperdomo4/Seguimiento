import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const RepuestosRequisicion = sequelize.define('RepuestosRequisicion', {
  Id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  NRequisicion: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  Repuesto: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  Cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'RepuestosRequisicion',
  timestamps: false
});

export default RepuestosRequisicion;
