'use strict';

require('picker');
require('pickadate');
require('pickatime');

var options = require('./app/options.js');
var popup = require('./app/popup.js').Popup(options);
var selectable = require('./app/selectable.js').SelectableTable('table > tbody', options);
