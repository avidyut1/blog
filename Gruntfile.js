module.exports = function (grunt) {
	grunt.initConfig({
		concat: {
			css: {
				src: 'styles/*.css',
				dest: 'public/style.css'
			}
		},
		sass: {
			dist: {
				files: [{
					expand: true,
					cwd: 'styles',
			        src: ['*.scss'],
			        dest: './styles',
			        ext: '.css'
				}]
			}
		},
		cssmin: {
			options: {
				shorthandCompacting: false,
				roundingPrecision: -1
			},
			target: {
				files: {
					'public/style.min.css': ['public/style.css']
				}
			}
		},
		watch: {
		    src: {
		      files: ['styles/*.scss'],
		      tasks: ['default'],
		    }
		  },
		// uglify: {
		//     css: {
		//       files: {
		//         'public/style.min.css': 'public/style.css'
		//       }
		//     }
		//   }
	});
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');	
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.registerTask('default', ['sass:dist', 'concat:css', 'cssmin'])
	grunt.registerTask('watchcss', ['watch'])
}