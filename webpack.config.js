const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    // Iniciando por la entrada del proyecto
    // Haciendo referencia al archivo principal
    entry: './src/index.js',
    // En este output, es donde vamos a guardar los archivos resultantes cuando hagamos la configuracion
    output: {
        // La instancia resolve nos ayuda a detectar el directorio donde nos encontramos y el directorio donde vamos a guardar los archivos compilados
        path: path.resolve(__dirname, 'dist'),
        // Filename nos pode un nombre al archivo compilado
        filename: 'bundle.js'
    },
    // Este elemento resuelve las extensiones que se utilizaran en el proyecto
    resolve: {
        extensions: ['.js', '.jsx']
    },
    // Modulo con reglas necesarias
    module: {
        rules: [
            {
                // Regla principal
                // Identifica los archivos con una expresion regular
                test: /\.(js|jsx)$/,
                // Exclusion de carpetas
                exclude: /node_modules/,
                // Utilizamos el loader de babel
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            },
            {
                test: /\.(s*)css$/,
                use: [
                    {
                    loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/[name].css'
        })
    ]
};