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