[{
  "type": "relay_setup",
  "message0": "Set %1 to Relay on Port %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "relay"
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
  "type": "relay_set",
  "message0": "Set %1 to %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "relay"
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