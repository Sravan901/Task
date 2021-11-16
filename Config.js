exports.config = {
    directConnect : true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities:{
        "browserName" : "chrome",
    },
    specs: ['features/Login.feature'],
    cucumberOpts: {
        format:'json:sample_report.json',
        require: [
            'StepDefinition/LoginStepDef.js',
            'timeout.js'
        ]
    }
}