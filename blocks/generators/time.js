'use strict';

goog.provide('Blockly.Python.accelerometer');
goog.require('Blockly.Python');

// Any imports need to be reserved words
Blockly.Python.addReservedWords('machine');
Blockly.Python.addReservedWords('time');

Blockly.Python['timer_event_every'] = function(block) {
  var value_time = Blockly.Python.valueToCode(block, 'time', Blockly.Python.ORDER_ATOMIC);
  var dropdown_type = block.getFieldValue('type');
  var statements_handler = Blockly.Python.statementToCode(block, 'handler');
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_machine'] = 'import machine';
  var callbackFunctionName = Blockly.Python.provideFunction_(
    'timer_callback_' + Math.floor(Math.random() * 20),
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '():',
      statements_handler
    ]);
  if (dropdown_type == 'sec')
    value_time = value_time*1000;
  var code = 'Timer(-1).init(period=' + value_time + ', mode=Timer.PERIODIC, callback=' + callbackFunctionName + ')\n';
  return code;
};

Blockly.Python['timer_event_after'] = function(block) {
  var value_time = Blockly.Python.valueToCode(block, 'time', Blockly.Python.ORDER_ATOMIC);
  var dropdown_type = block.getFieldValue('type');
  var statements_handler = Blockly.Python.statementToCode(block, 'handler');
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_machine'] = 'import machine';
  var callbackFunctionName = Blockly.Python.provideFunction_(
    'timer_callback_' + Math.floor(Math.random() * 20),
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '():',
      statements_handler
    ]);
  if (dropdown_type == 'sec')
    value_time = value_time*1000;
  var code = 'Timer(-1).init(period=' + value_time + ', mode=Timer.ONE_SHOT, callback=' + callbackFunctionName + ')\n';
  return code;
};

Blockly.Python['time_sleep'] = function(block) {
  var value_time = Blockly.Python.valueToCode(block, 'time', Blockly.Python.ORDER_ATOMIC);
  var dropdown_duration = block.getFieldValue('DURATION');
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_time'] = 'import time';
  var code = '';
  if (dropdown_duration == 'sec')
    code = 'time.sleep(' + value_time + ')\n';
  else if (dropdown_duration == 'mil')
    code = 'time.sleep_ms(' + value_time + ')\n';
  else if (dropdown_duration == 'mic')
    code = 'time.sleep_us(' + value_time + ')\n';
  return code;
};