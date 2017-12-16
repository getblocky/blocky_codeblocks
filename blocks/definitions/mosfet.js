[{
  "type": "mosfet_setup",
  "message0": "Set %1 to MOSFET on Port %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "mosfet"
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
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "mosfet_set",
  "message0": "Set %1 to %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "mosfet"
    },
    {
      "type": "input_value",
      "name": "STATE"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}]