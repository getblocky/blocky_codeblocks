[{
  "type": "dht_setup",
  "message0": "Set %1 to %2 sensor on Port %3",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "dht"
    },
    {
      "type": "field_dropdown",
      "name": "DHT",
      "options": [
        [
          "DHT11",
          "dht11"
        ],
        [
          "DHT22",
          "dht22"
        ]
      ]
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
  "type": "dht_measure",
  "message0": "Measure %1",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "dht"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "dht_get_value",
  "message0": "Get %1 's %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "dht"
    },
    {
      "type": "field_dropdown",
      "name": "TYPE",
      "options": [
        [
          "temperature (°C)",
          "TEMP"
        ],
        [
          "humidity (%)",
          "HUMID"
        ]
      ]
    }
  ],
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "ds18b20_setup",
  "message0": "Set %1 to DS18B20 sensor on Port %2",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "ds18b20"
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
  "type": "ds18b20_convert_temp",
  "message0": "Convert %1 to temperature",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "ds18b20"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "ds18b20_get_value",
  "message0": "Get %1 's temperature (°C)",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "ds18b20"
    }
  ],
  "output": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}]