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
  var globals = ['blocky'];
  var varName;
  var workspace = block.workspace;
  var variables = workspace.getAllVariables() || [];
  for (var i = 0, variable; variable = variables[i]; i++) {
    varName = variable.name;
    if (varName != variable_msg)
      globals.push(Blockly.Python.variableDB_.getName(varName,
        Blockly.Variables.NAME_TYPE));
  }
  globals = globals.length ? Blockly.Python.INDENT + 'global ' + globals.join(', ') : '';

  var cbFunctionName = '';

  if (dropdown_type == 'NUMBER') {
    cbFunctionName = Blockly.Python.provideFunction_(
      'subscribe_callback_' + Math.floor(Math.random() * 50),
      ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(topic, ' + variable_msg + '):',
        globals,  
        Blockly.Python.INDENT +  'try:',
        Blockly.Python.INDENT +  Blockly.Python.INDENT +  variable_msg + ' = float('+ variable_msg +') if "." in ' + variable_msg + ' else int('+variable_msg+')',
        Blockly.Python.INDENT +  'except:',
        Blockly.Python.INDENT +  Blockly.Python.INDENT +  variable_msg + ' = 0',
        statements_handler
      ]);
  } else {
    cbFunctionName = Blockly.Python.provideFunction_(
      'subscribe_callback_' + Math.floor(Math.random() * 50),
      ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(topic, ' + variable_msg + '):',
        globals,
        statements_handler || Blockly.Python.PASS
      ]);
  }
  var code = 'blocky.subscribe(' + value_topic + ', ' + cbFunctionName + ')\n';
  return code;
};