'use strict';

goog.provide('Blockly.Python.buttons');
goog.require('Blockly.Python');

// Any imports need to be reserved words
Blockly.Python.addReservedWords('microbit');

Blockly.Python['dht_setup'] = function(block) {
  var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var dropdown_dht = block.getFieldValue('DHT');
  var dropdown_port = block.getFieldValue('PORT');
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['dht_measure'] = function(block) {
  var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['dht_get_value'] = function(block) {
  var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var dropdown_type = block.getFieldValue('TYPE');
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['ds18b20_setup'] = function(block) {
  var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var dropdown_port = block.getFieldValue('PORT');
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['ds18b20_convert_temp'] = function(block) {
  var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['ds18b20_get_value'] = function(block) {
  var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};