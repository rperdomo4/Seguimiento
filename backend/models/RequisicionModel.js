import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
 
const Requisicion = sequelize.define('Requisicion', {
  NRequisicion: {
    type: DataTypes.STRING(50),
    primaryKey: true,
    allowNull: false
  },
  Fecha: {
    type: DataTypes.DATE,
    allowNull: false
  },
  Lugar: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  SolicitadaPor: {
    type: DataTypes.STRING(50),// Se cambio de emleado fk a solicitada
    allowNull: false
  },
  RegistroFK: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  CreadaPor: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  EstadoReq: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  AprobadaPor: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  Observaciones: {
    type: DataTypes.STRING(255),
    allowNull: true 
  },
  Prioridad: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  Direccion:{
    type: DataTypes.STRING(100),
    allowNull: false
  },
 

}, {
  tableName: 'Requisicion',
  timestamps: true
});
export default Requisicion;