module.exports  = function(grunt) {
	grunt.initConfig({
        	protractor: {
			options: {
				configfile: "protractor.conf.js",
				keepAlive: true,
				noColor: false,
				args: {
				}
			},
			your_target: {
				options: {
					configFile: "protractor.conf.js",
					args: {}
				}
			},
		    },
		push_svn: {
			options: {
			 remove: false,
			 pushIgnore: ['**/*.tmp'],
			 removeIgnore: ['**/*.gif'],
			 username: 'sotaoverride',
			 password: 'Aatirrumpumpum1'
		},
		main: {
		 src: '/Users/revolabs/munfaird2',
		 dest: 'https://svn.riouxsvn.com/tdd',
		 tmp: './.build'
                },
              },
              });

	grunt.loadNpmTasks('grunt-protractor-runner');
	grunt.loadNpmTasks('grunt-push-svn');
	grunt.registerTask('default', ["protractor", "push_svn"]);

}
