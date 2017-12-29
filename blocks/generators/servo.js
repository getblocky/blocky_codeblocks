'use strict';

goog.provide('Blockly.Python.buttons');
goog.require('Blockly.Python');

// Any imports need to be reserved words
Blockly.Python.addReservedWords('blocky');
Blockly.Python.addReservedWords('machine');

Blockly.Python['servo_set_angle_var'] = function(block) {
  var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var value_angle_name = Blockly.Python.valueToCode(block, 'ANGLE_NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_machine'] = 'import machine';
  var code = variable_name + '.duty(int(40 + ' + value_angle_name + '*75/180))\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.Python['servo_set_angle_fix'] = function(block) {
  var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var angle_angle = block.getFieldValue('ANGLE');
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_machine'] = 'import machine';
  var duty = 40 + angle_angle*75/180;
  var code = variable_name + '.duty(' + duty + ')\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.Python['servo_setup'] = function(block) {
  var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var dropdown_port = block.getFieldValue('PORT');
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_machine'] = 'import machine';
  var code = variable_name + ' = machine.PWM(machine.Pin(' + Blockly.Python.ports[dropdown_port].Pin1 + '), freq=50, duty=40)\n';
  return code;
};