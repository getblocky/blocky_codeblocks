'use strict';

goog.provide('Blockly.Python.accelerometer');
goog.require('Blockly.Python');

// Any imports need to be reserved words
Blockly.Python.addReservedWords('blocky');

Blockly.Python['message_send_message'] = function(block) {
  var value_topic = Blockly.Python.valueToCode(block, 'TOPIC', Blockly.Python.ORDER_ATOMIC);
  var value_msg = Blockly.Python.valueToCode(block, 'MSG', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'blocky.send_message(' + value_topic + ', ' + value_msg + ')\n';
  return code;
};

Blockly.Python['message_send_log'] = function(block) {
  var value_msg = Blockly.Python.valueToCode(block, 'MSG', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'blocky.log(' + value_msg + ')\n';
  return code;
};

Blockly.Python['message_subscribe_topic'] = function(block) {
  var value_topic = Blockly.Python.valueToCode(block, 'TOPIC', Blockly.Python.ORDER_ATOMIC);
  var variable_msg = Blockly.Python.variableDB_.getName(block.getFieldValue('MSG'), Blockly.Variables.NAME_TYPE);
  var dropdown_type = block.getFieldValue('TYPE');
  var statements_handler = Blockly.Python.statementToCode(block, 'HANDLER');
  // TODO: Assemble Python into code variable.
  var cbFunctionName = '';

  if (dropdown_type == 'NUMBER') {
    cbFunctionName = Blockly.Python.provideFunction_(
      'subscribe_callback_' + Math.floor(Math.random() * 50),
      ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(topic, message):',
        '  message = float(message)',
        statements_handler
      ]);
  } else {
    cbFunctionName = Blockly.Python.provideFunction_(
      'subscribe_callback_' + Math.floor(Math.random() * 50),
      ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(topic, message):',
        statements_handler
      ]);
  }
  var code = 'blocky.subscribe(' + value_topic + ', ' + cbFunctionName + ')\n';
  return code;
};