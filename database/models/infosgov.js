module.exports = (sequelize, DataTypes) => {
  const InfosGov = sequelize.define(
    'Infos_Gov',
    {
      mesAno: {
        type: DataTypes.STRING,
        mesAno: 'mes_ano',
      },
      programaOrcamentario: {
        type: DataTypes.STRING,
        programaOrcamentario: 'programa_orcamentario',
      },
      acaoOrcamentaria: {
        type: DataTypes.STRING,
        acaoOrcamentaria: 'acao_orcamentaria',
      },
      valorEmpenhado: {
        type: DataTypes.FLOAT,
        valorEmpenhado: 'valor_empenhado'
      },
      valorLiquidado: {
        type: DataTypes.FLOAT,
        valorLiquidado: 'valor_liquidado'
      },
      valorPago: {
        type: DataTypes.FLOAT,
        valorPago: 'valor_pago'
      },
      valorRestosAPagarPagos: {
        type: DataTypes.FLOAT,
        valorRestosAPagarPagos: 'valor_restos_a_pagar_pagos'
      },
    },
    {
      timestamps: false,
      tablename: 'infos_gov',
      underscored: true,
    }
  );

  return InfosGov;
}
