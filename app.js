var exec = require('child-process-promise').exec;

function readTemp() {
    exec('python temperature.py > /tmp/temp')
        .then(function (result) {
            setTimeout(readTemp, 1500);            
        });
}

setTimeout(readTemp, 1500);
