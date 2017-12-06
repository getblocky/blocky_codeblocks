'use strict';

goog.provide('Blockly.Python.buttons');
goog.require('Blockly.Python');

// Any imports need to be reserved words
Blockly.Python.addReservedWords('machine');
Blockly.Python.addReservedWords('blocky');

Blockly.Python['button_is_pressed'] = function(block) {
  var variable_button = Blockly.Python.variableDB_.getName(block.getFieldValue('BUTTON'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_machine'] = 'import machine';
  var code = variable_button + '.value() == 1';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['button_setup'] = function(block) {
  var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var dropdown_port = block.getFieldValue('PORT');
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_machine'] = 'import machine';
  var code = variable_name + ' = machine.Pin(' + Blockly.Python.ports[dropdown_port].Pin1 + ', machine.Pin.IN)\n';
  return code;
};
