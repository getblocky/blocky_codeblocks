[{
  "type": "moisture_setup",
  "message0": "Set %1 to moisture sensor on Port %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "moisture"
    },
    {
      "type": "field_dropdown",
      "name": "PORT",
      "options": [
        [
          "A1",
          "A1"
        ],
        [
          "A2",
          "A2"
        ],
        [
          "A3",
          "A3"
        ],
        [
          "A4",
          "A4"
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
  "type": "moisture_get_value",
  "message0": "Get %1 value",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "moisture"
    }
  ],
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}]