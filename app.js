var exec = require('child-process-promise').exec;

function readTemp() {
    exec('python temperature.py')
        .then(function (result) {
            setTimeout(readTemp, 1500);            
        });
}

setTimeout(readTemp, 1500);
