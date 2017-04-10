module.exports = {
		css: {
			files: ['app/resources/assets/sass/*.scss'],
			tasks: ['sass', 'cssmin']
		},
		js: {
			files: ['app/resources/assets/js/*.js'],
			tasks: ['uglify']
		}
};
