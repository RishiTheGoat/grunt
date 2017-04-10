module.exports = {
	cssmin: {
		target: {
			files: [{
				expand: true,
				cwd: 'app/resources/assets/css',
				src: ['styles.css'],
				dest: 'app/resources/assets/css',
				ext: '.min.css'
			}]
		}
	}
};
