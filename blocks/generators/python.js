/*
Overrides for generic Python code generation.
*/
'use strict';

goog.provide('Blockly.Python');

goog.require('Blockly.Generator');

Blockly.Python.init = function(workspace) {
  /**
    * Empty loops or conditionals are not allowed in Python.
    */
  Blockly.Python.PASS = this.INDENT + 'pass\n';
  // Create a dictionary of definitions to be printed before the code.
  Blockly.Python.definitions_ = Object.create(null);
  // Create a dictionary mapping desired function names in definitions_
  // to actual function names (to avoid collisions with user functions).
  Blockly.Python.functionNames_ = Object.create(null);

  if (!Blockly.Python.variableDB_) {
    Blockly.Python.variableDB_ =
        new Blockly.Names(Blockly.Python.RESERVED_WORDS_);
  } else {
    Blockly.Python.variableDB_.reset();
  }

  Blockly.Python.ports = {
    'p1': {
      'Pin1': 32,
      'Pin2': 22,
    },
    'p2': {
      'Pin1': 33,
      'Pin2': 23,
    },
    'p3': {
      'Pin1': 25,
      'Pin2': 26,
    },
    'p4': {
      'Pin1': 14,
      'Pin2': 18,
    },
    'p5': {
      'Pin1': 4,
      'Pin2': 16,
    },
    'p6': {
      'Pin1': 13,
      'Pin2': 17,
    },
    'p7': {
      'Pin1': 27,
      'Pin2': 19,
    }
  }
}
