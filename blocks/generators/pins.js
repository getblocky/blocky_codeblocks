'use strict';

goog.provide('Blockly.Python.pins');
goog.require('Blockly.Python');

// Any imports need to be reserved words
Blockly.Python.addReservedWords('machine');
Blockly.Python.addReservedWords('blocky');

Blockly.Python['pin_setup'] = function(block) {
  var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var number_pin = block.getFieldValue('PIN');
  var dropdown_mode = block.getFieldValue('MODE');
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_machine'] = 'import machine';
  var code = '';
  if (dropdown_mode == 'DIGITAL_INPUT') {
    code = variable_name + ' = machine.Pin(' + number_pin + ', machine.Pin.IN)\n';
  } else if (dropdown_mode == 'INPUT_PULLUP') {
    code = variable_name + ' = machine.Pin(' + number_pin + ', machine.Pin.IN, machine.Pin.PULL_UP)\n';
  } else if (dropdown_mode == 'DIGITAL_OUTPUT') {
    code = variable_name + ' = machine.Pin(' + number_pin + ', machine.Pin.OUT)\n';
  } else if (dropdown_mode == 'ANALOG_INPUT') {
    code = variable_name + ' = machine.ADC(machine.Pin(' + number_pin + ')); ' 
    + variable_name + '.atten(machine.ADC.ATTN_11DB);\n';
  }

  return code;
};

Blockly.Python['pin_set_value'] = function(block) {
  var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_machine'] = 'import machine';
  var code = variable_name + '.value(' + value_name + ')\n';
  return code;
};

Blockly.Python['pin_read_value'] = function(block) {
  var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_machine'] = 'import machine';
  var code = variable_name + '.value()';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['flex_dropdown_state'] = function(block) {
  var dropdown_state = block.getFieldValue('STATE');
  // TODO: Assemble JavaScript into code variable.
  var code = dropdown_state;
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
  //return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['flex_dropdown_pin'] = function(block) {
  var dropdown_port = block.getFieldValue('PORT');
  // TODO: Assemble Python into code variable.
  var code = Blockly.Python.ports[dropdown_port].Pin1;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
