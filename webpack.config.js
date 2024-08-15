module.exports = {
    // Other webpack config settings...
    module: {
        rules: [
            {
                test: /\.(woff2?|ttf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/fonts/', // Adjust outputPath as per your project structure
                        },
                    },
                ],
            },
        ],
    },
};
