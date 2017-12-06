[{
  "type": "touch_setup",
  "message0": "Set %1 to touch sensor on Port %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "touch"
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
  "type": "touch_get_value",
  "message0": "%1 is touched",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "touch"
    }
  ],
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}]