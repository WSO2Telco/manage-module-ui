/**
 * Created by manoj on 7/12/17.
 */
var logger = exports;
logger.debugLevel = 'warn';
logger.log = function(level, message) {
    var levels = ['ERROR', 'warn', 'INFO'];
    if (levels.indexOf(level) >= levels.indexOf(logger.debugLevel) ) {
        if (typeof message !== 'string') {
            message = JSON.stringify(message);
        };
        console.log(level+': '+message);
    }
}