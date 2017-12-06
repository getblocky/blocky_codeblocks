[{
  "type": "oled_setup",
  "message0": "Set %1 to OLED on Port %2 width %3 height %4",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "oled"
    },
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
    },
    {
      "type": "field_number",
      "name": "WIDTH",
      "value": 128,
      "min": 0
    },
    {
      "type": "field_number",
      "name": "HEIGHT",
      "value": 64,
      "min": 0
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "oled_fill",
  "message0": "Fill %1 with %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "oled"
    },
    {
      "type": "field_dropdown",
      "name": "COLOR",
      "options": [
        [
          "black",
          "0"
        ],
        [
          "white",
          "1"
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
  "type": "oled_set_pixel",
  "message0": "Set %1 pixel at x %2 y %3 to %4",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "oled"
    },
    {
      "type": "input_value",
      "name": "POS_X",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "POS_Y",
      "check": "Number"
    },
    {
      "type": "field_dropdown",
      "name": "COLOR",
      "options": [
        [
          "white",
          "1"
        ],
        [
          "black",
          "0"
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
  "type": "oled_set_text",
  "message0": "%1 print text %2 at x %3 y %4 %5",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "oled"
    },
    {
      "type": "input_value",
      "name": "TEXT"
    },
    {
      "type": "input_value",
      "name": "POS_X",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "POS_Y",
      "check": "Number"
    },
    {
      "type": "input_dummy"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}]