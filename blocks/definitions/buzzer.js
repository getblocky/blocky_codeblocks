[{
  "type": "buzzer_setup",
  "message0": "Set %1 to Buzzer on Port %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "buzzer"
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
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "buzzer_set",
  "message0": "Set %1 to %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "buzzer"
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