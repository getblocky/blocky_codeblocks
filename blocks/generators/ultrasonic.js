'use strict';

goog.provide('Blockly.Python.ultrasonic');
goog.require('Blockly.Python');

// Any imports need to be reserved words
Blockly.Python.addReservedWords('machine');
Blockly.Python.addReservedWords('blocky');
Blockly.Python.addReservedWords('hcsr04');

Blockly.Python['ultrasonic_setup'] = function(block) {
  var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var dropdown_port = block.getFieldValue('PORT');
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_hcsr04'] = 'import hcsr04';
  var code = variable_name + ' = hcsr04.HCSR04(trigger_pin=' + Blockly.Python.ports[dropdown_port].Pin2 
    + ', echo_pin=' + Blockly.Python.ports[dropdown_port].Pin1 + ')\n';
  return code;
};

Blockly.Python['ultrasonic_measure'] = function(block) {
  var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_hcsr04'] = 'import hcsr04';
  var code = variable_name + '.distance_cm()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
