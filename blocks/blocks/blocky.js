'use strict';

goog.provide('Blockly.Blocks.colour');
goog.require('Blockly.Blocks');
goog.require('Blockly.constants');

Blockly.FieldColour.COLOURS = ['#f00', '#e00', '#d00', '#c00', '#b00', '#a00',
                               '#800', '#600', '#400', '#000'];
Blockly.FieldColour.COLUMNS = 5;


Blockly.Blocks['button_is_pressed'] = {
  init: function() {
    this.jsonInit({"colour": 0, "tooltip": "", "message0": "%1 is being pressed", "args0": [{"variable": "button", "type": "field_variable", "name": "BUTTON"}], "output": null, "helpUrl": ""});
  }
};


Blockly.Blocks['button_setup'] = {
  init: function() {
    this.jsonInit({"colour": 0, "nextStatement": null, "tooltip": "", "message0": "Set %1 to Button on Port %2", "previousStatement": null, "args0": [{"variable": "button", "type": "field_variable", "name": "NAME"}, {"type": "field_dropdown", "name": "PORT", "options": [["P1", "p1"], ["P2", "p2"], ["P3", "p3"], ["P4", "p4"], ["P5", "p5"], ["P6", "p6"], ["P7", "p7"]]}], "helpUrl": ""});
  }
};


Blockly.Blocks['buzzer_setup'] = {
  init: function() {
    this.jsonInit({"colour": 20, "nextStatement": null, "tooltip": "", "message0": "Set %1 to Buzzer on Port %2", "previousStatement": null, "args0": [{"variable": "buzzer", "type": "field_variable", "name": "NAME"}, {"type": "field_dropdown", "name": "PORT", "options": [["P1", "p1"], ["P2", "p2"], ["P3", "p3"], ["P4", "p4"], ["P5", "p5"], ["P6", "p6"], ["P7", "p7"]]}], "helpUrl": ""});
  }
};


Blockly.Blocks['buzzer_set'] = {
  init: function() {
    this.jsonInit({"colour": 20, "nextStatement": null, "tooltip": "", "message0": "Set %1 to %2", "previousStatement": null, "args0": [{"variable": "buzzer", "type": "field_variable", "name": "NAME"}, {"type": "input_value", "name": "STATE"}], "helpUrl": ""});
  }
};


Blockly.Blocks['oled_setup'] = {
  init: function() {
    this.jsonInit({"colour": 40, "nextStatement": null, "tooltip": "", "message0": "Set %1 to OLED on Port %2 width %3 height %4", "previousStatement": null, "args0": [{"variable": "oled", "type": "field_variable", "name": "NAME"}, {"type": "field_dropdown", "name": "PORT", "options": [["P1", "p1"], ["P2", "p2"], ["P3", "p3"], ["P4", "p4"], ["P5", "p5"], ["P6", "p6"], ["P7", "p7"]]}, {"type": "field_number", "name": "WIDTH", "value": 128, "min": 0}, {"type": "field_number", "name": "HEIGHT", "value": 64, "min": 0}], "helpUrl": ""});
  }
};


Blockly.Blocks['oled_fill'] = {
  init: function() {
    this.jsonInit({"colour": 40, "nextStatement": null, "tooltip": "", "message0": "Fill %1 with %2", "previousStatement": null, "args0": [{"variable": "oled", "type": "field_variable", "name": "NAME"}, {"type": "field_dropdown", "name": "COLOR", "options": [["black", "0"], ["white", "1"]]}], "helpUrl": ""});
  }
};


Blockly.Blocks['oled_set_pixel'] = {
  init: function() {
    this.jsonInit({"colour": 40, "nextStatement": null, "tooltip": "", "message0": "Set %1 pixel at x %2 y %3 to %4", "previousStatement": null, "args0": [{"variable": "oled", "type": "field_variable", "name": "NAME"}, {"type": "input_value", "name": "POS_X", "check": "Number"}, {"type": "input_value", "name": "POS_Y", "check": "Number"}, {"type": "field_dropdown", "name": "COLOR", "options": [["white", "1"], ["black", "0"]]}], "helpUrl": ""});
  }
};


Blockly.Blocks['oled_set_text'] = {
  init: function() {
    this.jsonInit({"colour": 40, "nextStatement": null, "tooltip": "", "message0": "%1 print text %2 at x %3 y %4 %5", "previousStatement": null, "args0": [{"variable": "oled", "type": "field_variable", "name": "NAME"}, {"type": "input_value", "name": "TEXT"}, {"type": "input_value", "name": "POS_X", "check": "Number"}, {"type": "input_value", "name": "POS_Y", "check": "Number"}, {"type": "input_dummy"}], "helpUrl": ""});
  }
};


Blockly.Blocks['led_setup'] = {
  init: function() {
    this.jsonInit({"colour": 60, "nextStatement": null, "tooltip": "", "message0": "Set %1 to LED on Port %2", "previousStatement": null, "args0": [{"variable": "led", "type": "field_variable", "name": "NAME"}, {"type": "field_dropdown", "name": "PORT", "options": [["P1", "p1"], ["P2", "p2"], ["P3", "p3"], ["P4", "p4"], ["P5", "p5"], ["P6", "p6"], ["P7", "p7"]]}], "helpUrl": ""});
  }
};


Blockly.Blocks['led_set'] = {
  init: function() {
    this.jsonInit({"colour": 60, "nextStatement": null, "tooltip": "", "message0": "Set %1 to %2", "previousStatement": null, "args0": [{"variable": "led", "type": "field_variable", "name": "NAME"}, {"type": "input_value", "name": "STATE"}], "helpUrl": ""});
  }
};


Blockly.Blocks['light_setup_photocell'] = {
  init: function() {
    this.jsonInit({"colour": 80, "nextStatement": null, "tooltip": "", "message0": "Set %1 to Photocell Light Sensor on Port %2", "previousStatement": null, "args0": [{"variable": "light", "type": "field_variable", "name": "NAME"}, {"type": "field_dropdown", "name": "PORT", "options": [["P1", "p1"], ["P2", "p2"], ["P3", "p3"], ["P4", "p4"], ["P5", "p5"], ["P6", "p6"], ["P7", "p7"]]}], "helpUrl": ""});
  }
};


Blockly.Blocks['light_setup_bh1750'] = {
  init: function() {
    this.jsonInit({"colour": 80, "nextStatement": null, "tooltip": "", "message0": "Set %1 to BH1750 Light Sensor on Port %2", "previousStatement": null, "args0": [{"variable": "light", "type": "field_variable", "name": "NAME"}, {"type": "field_dropdown", "name": "PORT", "options": [["P1", "p1"], ["P2", "p2"], ["P3", "p3"], ["P4", "p4"], ["P5", "p5"], ["P6", "p6"], ["P7", "p7"]]}], "helpUrl": ""});
  }
};


Blockly.Blocks['light_get_light_bh1750'] = {
  init: function() {
    this.jsonInit({"colour": 80, "tooltip": "", "message0": "Get BH1750  %1 value", "args0": [{"variable": "light", "type": "field_variable", "name": "NAME"}], "output": null, "helpUrl": ""});
  }
};


Blockly.Blocks['light_get_light_photocell'] = {
  init: function() {
    this.jsonInit({"colour": 80, "tooltip": "", "message0": "Get photocell %1 value", "args0": [{"variable": "light", "type": "field_variable", "name": "NAME"}], "output": null, "helpUrl": ""});
  }
};


Blockly.Blocks['main_block'] = {
  init: function() {
    this.jsonInit({"colour": 100, "tooltip": "", "message0": "Setup %1 %2 Main Loop %3 %4", "args0": [{"type": "input_dummy"}, {"type": "input_statement", "name": "SETUP"}, {"type": "input_dummy"}, {"type": "input_statement", "name": "LOOP"}], "helpUrl": ""});
  }
};


Blockly.Blocks['message_send_message'] = {
  init: function() {
    this.jsonInit({"colour": 120, "nextStatement": null, "tooltip": "", "message0": "Send to topic %1 with message %2 %3", "previousStatement": null, "args0": [{"type": "input_value", "name": "TOPIC"}, {"type": "input_value", "name": "MSG"}, {"type": "input_dummy"}], "helpUrl": ""});
  }
};


Blockly.Blocks['message_send_log'] = {
  init: function() {
    this.jsonInit({"colour": 120, "nextStatement": null, "tooltip": "", "message0": "Print device log %1", "previousStatement": null, "args0": [{"type": "input_value", "name": "MSG"}], "helpUrl": ""});
  }
};


Blockly.Blocks['message_subscribe_topic'] = {
  init: function() {
    this.jsonInit({"colour": 120, "nextStatement": null, "tooltip": "", "message0": "When receive topic %1 with message  %2 as %3 %4 %5", "previousStatement": null, "args0": [{"type": "input_value", "name": "TOPIC"}, {"variable": "message", "type": "field_variable", "name": "MSG"}, {"type": "field_dropdown", "name": "TYPE", "options": [["string", "STRING"], ["number", "NUMBER"]]}, {"type": "input_dummy"}, {"type": "input_statement", "name": "HANDLER"}], "helpUrl": ""});
  }
};


Blockly.Blocks['moisture_setup'] = {
  init: function() {
    this.jsonInit({"colour": 140, "nextStatement": null, "tooltip": "", "message0": "Set %1 to moisture sensor on Port %2", "previousStatement": null, "args0": [{"variable": "moisture", "type": "field_variable", "name": "NAME"}, {"type": "field_dropdown", "name": "PORT", "options": [["P1", "p1"], ["P2", "p2"], ["P3", "p3"], ["P4", "p4"], ["P5", "p5"], ["P6", "p6"], ["P7", "p7"]]}], "helpUrl": ""});
  }
};


Blockly.Blocks['moisture_get_value'] = {
  init: function() {
    this.jsonInit({"colour": 140, "tooltip": "", "message0": "Get %1 value", "args0": [{"variable": "moisture", "type": "field_variable", "name": "NAME"}], "output": null, "helpUrl": ""});
  }
};


Blockly.Blocks['mosfet_setup'] = {
  init: function() {
    this.jsonInit({"colour": 160, "nextStatement": null, "tooltip": "", "message0": "Set %1 to MOSFET on Port %2", "previousStatement": null, "args0": [{"variable": "mosfet", "type": "field_variable", "name": "NAME"}, {"type": "field_dropdown", "name": "PORT", "options": [["P1", "p1"], ["P2", "p2"], ["P3", "p3"], ["P4", "p4"], ["P5", "p5"], ["P6", "p6"], ["P7", "p7"]]}], "helpUrl": ""});
  }
};


Blockly.Blocks['mosfet_set'] = {
  init: function() {
    this.jsonInit({"colour": 160, "nextStatement": null, "tooltip": "", "message0": "Set %1 to %2", "previousStatement": null, "args0": [{"variable": "mosfet", "type": "field_variable", "name": "NAME"}, {"type": "input_value", "name": "STATE"}], "helpUrl": ""});
  }
};


Blockly.Blocks['motion_setup'] = {
  init: function() {
    this.jsonInit({"colour": 180, "nextStatement": null, "tooltip": "", "message0": "Set %1 to PIR motion sensor on Port %2", "previousStatement": null, "args0": [{"variable": "pir", "type": "field_variable", "name": "NAME"}, {"type": "field_dropdown", "name": "PORT", "options": [["P1", "p1"], ["P2", "p2"], ["P3", "p3"], ["P4", "p4"], ["P5", "p5"], ["P6", "p6"], ["P7", "p7"]]}], "helpUrl": ""});
  }
};


Blockly.Blocks['motion_get_value'] = {
  init: function() {
    this.jsonInit({"colour": 180, "tooltip": "", "message0": "%1 detected motion", "args0": [{"variable": "pir", "type": "field_variable", "name": "NAME"}], "output": null, "helpUrl": ""});
  }
};


Blockly.Blocks['microbit_music_play_built_in'] = {
  init: function() {
    this.jsonInit({"colour": 200, "nextStatement": null, "tooltip": "Play one of the built-in melodies. Indicate if you need to wait before continuing or continuously loop the melody.", "message0": "Play built-in melody %1 %2 Wait %3 %4 Loop %5", "previousStatement": null, "args0": [{"type": "field_dropdown", "name": "melody", "options": [["DADADADUM", "DADADADUM"], ["ENTERTAINER", "ENTERTAINER"], ["PRELUDE", "PRELUDE"], ["ODE", "ODE"], ["NYAN", "NYAN"], ["RINGTONE", "RINGTONE"], ["FUNK", "FUNK"], ["BLUES", "BLUES"], ["BIRTHDAY", "BIRTHDAY"], ["WEDDING", "WEDDING"], ["FUNERAL", "FUNERAL"], ["PUNCHLINE", "PUNCHLINE"], ["PYTHON", "PYTHON"], ["BADDY", "BADDY"], ["CHASE", "CHASE"], ["BA_DING", "BA_DING"], ["WAWAWAWAA", "WAWAWAWAA"], ["JUMP_UP", "JUMP_UP"], ["JUMP_DOWN", "JUMP_DOWN"], ["POWER_UP", "POWER_UP"], ["POWER_DOWN", "POWER_DOWN"]]}, {"type": "input_dummy"}, {"type": "field_checkbox", "checked": true, "name": "wait"}, {"type": "input_dummy"}, {"type": "field_checkbox", "checked": false, "name": "loop"}], "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/music.html#built-in-melodies"});
  }
};


Blockly.Blocks['microbit_music_pitch'] = {
  init: function() {
    this.jsonInit({"inputsInline": true, "colour": 200, "nextStatement": null, "tooltip": "Play a pitch at a certain number of cycles per second for a specified number of milliseconds.", "message0": "Play pitch %1 %2 for  %3 milliseconds", "previousStatement": null, "args0": [{"type": "field_number", "name": "pitch", "value": 440, "min": 0}, {"type": "input_dummy"}, {"type": "field_number", "name": "duration", "value": 1000, "min": 0}], "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/music.html#music.pitch"});
  }
};


Blockly.Blocks['microbit_music_play_list_of_notes'] = {
  init: function() {
    this.jsonInit({"colour": 200, "nextStatement": null, "tooltip": "Play a list of notes expressed in the special music language. Indicate if you need to wait before continuing or continuously loop the melody.", "message0": "Play notes %1 Wait %2 %3 Loop %4", "previousStatement": null, "args0": [{"type": "input_value", "name": "notes", "check": "Array"}, {"type": "field_checkbox", "checked": true, "name": "wait"}, {"type": "input_dummy"}, {"type": "field_checkbox", "checked": false, "name": "loop"}], "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/music.html#musical-notation"});
  }
};


Blockly.Blocks['microbit_music_reset'] = {
  init: function() {
    this.jsonInit({"colour": 200, "nextStatement": null, "tooltip": "Reset all music related settings (current tempo, octave and duration) to default values.", "message0": "Reset music", "previousStatement": null, "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/music.html#music.reset"});
  }
};


Blockly.Blocks['microbit_music_stop'] = {
  init: function() {
    this.jsonInit({"colour": 200, "nextStatement": null, "tooltip": "Stop all music playback.", "message0": "Stop music", "previousStatement": null, "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/music.html#music.stop"});
  }
};


Blockly.Blocks['microbit_music_set_tempo'] = {
  init: function() {
    this.jsonInit({"inputsInline": true, "colour": 200, "nextStatement": null, "tooltip": "Set the speed (tempo) of playback. A certain number of ticks represents a beat. Each beat is to be played a certain number of times a minute (beats per minute or BPM).", "message0": "Set tempo: 1 beat is %1 ticks at %2 bpm", "previousStatement": null, "args0": [{"type": "input_value", "name": "ticks", "check": "Number"}, {"type": "input_value", "name": "bpm", "check": "Number"}], "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/music.html#music.set_tempo"});
  }
};


Blockly.Blocks['microbit_music_get_tempo'] = {
  init: function() {
    this.jsonInit({"colour": 200, "tooltip": "Gets current tempo information as two numbers: number of ticks per beat, and number of beats per minute (BPM).", "message0": "Get current tempo", "output": "Array", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/music.html#music.get_tempo"});
  }
};


Blockly.Blocks['neopixel_setup'] = {
  init: function() {
    this.jsonInit({"colour": 220, "nextStatement": null, "tooltip": "", "message0": "Set %1 to NeoPixel on Port %2 with %3 pixels", "previousStatement": null, "args0": [{"variable": "neopixel", "type": "field_variable", "name": "NAME"}, {"type": "field_dropdown", "name": "PORT", "options": [["P1", "p1"], ["P2", "p2"], ["P3", "p3"], ["P4", "p4"], ["P5", "p5"], ["P6", "p6"], ["P7", "p7"]]}, {"type": "field_number", "name": "PIXELS", "value": 8, "min": 0}], "helpUrl": ""});
  }
};


Blockly.Blocks['neopixel_set_color_all'] = {
  init: function() {
    this.jsonInit({"inputsInline": true, "colour": 220, "nextStatement": null, "tooltip": "Set color of led matrix for single led", "message0": "Set %1 all pixels color to  %2", "previousStatement": null, "args0": [{"variable": "neopixel", "type": "field_variable", "name": "NAME"}, {"type": "input_value", "name": "COLOR"}], "helpUrl": ""});
  }
};


Blockly.Blocks['neopixel_set_color'] = {
  init: function() {
    this.jsonInit({"inputsInline": true, "colour": 220, "nextStatement": null, "tooltip": "Set color of led matrix for single led", "message0": "Set %1 color at pixel  %2 to %3", "previousStatement": null, "args0": [{"variable": "neopixel", "type": "field_variable", "name": "NAME"}, {"type": "input_value", "name": "PIXEL"}, {"type": "input_value", "name": "COLOR"}], "helpUrl": ""});
  }
};


Blockly.Blocks['pin_setup'] = {
  init: function() {
    this.jsonInit({"colour": 240, "nextStatement": null, "tooltip": "", "message0": "Set %1 to Pin %2 mode %3", "previousStatement": null, "args0": [{"variable": "pin", "type": "field_variable", "name": "NAME"}, {"type": "field_number", "name": "PIN", "value": 0, "min": 0}, {"type": "field_dropdown", "name": "MODE", "options": [["digital input", "DIGITAL_INPUT"], ["digital input with pullup", "INPUT_PULLUP"], ["digital output", "DIGITAL_OUTPUT"], ["analog input", "ANALOG_INPUT"], ["analog output (PWM)", "PWM"]]}], "helpUrl": ""});
  }
};


Blockly.Blocks['pin_set_value'] = {
  init: function() {
    this.jsonInit({"colour": 240, "nextStatement": null, "tooltip": "", "message0": "Set %1 value to %2", "previousStatement": null, "args0": [{"variable": "pin", "type": "field_variable", "name": "NAME"}, {"type": "input_value", "name": "NAME", "check": "Number"}], "helpUrl": ""});
  }
};


Blockly.Blocks['pin_read_value'] = {
  init: function() {
    this.jsonInit({"colour": 240, "tooltip": "", "message0": "Read %1 value", "args0": [{"variable": "pin", "type": "field_variable", "name": "NAME"}], "output": null, "helpUrl": ""});
  }
};


Blockly.Blocks['flex_dropdown_state'] = {
  init: function() {
    this.jsonInit({"colour": 240, "tooltip": "", "message0": "%1", "args0": [{"type": "field_dropdown", "name": "STATE", "options": [["ON", "1"], ["OFF", "0"]]}], "output": null, "helpUrl": ""});
  }
};


Blockly.Blocks['flex_dropdown_pin'] = {
  init: function() {
    this.jsonInit({"inputsInline": true, "colour": 240, "tooltip": "", "message0": "%1", "args0": [{"type": "field_dropdown", "name": "PORT", "options": [["P1", "p1"], ["P2", "p2"], ["P3", "p3"], ["P4", "p4"], ["P5", "p5"], ["P6", "p6"], ["P7", "p7"]]}], "output": null, "helpUrl": ""});
  }
};


Blockly.Blocks['relay_setup'] = {
  init: function() {
    this.jsonInit({"colour": 260, "nextStatement": null, "tooltip": "", "message0": "Set %1 to Relay on Port %2", "previousStatement": null, "args0": [{"variable": "relay", "type": "field_variable", "name": "NAME"}, {"type": "field_dropdown", "name": "PORT", "options": [["P1", "p1"], ["P2", "p2"], ["P3", "p3"], ["P4", "p4"], ["P5", "p5"], ["P6", "p6"], ["P7", "p7"]]}], "helpUrl": ""});
  }
};


Blockly.Blocks['relay_set'] = {
  init: function() {
    this.jsonInit({"colour": 260, "nextStatement": null, "tooltip": "", "message0": "Set %1 to %2", "previousStatement": null, "args0": [{"variable": "relay", "type": "field_variable", "name": "NAME"}, {"type": "input_value", "name": "STATE"}], "helpUrl": ""});
  }
};


Blockly.Blocks['servo_set_angle_var'] = {
  init: function() {
    this.jsonInit({"colour": 280, "nextStatement": null, "tooltip": "", "message0": "Set %1 angle (0-180\u00b0) to %2", "previousStatement": null, "args0": [{"variable": "servo", "type": "field_variable", "name": "NAME"}, {"type": "input_value", "name": "NAME"}], "helpUrl": ""});
  }
};


Blockly.Blocks['servo_set_angle_fix'] = {
  init: function() {
    this.jsonInit({"colour": 280, "nextStatement": null, "tooltip": "", "message0": "Set %1 angle (0-180\u00b0) to %2", "previousStatement": null, "args0": [{"variable": "servo", "type": "field_variable", "name": "NAME"}, {"type": "field_angle", "angle": 90, "name": "ANGLE"}], "helpUrl": ""});
  }
};


Blockly.Blocks['servo_setup'] = {
  init: function() {
    this.jsonInit({"colour": 280, "nextStatement": null, "tooltip": "", "message0": "Set %1 to SERVO on Port %2", "previousStatement": null, "args0": [{"variable": "servo", "type": "field_variable", "name": "NAME"}, {"type": "field_dropdown", "name": "PORT", "options": [["P1", "p1"], ["P2", "p2"], ["P3", "p3"], ["P4", "p4"], ["P5", "p5"], ["P6", "p6"], ["P7", "p7"]]}], "helpUrl": ""});
  }
};


Blockly.Blocks['dht_setup'] = {
  init: function() {
    this.jsonInit({"colour": 300, "nextStatement": null, "tooltip": "", "message0": "Set %1 to %2 sensor on Port %3", "previousStatement": null, "args0": [{"variable": "dht", "type": "field_variable", "name": "NAME"}, {"type": "field_dropdown", "name": "DHT", "options": [["DHT11", "dht11"], ["DHT22", "dht22"]]}, {"type": "field_dropdown", "name": "PORT", "options": [["P1", "p1"], ["P2", "p2"], ["P3", "p3"], ["P4", "p4"], ["P5", "p5"], ["P6", "p6"], ["P7", "p7"]]}], "helpUrl": ""});
  }
};


Blockly.Blocks['dht_measure'] = {
  init: function() {
    this.jsonInit({"colour": 300, "nextStatement": null, "tooltip": "", "message0": "Measure %1", "previousStatement": null, "args0": [{"variable": "dht", "type": "field_variable", "name": "NAME"}], "helpUrl": ""});
  }
};


Blockly.Blocks['dht_get_value'] = {
  init: function() {
    this.jsonInit({"colour": 300, "tooltip": "", "message0": "Get %1 's %2", "args0": [{"variable": "dht", "type": "field_variable", "name": "NAME"}, {"type": "field_dropdown", "name": "TYPE", "options": [["temperature (\u00b0C)", "TEMP"], ["humidity (%)", "HUMID"]]}], "output": null, "helpUrl": ""});
  }
};


Blockly.Blocks['ds18b20_setup'] = {
  init: function() {
    this.jsonInit({"colour": 300, "nextStatement": null, "tooltip": "", "message0": "Set %1 to DS18B20 sensor on Port %2", "previousStatement": null, "args0": [{"variable": "ds18b20", "type": "field_variable", "name": "NAME"}, {"type": "field_dropdown", "name": "PORT", "options": [["P1", "p1"], ["P2", "p2"], ["P3", "p3"], ["P4", "p4"], ["P5", "p5"], ["P6", "p6"], ["P7", "p7"]]}], "helpUrl": ""});
  }
};


Blockly.Blocks['ds18b20_convert_temp'] = {
  init: function() {
    this.jsonInit({"colour": 300, "nextStatement": null, "tooltip": "", "message0": "Convert %1 to temperature", "previousStatement": null, "args0": [{"variable": "ds18b20", "type": "field_variable", "name": "NAME"}], "helpUrl": ""});
  }
};


Blockly.Blocks['ds18b20_get_value'] = {
  init: function() {
    this.jsonInit({"colour": 300, "tooltip": "", "message0": "Get %1 's temperature (\u00b0C)", "args0": [{"variable": "ds18b20", "type": "field_variable", "name": "NAME"}], "output": null, "helpUrl": ""});
  }
};


Blockly.Blocks['timer_event_every'] = {
  init: function() {
    this.jsonInit({"colour": 320, "nextStatement": null, "tooltip": "", "message0": "Every %1 %2 %3 do %4 %5", "previousStatement": null, "args0": [{"type": "input_dummy"}, {"type": "input_value", "name": "time", "check": "Number"}, {"type": "field_dropdown", "name": "type", "options": [["seconds", "sec"], ["millis", "mil"]]}, {"type": "input_dummy"}, {"type": "input_statement", "name": "handler"}], "helpUrl": ""});
  }
};


Blockly.Blocks['timer_event_after'] = {
  init: function() {
    this.jsonInit({"colour": 320, "nextStatement": null, "tooltip": "", "message0": "After  %1 %2 %3 from now do %4 %5", "previousStatement": null, "args0": [{"type": "input_dummy"}, {"type": "input_value", "name": "time", "check": "Number"}, {"type": "field_dropdown", "name": "type", "options": [["seconds", "sec"], ["millis", "mil"]]}, {"type": "input_dummy"}, {"type": "input_statement", "name": "handler"}], "helpUrl": ""});
  }
};


Blockly.Blocks['time_sleep'] = {
  init: function() {
    this.jsonInit({"colour": 320, "nextStatement": null, "tooltip": "", "message0": "Sleep %1 %2 %3", "previousStatement": null, "args0": [{"type": "input_dummy"}, {"type": "input_value", "name": "time", "check": "Number"}, {"type": "field_dropdown", "name": "DURATION", "options": [["seconds", "sec"], ["milliseconds", "mil"], ["microseconds", "mic"]]}], "helpUrl": ""});
  }
};


Blockly.Blocks['touch_setup'] = {
  init: function() {
    this.jsonInit({"colour": 340, "nextStatement": null, "tooltip": "", "message0": "Set %1 to touch sensor on Port %2", "previousStatement": null, "args0": [{"variable": "touch", "type": "field_variable", "name": "NAME"}, {"type": "field_dropdown", "name": "PORT", "options": [["P1", "p1"], ["P2", "p2"], ["P3", "p3"], ["P4", "p4"], ["P5", "p5"], ["P6", "p6"], ["P7", "p7"]]}], "helpUrl": ""});
  }
};


Blockly.Blocks['touch_get_value'] = {
  init: function() {
    this.jsonInit({"colour": 340, "tooltip": "", "message0": "%1 is touched", "args0": [{"variable": "touch", "type": "field_variable", "name": "NAME"}], "output": null, "helpUrl": ""});
  }
};


