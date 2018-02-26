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

  Blockly.Python.variableDB_.setVariableMap(workspace.getVariableMap());

  Blockly.Python.ports = {
    'A1': {
      'Pin1': 34,
      'Pin2': 22,
    },
    'A2': {
      'Pin1': 35,
      'Pin2': 23,
    },
    'A3': {
      'Pin1': 32,
      'Pin2': 16,
    },
    'A4': {
      'Pin1': 33,
      'Pin2': 4,
    },
    'D1': {
      'Pin1': 27,
      'Pin2': 19,
    },
    'D2': {
      'Pin1': 13,
      'Pin2': 17,
    },
    'D3': {
      'Pin1': 14,
      'Pin2': 18,
    },
    'D4': {
      'Pin1': 25,
      'Pin2': 26,
    }
  }
}
