[{
  "type": "light_setup_photocell",
  "message0": "Set %1 to Photocell Light Sensor on Port %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "light"
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
  "type": "light_setup_bh1750",
  "message0": "Set %1 to BH1750 Light Sensor on Port %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "light"
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
  "type": "light_get_light_bh1750",
  "message0": "Get BH1750  %1 value",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "light"
    }
  ],
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "light_get_light_photocell",
  "message0": "Get photocell %1 value",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "light"
    }
  ],
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}]