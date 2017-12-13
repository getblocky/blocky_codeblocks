[{
  "type": "pin_setup",
  "message0": "Set %1 to Pin %2 mode %3",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "pin"
    },
    {
      "type": "field_number",
      "name": "PIN",
      "value": 0,
      "min": 0
    },
    {
      "type": "field_dropdown",
      "name": "MODE",
      "options": [
        [
          "digital input",
          "DIGITAL_INPUT"
        ],
        [
          "digital input with pullup",
          "INPUT_PULLUP"
        ],
        [
          "digital output",
          "DIGITAL_OUTPUT"
        ],
        [
          "analog input",
          "ANALOG_INPUT"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "pin_set_value",
  "message0": "Set %1 value to %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "pin"
    },
    {
      "type": "input_value",
      "name": "NAME",
      "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "pin_read_value",
  "message0": "Read %1 value",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "pin"
    }
  ],
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "flex_dropdown_state",
  "message0": "%1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "STATE",
      "options": [
        [
          "ON",
          "1"
        ],
        [
          "OFF",
          "0"
        ]
      ]
    }
  ],
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "flex_dropdown_pin",
  "message0": "%1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        [
          "P1",
          "p1"
        ],
        [
          "P2",
          "p2"
        ],
        [
          "P3",
          "p3"
        ],
        [
          "P4",
          "p4"
        ],
        [
          "P5",
          "p5"
        ],
        [
          "P6",
          "p6"
        ],
        [
          "P7",
          "p7"
        ]
      ]
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}]