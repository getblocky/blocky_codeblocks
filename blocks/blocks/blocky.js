'use strict';

goog.provide('Blockly.Blocks.colour');
goog.require('Blockly.Blocks');
goog.require('Blockly.constants');

Blockly.FieldColour.COLOURS = ['#f00', '#e00', '#d00', '#c00', '#b00', '#a00',
                               '#800', '#600', '#400', '#000'];
Blockly.FieldColour.COLUMNS = 5;


Blockly.Blocks['button_is_pressed'] = {
  init: function() {
    this.jsonInit({"message0": "%1 is being pressed", "args0": [{"type": "field_variable", "name": "BUTTON", "variable": "button"}], "output": null, "colour": 0, "tooltip": "", "helpUrl": ""});
  }
};


Blockly.Blocks['button_setup'] = {
  init: function() {
    this.jsonInit({"message0": "Set %1 to Button on Port %2", "args0": [{"type": "field_variable", "name": "NAME", "variable": "button"}, {"type": "field_dropdown", "name": "PORT", "options": [["D1", "D1"], ["D2", "D2"], ["D3", "D3"], ["D4", "D4"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"]]}], "previousStatement": null, "nextStatement": null, "colour": 0, "tooltip": "", "helpUrl": ""});
  }
};


Blockly.Blocks['buzzer_setup'] = {
  init: function() {
    this.jsonInit({"message0": "Set %1 to Buzzer on Port %2", "args0": [{"type": "field_variable", "name": "NAME", "variable": "buzzer"}, {"type": "field_dropdown", "name": "PORT", "options": [["D1", "D1"], ["D2", "D2"], ["D3", "D3"], ["D4", "D4"]]}], "previousStatement": null, "nextStatement": null, "colour": 18, "tooltip": "", "helpUrl": ""});
  }
};


Blockly.Blocks['buzzer_set'] = {
  init: function() {
    this.jsonInit({"message0": "Set %1 to %2", "args0": [{"type": "field_variable", "name": "NAME", "variable": "buzzer"}, {"type": "input_value", "name": "STATE"}], "previousStatement": null, "nextStatement": null, "colour": 18, "tooltip": "", "helpUrl": ""});
  }
};


Blockly.Blocks['oled_setup'] = {
  init: function() {
    this.jsonInit({"message0": "Set %1 to OLED on Port %2 width %3 height %4", "args0": [{"type": "field_variable", "name": "NAME", "variable": "oled"}, {"type": "field_dropdown", "name": "PORT", "options": [["D1", "D1"], ["D2", "D2"], ["D3", "D3"], ["D4", "D4"]]}, {"type": "field_number", "name": "WIDTH", "value": 128, "min": 0}, {"type": "field_number", "name": "HEIGHT", "value": 64, "min": 0}], "previousStatement": null, "nextStatement": null, "colour": 36, "tooltip": "", "helpUrl": ""});
  }
};


Blockly.Blocks['oled_fill'] = {
  init: function() {
    this.jsonInit({"message0": "Fill %1 with %2", "args0": [{"type": "field_variable", "name": "NAME", "variable": "oled"}, {"type": "field_dropdown", "name": "COLOR", "options": [["black", "0"], ["white", "1"]]}], "previousStatement": null, "nextStatement": null, "colour": 36, "tooltip": "", "helpUrl": ""});
  }
};


Blockly.Blocks['oled_set_pixel'] = {
  init: function() {
    this.jsonInit({"message0": "Set %1 pixel at x %2 y %3 to %4", "args0": [{"type": "field_variable", "name": "NAME", "variable": "oled"}, {"type": "input_value", "name": "POS_X", "check": "Number"}, {"type": "input_value", "name": "POS_Y", "check": "Number"}, {"type": "field_dropdown", "name": "COLOR", "options": [["white", "1"], ["black", "0"]]}], "previousStatement": null, "nextStatement": null, "colour": 36, "tooltip": "", "helpUrl": ""});
  }
};


Blockly.Blocks['oled_set_text'] = {
  init: function() {
    this.jsonInit({"message0": "%1 print text %2 at x %3 y %4 %5", "args0": [{"type": "field_variable", "name": "NAME", "variable": "oled"}, {"type": "input_value", "name": "TEXT"}, {"type": "input_value", "name": "POS_X", "check": "Number"}, {"type": "input_value", "name": "POS_Y", "check": "Number"}, {"type": "input_dummy"}], "previousStatement": null, "nextStatement": null, "colour": 36, "tooltip": "", "helpUrl": ""});
  }
};


Blockly.Blocks['led_setup'] = {
  init: function() {
    this.jsonInit({"message0": "Set %1 to LED on Port %2", "args0": [{"type": "field_variable", "name": "NAME", "variable": "led"}, {"type": "field_dropdown", "name": "PORT", "options": [["D1", "D1"], ["D2", "D2"], ["D3", "D3"], ["D4", "D4"]]}], "previousStatement": null, "nextStatement": null, "colour": 54, "tooltip": "", "helpUrl": ""});
  }
};


Blockly.Blocks['led_set'] = {
  init: function() {
    this.jsonInit({"message0": "Set %1 to %2", "args0": [{"type": "field_variable", "name": "NAME", "variable": "led"}, {"type": "input_value", "name": "STATE"}], "previousStatement": null, "nextStatement": null, "colour": 54, "tooltip": "", "helpUrl": ""});
  }
};


Blockly.Blocks['light_setup_photocell'] = {
  init: function() {
    this.jsonInit({"message0": "Set %1 to Photocell Light Sensor on Port %2", "args0": [{"type": "field_variable", "name": "NAME", "variable": "light"}, {"type": "field_dropdown", "name": "PORT", "options": [["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"]]}], "previousStatement": null, "nextStatement": null, "colour": 72, "tooltip": "", "helpUrl": ""});
  }
};


Blockly.Blocks['light_setup_bh1750'] = {
  init: function() {
    this.jsonInit({"message0": "Set %1 to BH1750 Light Sensor on Port %2", "args0": [{"type": "field_variable", "name": "NAME", "variable": "light"}, {"type": "field_dropdown", "name": "PORT", "options": [["D1", "D1"], ["D2", "D2"], ["D3", "D3"], ["D4", "D4"]]}], "previousStatement": null, "nextStatement": null, "colour": 72, "tooltip": "", "helpUrl": ""});
  }
};


Blockly.Blocks['light_get_light_bh1750'] = {
  init: function() {
    this.jsonInit({"message0": "Get BH1750  %1 value", "args0": [{"type": "field_variable", "name": "NAME", "variable": "light"}], "output": null, "colour": 72, "tooltip": "", "helpUrl": ""});
  }
};


Blockly.Blocks['light_get_light_photocell'] = {
  init: function() {
    this.jsonInit({"message0": "Get photocell %1 value", "args0": [{"type": "field_variable", "name": "NAME", "variable": "light"}], "output": null, "colour": 72, "tooltip": "", "helpUrl": ""});
  }
};


Blockly.Blocks['main_block'] = {
  init: function() {
    this.jsonInit({"message0": "Setup %1 %2 Main Loop %3 %4", "args0": [{"type": "input_dummy"}, {"type": "input_statement", "name": "SETUP"}, {"type": "input_dummy"}, {"type": "input_statement", "name": "LOOP"}], "colour": 90, "tooltip": "", "helpUrl": ""});
  }
};


Blockly.Blocks['message_send_message'] = {
  init: function() {
    this.jsonInit({"message0": "Send to topic %1 with message %2 %3", "args0": [{"type": "input_value", "name": "TOPIC"}, {"type": "input_value", "name": "MSG"}, {"type": "input_dummy"}], "previousStatement": null, "nextStatement": null, "colour": 108, "tooltip": "", "helpUrl": ""});
  }
};


Blockly.Blocks['message_send_log'] = {
  init: function() {
    this.jsonInit({"message0": "Print device log %1", "args0": [{"type": "input_value", "name": "MSG"}], "previousStatement": null, "nextStatement": null, "colour": 108, "tooltip": "", "helpUrl": ""});
  }
};


Blockly.Blocks['message_subscribe_topic'] = {
  init: function() {
    this.jsonInit({"message0": "When receive topic %1 with message  %2 as %3 %4 %5", "args0": [{"type": "input_value", "name": "TOPIC"}, {"type": "field_variable", "name": "MSG", "variable": "message"}, {"type": "field_dropdown", "name": "TYPE", "options": [["string", "STRING"], ["number", "NUMBER"]]}, {"type": "input_dummy"}, {"type": "input_statement", "name": "HANDLER"}], "previousStatement": null, "nextStatement": null, "colour": 108, "tooltip": "", "helpUrl": ""});
  }
};


Blockly.Blocks['moisture_setup'] = {
  init: function() {
    this.jsonInit({"message0": "Set %1 to moisture sensor on Port %2", "args0": [{"type": "field_variable", "name": "NAME", "variable": "moisture"}, {"type": "field_dropdown", "name": "PORT", "options": [["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"]]}], "previousStatement": null, "nextStatement": null, "colour": 126, "tooltip": "", "helpUrl": ""});
  }
};


Blockly.Blocks['moisture_get_value'] = {
  init: function() {
    this.jsonInit({"message0": "Get %1 value", "args0": [{"type": "field_variable", "name": "NAME", "variable": "moisture"}], "output": null, "colour": 126, "tooltip": "", "helpUrl": ""});
  }
};


Blockly.Blocks['mosfet_setup'] = {
  init: function() {
    this.jsonInit({"message0": "Set %1 to MOSFET on Port %2", "args0": [{"type": "field_variable", "name": "NAME", "variable": "mosfet"}, {"type": "field_dropdown", "name": "PORT", "options": [["D1", "D1"], ["D2", "D2"], ["D3", "D3"], ["D4", "D4"]]}], "previousStatement": null, "nextStatement": null, "colour": 144, "tooltip": "", "helpUrl": ""});
  }
};


Blockly.Blocks['mosfet_set'] = {
  init: function() {
    this.jsonInit({"message0": "Set %1 to %2", "args0": [{"type": "field_variable", "name": "NAME", "variable": "mosfet"}, {"type": "input_value", "name": "STATE"}], "previousStatement": null, "nextStatement": null, "colour": 144, "tooltip": "", "helpUrl": ""});
  }
};


Blockly.Blocks['motion_setup'] = {
  init: function() {
    this.jsonInit({"message0": "Set %1 to PIR motion sensor on Port %2", "args0": [{"type": "field_variable", "name": "NAME", "variable": "pir"}, {"type": "field_dropdown", "name": "PORT", "options": [["D1", "D1"], ["D2", "D2"], ["D3", "D3"], ["D4", "D4"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"]]}], "previousStatement": null, "nextStatement": null, "colour": 162, "tooltip": "", "helpUrl": ""});
  }
};


Blockly.Blocks['motion_get_value'] = {
  init: function() {
    this.jsonInit({"message0": "%1 detected motion", "args0": [{"type": "field_variable", "name": "NAME", "variable": "pir"}], "output": null, "colour": 162, "tooltip": "", "helpUrl": ""});
  }
};


Blockly.Blocks['microbit_music_play_built_in'] = {
  init: function() {
    this.jsonInit({"message0": "Play built-in melody %1 %2 Wait %3 %4 Loop %5", "args0": [{"type": "field_dropdown", "name": "melody", "options": [["DADADADUM", "DADADADUM"], ["ENTERTAINER", "ENTERTAINER"], ["PRELUDE", "PRELUDE"], ["ODE", "ODE"], ["NYAN", "NYAN"], ["RINGTONE", "RINGTONE"], ["FUNK", "FUNK"], ["BLUES", "BLUES"], ["BIRTHDAY", "BIRTHDAY"], ["WEDDING", "WEDDING"], ["FUNERAL", "FUNERAL"], ["PUNCHLINE", "PUNCHLINE"], ["PYTHON", "PYTHON"], ["BADDY", "BADDY"], ["CHASE", "CHASE"], ["BA_DING", "BA_DING"], ["WAWAWAWAA", "WAWAWAWAA"], ["JUMP_UP", "JUMP_UP"], ["JUMP_DOWN", "JUMP_DOWN"], ["POWER_UP", "POWER_UP"], ["POWER_DOWN", "POWER_DOWN"]]}, {"type": "input_dummy"}, {"type": "field_checkbox", "name": "wait", "checked": true}, {"type": "input_dummy"}, {"type": "field_checkbox", "name": "loop", "checked": false}], "previousStatement": null, "nextStatement": null, "colour": 180, "tooltip": "Play one of the built-in melodies. Indicate if you need to wait before continuing or continuously loop the melody.", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/music.html#built-in-melodies"});
  }
};


Blockly.Blocks['microbit_music_pitch'] = {
  init: function() {
    this.jsonInit({"message0": "Play pitch %1 %2 for  %3 milliseconds", "args0": [{"type": "field_number", "name": "pitch", "value": 440, "min": 0}, {"type": "input_dummy"}, {"type": "field_number", "name": "duration", "value": 1000, "min": 0}], "inputsInline": true, "previousStatement": null, "nextStatement": null, "colour": 180, "tooltip": "Play a pitch at a certain number of cycles per second for a specified number of milliseconds.", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/music.html#music.pitch"});
  }
};


Blockly.Blocks['microbit_music_play_list_of_notes'] = {
  init: function() {
    this.jsonInit({"message0": "Play notes %1 Wait %2 %3 Loop %4", "args0": [{"type": "input_value", "name": "notes", "check": "Array"}, {"type": "field_checkbox", "name": "wait", "checked": true}, {"type": "input_dummy"}, {"type": "field_checkbox", "name": "loop", "checked": false}], "previousStatement": null, "nextStatement": null, "colour": 180, "tooltip": "Play a list of notes expressed in the special music language. Indicate if you need to wait before continuing or continuously loop the melody.", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/music.html#musical-notation"});
  }
};


Blockly.Blocks['microbit_music_reset'] = {
  init: function() {
    this.jsonInit({"message0": "Reset music", "previousStatement": null, "nextStatement": null, "colour": 180, "tooltip": "Reset all music related settings (current tempo, octave and duration) to default values.", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/music.html#music.reset"});
  }
};


Blockly.Blocks['microbit_music_stop'] = {
  init: function() {
    this.jsonInit({"message0": "Stop music", "previousStatement": null, "nextStatement": null, "colour": 180, "tooltip": "Stop all music playback.", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/music.html#music.stop"});
  }
};


Blockly.Blocks['microbit_music_set_tempo'] = {
  init: function() {
    this.jsonInit({"message0": "Set tempo: 1 beat is %1 ticks at %2 bpm", "args0": [{"type": "input_value", "name": "ticks", "check": "Number"}, {"type": "input_value", "name": "bpm", "check": "Number"}], "inputsInline": true, "previousStatement": null, "nextStatement": null, "colour": 180, "tooltip": "Set the speed (tempo) of playback. A certain number of ticks represents a beat. Each beat is to be played a certain number of times a minute (beats per minute or BPM).", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/music.html#music.set_tempo"});
  }
};


Blockly.Blocks['microbit_music_get_tempo'] = {
  init: function() {
    this.jsonInit({"message0": "Get current tempo", "output": "Array", "colour": 180, "tooltip": "Gets current tempo information as two numbers: number of ticks per beat, and number of beats per minute (BPM).", "helpUrl": "https://microbit-micropython.readthedocs.io/en/latest/music.html#music.get_tempo"});
  }
};


Blockly.Blocks['neopixel_setup'] = {
  init: function() {
    this.jsonInit({"message0": "Set %1 to NeoPixel on Port %2 with %3 pixels", "args0": [{"type": "field_variable", "name": "NAME", "variable": "neopixel"}, {"type": "field_dropdown", "name": "PORT", "options": [["D1", "D1"], ["D2", "D2"], ["D3", "D3"], ["D4", "D4"]]}, {"type": "field_number", "name": "PIXELS", "value": 8, "min": 0}], "previousStatement": null, "nextStatement": null, "colour": 198, "tooltip": "", "helpUrl": ""});
  }
};


Blockly.Blocks['neopixel_set_color_all'] = {
  init: function() {
    this.jsonInit({"message0": "Set %1 all pixels color to  %2", "args0": [{"type": "field_variable", "name": "NAME", "variable": "neopixel"}, {"type": "input_value", "name": "COLOR"}], "inputsInline": true, "previousStatement": null, "nextStatement": null, "colour": 198, "tooltip": "Set color of led matrix for single led", "helpUrl": ""});
  }
};


Blockly.Blocks['neopixel_set_color'] = {
  init: function() {
    this.jsonInit({"message0": "Set %1 color at pixel  %2 to %3", "args0": [{"type": "field_variable", "name": "NAME", "variable": "neopixel"}, {"type": "input_value", "name": "PIXEL"}, {"type": "input_value", "name": "COLOR"}], "inputsInline": true, "previousStatement": null, "nextStatement": null, "colour": 198, "tooltip": "Set color of led matrix for single led", "helpUrl": ""});
  }
};


Blockly.Blocks['pin_setup'] = {
  init: function() {
    this.jsonInit({"message0": "Set %1 to Pin %2 mode %3", "args0": [{"type": "field_variable", "name": "NAME", "variable": "pin"}, {"type": "field_number", "name": "PIN", "value": 0, "min": 0}, {"type": "field_dropdown", "name": "MODE", "options": [["digital input", "DIGITAL_INPUT"], ["digital input with pullup", "INPUT_PULLUP"], ["digital output", "DIGITAL_OUTPUT"], ["analog input", "ANALOG_INPUT"]]}], "previousStatement": null, "nextStatement": null, "colour": 216, "tooltip": "", "helpUrl": ""});
  }
};


Blockly.Blocks['pin_set_value'] = {
  init: function() {
    this.jsonInit({"message0": "Set %1 value to %2", "args0": [{"type": "field_variable", "name": "NAME", "variable": "pin"}, {"type": "input_value", "name": "NAME", "check": "Number"}], "previousStatement": null, "nextStatement": null, "colour": 216, "tooltip": "", "helpUrl": ""});
  }
};


Blockly.Blocks['pin_read_value'] = {
  init: function() {
    this.jsonInit({"message0": "Read %1 value", "args0": [{"type": "field_variable", "name": "NAME", "variable": "pin"}], "output": null, "colour": 216, "tooltip": "", "helpUrl": ""});
  }
};


Blockly.Blocks['flex_dropdown_state'] = {
  init: function() {
    this.jsonInit({"message0": "%1", "args0": [{"type": "field_dropdown", "name": "STATE", "options": [["ON", "1"], ["OFF", "0"]]}], "output": null, "colour": 216, "tooltip": "", "helpUrl": ""});
  }
};


Blockly.Blocks['flex_dropdown_pin'] = {
  init: function() {
    this.jsonInit({"message0": "%1", "args0": [{"type": "field_dropdown", "name": "PORT", "options": [["P1", "p1"], ["P2", "p2"], ["P3", "p3"], ["P4", "p4"], ["P5", "p5"], ["P6", "p6"], ["P7", "p7"]]}], "inputsInline": true, "output": null, "colour": 216, "tooltip": "", "helpUrl": ""});
  }
};


Blockly.Blocks['pwm_setup'] = {
  init: function() {
    this.jsonInit({"message0": "Set %1 to PWM on port %2 %3 with freq %4 duty %5 %6", "args0": [{"type": "field_variable", "name": "NAME", "variable": "pwm"}, {"type": "field_dropdown", "name": "PORT", "options": [["D1", "D1"], ["D2", "D2"], ["D3", "D3"], ["D4", "D4"]]}, {"type": "input_dummy"}, {"type": "input_value", "name": "FREQ", "check": "Number"}, {"type": "input_value", "name": "DUTY", "check": "Number"}, {"type": "input_dummy"}], "previousStatement": null, "nextStatement": null, "colour": 234, "tooltip": "", "helpUrl": ""});
  }
};


Blockly.Blocks['pwm_set_duty'] = {
  init: function() {
    this.jsonInit({"message0": "Set %1 duty to %2 %3 %4", "args0": [{"type": "field_variable", "name": "NAME", "variable": "pwm"}, {"type": "input_dummy"}, {"type": "input_value", "name": "DUTY", "check": "Number"}, {"type": "input_dummy"}], "previousStatement": null, "nextStatement": null, "colour": 234, "tooltip": "", "helpUrl": ""});
  }
};


Blockly.Blocks['pwm_set_freq'] = {
  init: function() {
    this.jsonInit({"message0": "Set %1 frequency to %2 %3 %4", "args0": [{"type": "field_variable", "name": "NAME", "variable": "pwm"}, {"type": "input_dummy"}, {"type": "input_value", "name": "FREQ", "check": "Number"}, {"type": "input_dummy"}], "previousStatement": null, "nextStatement": null, "colour": 234, "tooltip": "", "helpUrl": ""});
  }
};


Blockly.Blocks['relay_setup'] = {
  init: function() {
    this.jsonInit({"message0": "Set %1 to Relay on Port %2", "args0": [{"type": "field_variable", "name": "NAME", "variable": "relay"}, {"type": "field_dropdown", "name": "PORT", "options": [["D1", "D1"], ["D2", "D2"], ["D3", "D3"], ["D4", "D4"]]}], "previousStatement": null, "nextStatement": null, "colour": 252, "tooltip": "", "helpUrl": ""});
  }
};


Blockly.Blocks['relay_set'] = {
  init: function() {
    this.jsonInit({"message0": "Set %1 to %2", "args0": [{"type": "field_variable", "name": "NAME", "variable": "relay"}, {"type": "input_value", "name": "STATE"}], "previousStatement": null, "nextStatement": null, "colour": 252, "tooltip": "", "helpUrl": ""});
  }
};


Blockly.Blocks['servo_set_angle_var'] = {
  init: function() {
    this.jsonInit({"message0": "Set %1 angle (0-180) to %2", "args0": [{"type": "field_variable", "name": "NAME", "variable": "servo"}, {"type": "input_value", "name": "ANGLE_NAME"}], "previousStatement": null, "nextStatement": null, "colour": 270, "tooltip": "", "helpUrl": ""});
  }
};


Blockly.Blocks['servo_set_angle_fix'] = {
  init: function() {
    this.jsonInit({"message0": "Set %1 angle (0-180) to %2", "args0": [{"type": "field_variable", "name": "NAME", "variable": "servo"}, {"type": "field_angle", "name": "ANGLE", "angle": 90}], "previousStatement": null, "nextStatement": null, "colour": 270, "tooltip": "", "helpUrl": ""});
  }
};


Blockly.Blocks['servo_setup'] = {
  init: function() {
    this.jsonInit({"message0": "Set %1 to SERVO on Port %2", "args0": [{"type": "field_variable", "name": "NAME", "variable": "servo"}, {"type": "field_dropdown", "name": "PORT", "options": [["D1", "D1"], ["D2", "D2"], ["D3", "D3"], ["D4", "D4"]]}], "previousStatement": null, "nextStatement": null, "colour": 270, "tooltip": "", "helpUrl": ""});
  }
};


Blockly.Blocks['dht_setup'] = {
  init: function() {
    this.jsonInit({"message0": "Set %1 to %2 sensor on Port %3", "args0": [{"type": "field_variable", "name": "NAME", "variable": "dht"}, {"type": "field_dropdown", "name": "DHT", "options": [["DHT11", "dht11"], ["DHT22", "dht22"]]}, {"type": "field_dropdown", "name": "PORT", "options": [["D1", "D1"], ["D2", "D2"], ["D3", "D3"], ["D4", "D4"]]}], "previousStatement": null, "nextStatement": null, "colour": 288, "tooltip": "", "helpUrl": ""});
  }
};


Blockly.Blocks['dht_measure'] = {
  init: function() {
    this.jsonInit({"message0": "Measure %1", "args0": [{"type": "field_variable", "name": "NAME", "variable": "dht"}], "previousStatement": null, "nextStatement": null, "colour": 288, "tooltip": "", "helpUrl": ""});
  }
};


Blockly.Blocks['dht_get_value'] = {
  init: function() {
    this.jsonInit({"message0": "Get %1 's %2", "args0": [{"type": "field_variable", "name": "NAME", "variable": "dht"}, {"type": "field_dropdown", "name": "TYPE", "options": [["temperature (\u00c2\u00b0C)", "TEMP"], ["humidity (%)", "HUMID"]]}], "output": null, "colour": 288, "tooltip": "", "helpUrl": ""});
  }
};


Blockly.Blocks['ds18b20_setup'] = {
  init: function() {
    this.jsonInit({"message0": "Set %1 to DS18B20 sensor on Port %2", "args0": [{"type": "field_variable", "name": "NAME", "variable": "ds18b20"}, {"type": "field_dropdown", "name": "PORT", "options": [["D1", "D1"], ["D2", "D2"], ["D3", "D3"], ["D4", "D4"]]}], "previousStatement": null, "nextStatement": null, "colour": 288, "tooltip": "", "helpUrl": ""});
  }
};


Blockly.Blocks['ds18b20_convert_temp'] = {
  init: function() {
    this.jsonInit({"message0": "Convert %1 to temperature", "args0": [{"type": "field_variable", "name": "NAME", "variable": "ds18b20"}], "previousStatement": null, "nextStatement": null, "colour": 288, "tooltip": "", "helpUrl": ""});
  }
};


Blockly.Blocks['ds18b20_get_value'] = {
  init: function() {
    this.jsonInit({"message0": "Get %1 's temperature (\u00c2\u00b0C)", "args0": [{"type": "field_variable", "name": "NAME", "variable": "ds18b20"}], "output": null, "colour": 288, "tooltip": "", "helpUrl": ""});
  }
};


Blockly.Blocks['timer_event_every'] = {
  init: function() {
    this.jsonInit({"message0": "Every %1 %2 %3 do %4 %5", "args0": [{"type": "input_dummy"}, {"type": "input_value", "name": "time", "check": "Number"}, {"type": "field_dropdown", "name": "type", "options": [["seconds", "sec"], ["millis", "mil"]]}, {"type": "input_dummy"}, {"type": "input_statement", "name": "handler"}], "previousStatement": null, "nextStatement": null, "colour": 306, "tooltip": "", "helpUrl": ""});
  }
};


Blockly.Blocks['timer_event_after'] = {
  init: function() {
    this.jsonInit({"message0": "After  %1 %2 %3 from now do %4 %5", "args0": [{"type": "input_dummy"}, {"type": "input_value", "name": "time", "check": "Number"}, {"type": "field_dropdown", "name": "type", "options": [["seconds", "sec"], ["millis", "mil"]]}, {"type": "input_dummy"}, {"type": "input_statement", "name": "handler"}], "previousStatement": null, "nextStatement": null, "colour": 306, "tooltip": "", "helpUrl": ""});
  }
};


Blockly.Blocks['time_sleep'] = {
  init: function() {
    this.jsonInit({"message0": "Sleep %1 %2 %3", "args0": [{"type": "input_dummy"}, {"type": "input_value", "name": "time", "check": "Number"}, {"type": "field_dropdown", "name": "DURATION", "options": [["seconds", "sec"], ["milliseconds", "mil"], ["microseconds", "mic"]]}], "previousStatement": null, "nextStatement": null, "colour": 306, "tooltip": "", "helpUrl": ""});
  }
};


Blockly.Blocks['touch_setup'] = {
  init: function() {
    this.jsonInit({"message0": "Set %1 to touch sensor on Port %2", "args0": [{"type": "field_variable", "name": "NAME", "variable": "touch"}, {"type": "field_dropdown", "name": "PORT", "options": [["D1", "D1"], ["D2", "D2"], ["D3", "D3"], ["D4", "D4"], ["A1", "A1"], ["A2", "A2"], ["A3", "A3"], ["A4", "A4"]]}], "previousStatement": null, "nextStatement": null, "colour": 324, "tooltip": "", "helpUrl": ""});
  }
};


Blockly.Blocks['touch_get_value'] = {
  init: function() {
    this.jsonInit({"message0": "%1 is touched", "args0": [{"type": "field_variable", "name": "NAME", "variable": "touch"}], "output": null, "colour": 324, "tooltip": "", "helpUrl": ""});
  }
};


