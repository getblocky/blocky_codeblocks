'use strict';

goog.provide('Blockly.Python.accelerometer');
goog.require('Blockly.Python');

// Any imports need to be reserved words
Blockly.Python.addReservedWords('blocky');

Blockly.Python['main_block'] = function(block) {
  var statements_setup = Blockly.Python.statementToCode(block, 'SETUP');
  var statements_loop = Blockly.Python.statementToCode(block, 'LOOP');
  // TODO: Assemble Python into code variable.
  var globals = ['blocky'];
  var varName;
  var workspace = block.workspace;
  var variables = workspace.getAllVariables() || [];
  for (var i = 0, variable; variable = variables[i]; i++) {
    varName = variable.name;
    globals.push(Blockly.Python.variableDB_.getName(varName,
      Blockly.Variables.NAME_TYPE));
  }
  globals = globals.length ? Blockly.Python.INDENT + 'global ' + globals.join(', ') : '';
  var setupFunctionName = Blockly.Python.provideFunction_(
    'setup',
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '():',
      globals,
      statements_setup || Blockly.Python.PASS
    ]);
  var loopFunctionName = Blockly.Python.provideFunction_(
    'loop',
    ['def ' + Blockly.Python.FUNCTION_NAME_PLACEHOLDER_ + '():',
      globals,
      Blockly.Python.INDENT + 'while True:',
      Blockly.Python.INDENT + Blockly.Python.INDENT + 'blocky.process()',  
      Blockly.Python.prefixLines(statements_loop, Blockly.Python.INDENT)
    ]);

  //var code = setupFunctionName + '()\n' + loopFunctionName + '()';
  var code = '#' + setupFunctionName + '\n#' + loopFunctionName + '';
  return code;
};