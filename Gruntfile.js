module.exports = function(grunt){
	//do grunt-related thing in here
	  grunt.initConfig({
        
        uglify:{
            build:{
                files:[{
                    expand:true,
                    cwd:'js',
                    src:'**/*.js',
                    dest:'js',
                    ext:'.min.js'
                }]
            }
        },

        cssmin:{
			build:{ 
                
                expand:true,
                cwd:'css/',
                src:['**/*.css', '!**/*.min.css'],
                dest:'css/',
                ext:'.min.css'
            }
		},

		// imagemin:{
		// 	build:{
		// 		files:[{
		// 			expand:true,
		// 			cwd:'img/',
		// 			src:['**/*'.{jpg,png,jpeg}],
		// 			dest:'build/img/'
		// 		}]
		// 	}
		// }


    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    // grunt.loadNpmTasks('grunt-contrib-imagemin');

    
    grunt.registerTask('default',['uglify','cssmin','imagemin']);
    // grunt.registerTask('default',['uglify','cssmin']);
    // grunt.registerTask('default',['imagemin']);

}