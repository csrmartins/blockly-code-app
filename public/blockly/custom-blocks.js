Blockly.Blocks['definir-cor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set Background Color to:")
        .appendField(new Blockly.FieldDropdown([["Blue","B"], ["Yellow","Y"], ["Purple","R"]]), "lightcolor");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['definir-cor'] = function(block) {
  var dropdown_lightcolor = block.getFieldValue('lightcolor');
  // TODO: Assemble JavaScript into code variable.
  var code = "console.log('bloco SET_Color funcionando!');"
  if (dropdown_lightcolor === "B"){
    var code = "document.getElementsByClassName('rightContainer')[0].style.backgroundColor='steelblue';"
  }
  if (dropdown_lightcolor === "Y"){
    var code = "document.getElementsByClassName('rightContainer')[0].style.backgroundColor='goldenrod';"
  }
  if (dropdown_lightcolor === "R"){
    var code = "document.getElementsByClassName('rightContainer')[0].style.backgroundColor='blueviolet';"
  }
  // TODO: Assemble JavaScript into code variable.
  return code;
};

//Move Character To the Right----------------------------------------------------------------

Blockly.Blocks['move_character_right'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Mover ")
        .appendField(new Blockly.FieldDropdown([["Pássaro Vermelho","redDuck"], ["Pássaro Verde","greenDuck"], ["Passaro Azul","blueDuck"]]), "charId")
        .appendField("para direita")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['move_character_right'] = function(block) {
  var dropdown_charid = block.getFieldValue('charId');
  // TODO: Assemble JavaScript into code variable.
  var code = `${dropdown_charid}.moveRight();`

  return code;
};

//Move Character To the Left----------------------------------------------------------------
Blockly.Blocks['move_character_left'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Mover ")
        .appendField(new Blockly.FieldDropdown([["Pássaro Vermelho","redDuck"], ["Pássaro Verde","greenDuck"], ["Passaro Azul","blueDuck"]]), "charId")
        .appendField("para esquerda")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['move_character_left'] = function(block) {
  var dropdown_charid = block.getFieldValue('charId');
  // TODO: Assemble JavaScript into code variable.
  var code = `${dropdown_charid}.moveLeft();`

  return code;
};

//Move Character Up----------------------------------------------------------------
Blockly.Blocks['move_character_up'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Mover ")
        .appendField(new Blockly.FieldDropdown([["Pássaro Vermelho","redDuck"], ["Pássaro Verde","greenDuck"], ["Passaro Azul","blueDuck"]]), "charId")
        .appendField("para cima")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['move_character_up'] = function(block) {
  var dropdown_charid = block.getFieldValue('charId');
  // TODO: Assemble JavaScript into code variable.
  var code = `${dropdown_charid}.moveUp();`

  return code;
};

//Move Character Down----------------------------------------------------------------
Blockly.Blocks['move_character_down'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Mover ")
        .appendField(new Blockly.FieldDropdown([["Pássaro Vermelho","redDuck"], ["Pássaro Verde","greenDuck"], ["Passaro Azul","blueDuck"]]), "charId")
        .appendField("para baixo")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['move_character_down'] = function(block) {
  var dropdown_charid = block.getFieldValue('charId');
  // TODO: Assemble JavaScript into code variable.
  var code = `${dropdown_charid}.moveDown();`

  return code;
};
