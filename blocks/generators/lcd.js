'use strict';

goog.provide('Blockly.Python.neopixel');
goog.require('Blockly.Python');

// Any imports need to be reserved words
Blockly.Python.addReservedWords('machine');
Blockly.Python.addReservedWords('ssd1306');
Blockly.Python.addReservedWords('blocky');

Blockly.Python['oled_setup'] = function(block) {
  var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var dropdown_port = block.getFieldValue('PORT');
  var number_width = block.getFieldValue('WIDTH');
  var number_height = block.getFieldValue('HEIGHT');
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_machine'] = 'import machine';
  Blockly.Python.definitions_['import_ssd1306'] = 'import ssd1306';
  var code = variable_name + ' = ssd1306.SSD1306_I2C(width=' + number_width + ', height=' + number_height + ', i2c=machine.I2C(scl=machine.Pin(' 
  + Blockly.Python.ports[dropdown_port].Pin2 + '), sda=machine.Pin(' 
  + Blockly.Python.ports[dropdown_port].Pin1 + '), freq=400000), external_vcc=False)\n' 
  + variable_name + '.init_display()\n';

  return code;
};

Blockly.Python['oled_fill'] = function(block) {
  var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var dropdown_color = block.getFieldValue('COLOR');
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_machine'] = 'import machine';
  Blockly.Python.definitions_['import_ssd1306'] = 'import ssd1306';
  var code = variable_name + '.fill(' + dropdown_color + ')\n';
  return code;
};

Blockly.Python['oled_set_pixel'] = function(block) {
  var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var value_pos_x = Blockly.Python.valueToCode(block, 'POS_X', Blockly.Python.ORDER_ATOMIC);
  var value_pos_y = Blockly.Python.valueToCode(block, 'POS_Y', Blockly.Python.ORDER_ATOMIC);
  var dropdown_color = block.getFieldValue('COLOR');
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_machine'] = 'import machine';
  Blockly.Python.definitions_['import_ssd1306'] = 'import ssd1306';
  var code = variable_name + '.set_pixel(' + value_pos_x + ', ' + value_pos_y + ', ' 
    + dropdown_color + ')\n' + variable_name + '.show()\n';
  return code;
};

Blockly.Python['oled_set_text'] = function(block) {
  var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var value_text = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_ATOMIC);
  var value_pos_x = Blockly.Python.valueToCode(block, 'POS_X', Blockly.Python.ORDER_ATOMIC);
  var value_pos_y = Blockly.Python.valueToCode(block, 'POS_Y', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_machine'] = 'import machine';
  Blockly.Python.definitions_['import_ssd1306'] = 'import ssd1306';
  var code = variable_name + '.text(str(' + value_text + '), ' + value_pos_x + ', ' + value_pos_y + ')\n' + variable_name + '.show()\n';
  return code;
};
