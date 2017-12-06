[{
  "type": "servo_set_angle_var",
  "message0": "Set %1 angle (0-180°) to %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "servo"
    },
    {
      "type": "input_value",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "servo_set_angle_fix",
  "message0": "Set %1 angle (0-180°) to %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "servo"
    },
    {
      "type": "field_angle",
      "name": "ANGLE",
      "angle": 90
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "servo_setup",
  "message0": "Set %1 to SERVO on Port %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "servo"
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
}]