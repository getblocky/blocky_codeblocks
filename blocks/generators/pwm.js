'use strict';

goog.provide('Blockly.Python.pins');
goog.require('Blockly.Python');

// Any imports need to be reserved words
Blockly.Python.addReservedWords('machine');
Blockly.Python.addReservedWords('blocky');

Blockly.Python['pwm_setup'] = function(block) {
  var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var dropdown_port = block.getFieldValue('PORT');
  var value_freq = Blockly.Python.valueToCode(block, 'FREQ', Blockly.Python.ORDER_ATOMIC);
  var value_duty = Blockly.Python.valueToCode(block, 'DUTY', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_machine'] = 'import machine';
  var code = variable_name + ' = machine.PWM(machine.Pin(' + Blockly.Python.ports[dropdown_port].Pin1 + '), freq='+value_freq+', duty='+value_duty+')\n';
  return code;
};

Blockly.Python['pwm_set_duty'] = function(block) {
  var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var value_duty = Blockly.Python.valueToCode(block, 'DUTY', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = variable_name + '.duty(int(' + value_duty + '))\n';
  return code;
};

Blockly.Python['pwm_set_freq'] = function(block) {
  var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var value_freq = Blockly.Python.valueToCode(block, 'FREQ', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = variable_name + '.freq(int(' + value_freq + '))\n';
  return code;
};