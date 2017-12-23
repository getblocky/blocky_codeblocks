'use strict';

goog.provide('Blockly.Python.buttons');
goog.require('Blockly.Python');

// Any imports need to be reserved words
Blockly.Python.addReservedWords('blocky');
Blockly.Python.addReservedWords('machine');

Blockly.Python['light_setup_photocell'] = function(block) {
  var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var dropdown_port = block.getFieldValue('PORT');
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_machine'] = 'import machine';
  var code = variable_name + ' = machine.ADC(machine.Pin(' + Blockly.Python.ports[dropdown_port].Pin1 + ')); ' 
    + variable_name + '.atten(machine.ADC.ATTN_11DB);\n';
  return code;
};

Blockly.Python['light_setup_bh1750'] = function(block) {
  var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var dropdown_port = block.getFieldValue('PORT');
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_machine'] = 'import machine';
  Blockly.Python.definitions_['import_bh1750'] = 'import bh1750';
  var code = variable_name + ' = bh1750.BH1750(machine.I2C(' + Blockly.Python.ports[dropdown_port].Pin1 + ', ' + Blockly.Python.ports[dropdown_port].Pin2 + '))\n';
  return code;
};

Blockly.Python['light_get_light_bh1750'] = function(block) {
  var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_bh1750'] = 'import bh1750';
  var code = variable_name + '.luminance(bh1750.BH1750.ONCE_HIRES_1)';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['light_get_light_photocell'] = function(block) {
  var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  var code = variable_name + '.read()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};