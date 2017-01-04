module.exports = {
    entry: './src/app.js',
    output: {
        path: './bin',
        filename: 'app.bundle.js'
    },
    devServer: {
        inline: true,
        port: 8080
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_module/,
                loader: 'babel',
                query: {
                    presets: ["es2015", "react",'es2016'],
                    plugins: ["transform-object-rest-spread"]
                }
            }
        ]

    }
}