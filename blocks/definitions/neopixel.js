[{
  "type": "neopixel_setup",
  "message0": "Set %1 to NeoPixel on Port %2 with %3 pixels",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "neopixel"
    },
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        [
          "D1",
          "D1"
        ],
        [
          "D2",
          "D2"
        ],
        [
          "D3",
          "D3"
        ],
        [
          "D4",
          "D4"
        ]
      ]
    },
    {
      "type": "field_number",
      "name": "PIXELS",
      "value": 8,
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
  "type": "neopixel_set_color_all",
  "message0": "Set %1 all pixels color to  %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "neopixel"
    },
    {
      "type": "input_value",
      "name": "COLOR"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "Set color of led matrix for single led",
  "helpUrl": ""
},
{
  "type": "neopixel_set_color",
  "message0": "Set %1 color at pixel  %2 to %3",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "neopixel"
    },
    {
      "type": "input_value",
      "name": "PIXEL"
    },
    {
      "type": "input_value",
      "name": "COLOR"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "Set color of led matrix for single led",
  "helpUrl": ""
}]