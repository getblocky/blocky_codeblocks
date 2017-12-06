[{
  "type": "message_send_message",
  "message0": "Send to topic %1 with message %2 %3",
  "args0": [
    {
      "type": "input_value",
      "name": "TOPIC"
    },
    {
      "type": "input_value",
      "name": "MSG"
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
  "type": "message_send_log",
  "message0": "Print device log %1",
  "args0": [
    {
      "type": "input_value",
      "name": "MSG"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "message_subscribe_topic",
  "message0": "When receive topic %1 with message  %2 as %3 %4 %5",
  "args0": [
    {
      "type": "input_value",
      "name": "TOPIC"
    },
    {
      "type": "field_variable",
      "name": "MSG",
      "variable": "message"
    },
    {
      "type": "field_dropdown",
      "name": "TYPE",
      "options": [
        [
          "string",
          "STRING"
        ],
        [
          "number",
          "NUMBER"
        ]
      ]
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