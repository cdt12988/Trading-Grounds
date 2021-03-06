module.exports = (sequelize, Sequelize) => {
	
	var User = sequelize.define('user', {
		
		username: {
			type: Sequelize.STRING,
			notEmpty: true
		},
		email: {
			type: Sequelize.STRING,
			notEmpty: true,
			validate: {
				isEmail: true
			}
		},
		hashed_password: {
			type: Sequelize.STRING,
			allowNull: false
		},
		first_name: {
			type: Sequelize.STRING,
			notEmpty: true,
		},
		last_name: {
			type: Sequelize.STRING,
			notEmpty: true
		},
		bio: {
			type: Sequelize.TEXT
		},
		profile_pic: {
			type: Sequelize.STRING
		},
		last_login: {
			type: Sequelize.DATE
		},
		status: {
			type: Sequelize.ENUM('active', 'inactive'),
			defaultValue: 'active'
		},
		reset_password_token: {
			type: Sequelize.STRING,
		},
		reset_password_expires: {
			type: Sequelize.STRING,
		},
		cash: {
            type: Sequelize.INTEGER,
            defaultValue: 50000
        }
	},
	{
		underscored: true
	});
	
	User.associate = (models) => {
		User.hasMany(models.Investment, {
			onDelete: 'cascade'
		});
		User.hasMany(models.Transaction, {
			onDelete: 'cascade'
		});
		User.hasMany(models.Watchlist, {
			onDelete: 'cascade'
		});
	};
	
	return User;
}