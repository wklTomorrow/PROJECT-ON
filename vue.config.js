module.exports = {
    lintOnSave: false,
    pages: {
        index: {
            entry: 'src/main.ts'
        }
    },
    configureWebpack: {    
        resolve: { extensions: [".ts", ".tsx", ".js", ".json"] },    
        module: {        
            rules: [    
            {    
                test: /\.tsx?$/,    
                loader: 'ts-loader',    
                exclude: /node_modules/,    
                options: {
                    appendTsSuffixTo: [/\.vue$/],    
                }    
            }        
            ]    
        }    
    }  
}  