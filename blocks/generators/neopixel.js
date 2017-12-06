'use strict';

goog.provide('Blockly.Python.neopixel');
goog.require('Blockly.Python');

// Any imports need to be reserved words
Blockly.Python.addReservedWords('machine');
Blockly.Python.addReservedWords('neopixel');
Blockly.Python.addReservedWords('blocky');

Blockly.Python['neopixel_setup'] = function(block) {
  var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var dropdown_port = block.getFieldValue('PORT');
  var number_pixels = block.getFieldValue('PIXELS');
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_machine'] = 'import machine';
  Blockly.Python.definitions_['import_neopixel'] = 'import neopixel';
  var code = variable_name + ' = neopixel.NeoPixel(machine.Pin(' + Blockly.Python.ports[dropdown_port].Pin1 + ', machine.Pin.OUT), ' + number_pixels + ')\n';
  return code;
};

Blockly.Python['neopixel_set_color_all'] = function(block) {
  var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var value_color = Blockly.Python.valueToCode(block, 'COLOR', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_machine'] = 'import machine';
  Blockly.Python.definitions_['import_neopixel'] = 'import neopixel';

  var functionName = Blockly.Python.provideFunction_(
    'hex_to_rgb',
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(hex):',
      '  hex = hex.lstrip("#")',
      '  return tuple(int(hex[i:i+2], 16) for i in (0, 2 ,4))'
    ]);

  var code = variable_name + '.fill(' + functionName + '(' + value_color + ')); ' + variable_name + '.write()\n';
  return code;
};

Blockly.Python['neopixel_set_color'] = function(block) {
  var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var value_pixel = Blockly.Python.valueToCode(block, 'PIXEL', Blockly.Python.ORDER_ATOMIC);
  var value_color = Blockly.Python.valueToCode(block, 'COLOR', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_machine'] = 'import machine';
  Blockly.Python.definitions_['import_neopixel'] = 'import neopixel';

  var functionName = Blockly.Python.provideFunction_(
    'hex_to_rgb',
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '(hex):',
      '  hex = hex.lstrip("#")',
      '  return tuple(int(hex[i:i+2], 16) for i in (0, 2 ,4))'
    ]);

  var code = variable_name + '[' + value_pixel + '] = ' + functionName + '(' + value_color + '); ' + variable_name + '.write()\n';
  return code;
};
