'use strict';

goog.provide('Blockly.Python.buttons');
goog.require('Blockly.Python');

// Any imports need to be reserved words
Blockly.Python.addReservedWords('blocky');
Blockly.Python.addReservedWords('machine');

Blockly.Python['buzzer_setup'] = function(block) {
  var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var dropdown_port = block.getFieldValue('PORT');
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_machine'] = 'import machine';
  var code = variable_name + ' = machine.Pin(' + Blockly.Python.ports[dropdown_port].Pin1 + ', machine.Pin.OUT)\n';
  return code;
};

Blockly.Python['buzzer_set'] = function(block) {
  var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var value_state = Blockly.Python.valueToCode(block, 'STATE', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_machine'] = 'import machine';
  var code = variable_name + '.value(' + value_state + ')\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};
