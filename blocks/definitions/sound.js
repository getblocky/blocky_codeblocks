[{
  "type": "sound_sensor_setup",
  "message0": "Set %1 to sound sensor on Port %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "sound"
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
  "type": "sound_get_value",
  "message0": "Get %1 value",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "sound"
    }
  ],
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}]