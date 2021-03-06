module.exports = (sequelize, Sequelize) => {
	
	var Investment = sequelize.define('Investment', {
		
		name: {
			type: Sequelize.STRING
		},
		asset_type: {
			type: Sequelize.STRING,
			defaultValue: 'equity'
		},
		symbol: {
			type: Sequelize.STRING
		},
		purchase_date: {
			type: Sequelize.DATE,
			defaultValue: Sequelize.NOW
		},
		quantity: {
			type: Sequelize.INTEGER
		},
		price: {
			type: Sequelize.DECIMAL
		}
	},
	{
		underscored: true
	});

	Investment.associate = (models) => {
		Investment.belongsTo(models.user, {
			allowNull: false
		});
	};
		
	return Investment;
}