[{
  "type": "ultrasonic_setup",
  "message0": "Set %1 to ultrasonic sensor on Port %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "ultrasonic"
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
  "type": "ultrasonic_measure",
  "message0": "%1 get distance",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "ultrasonic"
    }
  ],
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}]