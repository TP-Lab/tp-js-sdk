var tp = require('./src/tp');

// dont override global variable
if (typeof window !== 'undefined' && typeof window.tp === 'undefined') {
    window.tp = tp;
}

module.exports = tp