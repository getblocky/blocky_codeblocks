[{
  "type": "pwm_setup",
  "message0": "Set %1 to PWM on port %2 %3 with freq %4 duty %5 %6",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "pwm"
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
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "FREQ",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "DUTY",
      "check": "Number"
    },
    {
      "type": "input_dummy"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "pwm_set_duty",
  "message0": "Set %1 duty to %2 %3 %4",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "pwm"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "DUTY",
      "check": "Number"
    },
    {
      "type": "input_dummy"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}, 
{
  "type": "pwm_set_freq",
  "message0": "Set %1 frequency to %2 %3 %4",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "pwm"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "FREQ",
      "check": "Number"
    },
    {
      "type": "input_dummy"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}]