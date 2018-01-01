[{
  "type": "timer_event_every",
  "message0": "Every %1 %2 %3 do %4 %5",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "time",
      "check": "Number"
    },
    {
      "type": "field_dropdown",
      "name": "type",
      "options": [
        [
          "seconds",
          "sec"
        ],
        [
          "millis",
          "mil"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "handler"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 20,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "timer_event_after",
  "message0": "After  %1 %2 %3 from now do %4 %5",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "time",
      "check": "Number"
    },
    {
      "type": "field_dropdown",
      "name": "type",
      "options": [
        [
          "seconds",
          "sec"
        ],
        [
          "millis",
          "mil"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "handler"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 20,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "time_sleep",
  "message0": "Sleep %1 %2 %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "time",
      "check": "Number"
    },
    {
      "type": "field_dropdown",
      "name": "DURATION",
      "options": [
        [
          "seconds",
          "sec"
        ],
        [
          "milliseconds",
          "mil"
        ],
        [
          "microseconds",
          "mic"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 20,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "time_schedule",
  "message0": "When current time (timezone %1 ) is %2 : %3 : %4 then  %5 %6",
  "args0": [
    {
      "type": "field_number",
      "name": "TZ",
      "value": 7,
      "min": -14,
      "max": 13
    },
    {
      "type": "field_number",
      "name": "HOUR",
      "value": 0,
      "min": 0,
      "max": 23
    },
    {
      "type": "field_number",
      "name": "MIN",
      "value": 0,
      "min": 0,
      "max": 59
    },
    {
      "type": "field_number",
      "name": "SEC",
      "value": 0,
      "min": 0,
      "max": 59
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "HANDLER"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}]