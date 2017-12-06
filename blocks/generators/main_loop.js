'use strict';

goog.provide('Blockly.Python.accelerometer');
goog.require('Blockly.Python');

// Any imports need to be reserved words
Blockly.Python.addReservedWords('blocky');

Blockly.Python['main_block'] = function(block) {
  var statements_setup = Blockly.Python.statementToCode(block, 'SETUP');
  var statements_loop = Blockly.Python.statementToCode(block, 'LOOP');
  // TODO: Assemble Python into code variable.
  var setupFunctionName = Blockly.Python.provideFunction_(
    'setup',
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '():',
      statements_setup
    ]);
  var loopFunctionName = Blockly.Python.provideFunction_(
    'loop',
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '():',
      Blockly.Python.INDENT + 'while True:',
      Blockly.Python.INDENT + Blockly.Python.INDENT + 'blocky.process()',  
      Blockly.Python.prefixLines(statements_loop, Blockly.Python.INDENT)
    ]);

  var code = setupFunctionName + '()\n' + loopFunctionName + '()';
  return code;
};