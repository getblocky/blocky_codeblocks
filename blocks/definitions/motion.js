[{
  "type": "motion_setup",
  "message0": "Set %1 to PIR motion sensor on Port %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "pir"
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
        ],
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
  "type": "motion_get_value",
  "message0": "%1 detected motion",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "pir"
    }
  ],
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}]