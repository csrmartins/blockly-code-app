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
  var code = `${dropdown_charid}.moveRight();\n`

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
  var code = `${dropdown_charid}.moveLeft();\n`

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
  var code = `${dropdown_charid}.moveUp();\n`

  return code;
};

//Move Character  Down----------------------------------------------------------------
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
  var code = `${dropdown_charid}.moveDown();\n`

  return code;
};



//move Astronaut Up

Blockly.Blocks['move_astronaut_up'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Mover ")
        .appendField(new Blockly.FieldDropdown([["Astronauta","astronaut"]]), "charId")
        .appendField("para cima")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['move_astronaut_up'] = function(block) {
  var dropdown_charid = block.getFieldValue('charId');
  // TODO: Assemble JavaScript into code variable.
  var code = `${dropdown_charid}.moveUp();\n`

  return code;
};

//move Astronaut Up

Blockly.Blocks['move_astronaut_down'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Mover ")
        .appendField(new Blockly.FieldDropdown([["Astronauta","astronaut"]]), "charId")
        .appendField("para baixo")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['move_astronaut_down'] = function(block) {
  var dropdown_charid = block.getFieldValue('charId');
  // TODO: Assemble JavaScript into code variable.
  var code = `${dropdown_charid}.moveDown();\n`

  return code;
};

//Move Astronaut Left ---------------------------------------------------------

Blockly.Blocks['move_astronaut_left'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Mover ")
        .appendField(new Blockly.FieldDropdown([["Astronauta","astronaut"]]), "charId")
        .appendField("para esquerda")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['move_astronaut_left'] = function(block) {
  var dropdown_charid = block.getFieldValue('charId');
  // TODO: Assemble JavaScript into code variable.
  var code = `${dropdown_charid}.moveLeft();\n`

  return code;
};

//Move Astronaut Right ---------------------------------------------------------

Blockly.Blocks['move_astronaut_right'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Mover ")
        .appendField(new Blockly.FieldDropdown([["Astronauta","astronaut"]]), "charId")
        .appendField("para direita")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['move_astronaut_right'] = function(block) {
  var dropdown_charid = block.getFieldValue('charId');
  // TODO: Assemble JavaScript into code variable.
  var code = `${dropdown_charid}.moveRight();\n`

  return code;
};

//Bloco AO CLICAR PARA CIMA
Blockly.Blocks['on_up_click'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Ao clicar em ")
        .appendField(new Blockly.FieldImage("/images/builder-assets/controls/up-01.png", 30, 30, "*"));
    this.appendStatementInput("KEY")
        .setCheck(null);
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['on_up_click'] = function(block) {
  var statements_key = Blockly.JavaScript.statementToCode(block, 'KEY');
  // TODO: Assemble JavaScript into code variable.
  var code = `document.getElementById('cvsUpControl').addEventListener("click", function(){${statements_key}});\n`;
  return code;
};

//Bloco AO CLICAR PARA BAIXO
Blockly.Blocks['on_down_click'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Ao clicar em ")
        .appendField(new Blockly.FieldImage("/images/builder-assets/controls/down-01.png", 30, 30, "*"));
    this.appendStatementInput("KEY")
        .setCheck(null);
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['on_down_click'] = function(block) {
  var statements_key = Blockly.JavaScript.statementToCode(block, 'KEY');
  // TODO: Assemble JavaScript into code variable.
  var code = `document.getElementById('cvsDownControl').addEventListener("click", function(){${statements_key}});\n`;
  return code;
};

//Bloco AO CLICAR PARA DIREITA
Blockly.Blocks['on_right_click'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Ao clicar em ")
        .appendField(new Blockly.FieldImage("/images/builder-assets/controls/right-01.png", 30, 30, "*"));
    this.appendStatementInput("KEY")
        .setCheck(null);
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['on_right_click'] = function(block) {
  var statements_key = Blockly.JavaScript.statementToCode(block, 'KEY');
  // TODO: Assemble JavaScript into code variable.
  var code = `document.getElementById('cvsRightControl').addEventListener("click", function(){${statements_key}});\n`;
  return code;
};

//Bloco AO CLICAR PARA ESQUERDA
Blockly.Blocks['on_left_click'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Ao clicar em ")
        .appendField(new Blockly.FieldImage("/images/builder-assets/controls/left-01.png", 30, 30, "*"));
    this.appendStatementInput("KEY")
        .setCheck(null);
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['on_left_click'] = function(block) {
  var statements_key = Blockly.JavaScript.statementToCode(block, 'KEY');
  // TODO: Assemble JavaScript into code variable.
  var code = `document.getElementById('cvsLeftControl').addEventListener("click", function(){${statements_key}});\n`;
  return code;
};

//COMNSOLE LOG BLOCK
Blockly.Blocks['console_log'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Console.log")
        .appendField(new Blockly.FieldTextInput("Log Message"), "LOG");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['console_log'] = function(block) {
  var text_log = block.getFieldValue('LOG');
  // TODO: Assemble JavaScript into code variable.
  var code = `console.log("${text_log}")\n`;
  return code;
};

//COLISION DETECTION

Blockly.Blocks['detect_colision'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Ao")
        .appendField(new Blockly.FieldDropdown([["Astronauta Branco","cvsChar01"], ["Astronauta Laranja","cvsChar02"], ["AstronautaRosa","cvsChar03"]]), "NAME1");
    this.appendDummyInput()
        .appendField("Colidir com")
        .appendField(new Blockly.FieldDropdown([["Astronauta Branco","cvsChar01"], ["Astronauta Laranja","cvsChar02"], ["AstronautaRosa","cvsChar03"]]), "NAME2");
    this.appendStatementInput("OBJ1")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['detect_colision'] = function(block) {
  var dropdown_name1 = block.getFieldValue('NAME1');
  var dropdown_name2 = block.getFieldValue('NAME2');
  var statements_obj1 = Blockly.JavaScript.statementToCode(block, 'OBJ1');
  // TODO: Assemble JavaScript into code variable.
  var code = `if (collisionDetection("${dropdown_name1}", "${dropdown_name2}")) {\n${statements_obj1}};\n`;
  return code;
};


//TEST MOBILE APP
//---------Bloco Ao Clicar no Botão

//Bloco AO CLICAR PARA CIMA
Blockly.Blocks['on_button_click'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(`Ao clicar no "Botão de Teste"`);
    this.appendStatementInput("KEY")
        .setCheck(null);
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['on_button_click'] = function(block) {
  var statements_key = Blockly.JavaScript.statementToCode(block, 'KEY');
  // TODO: Assemble JavaScript into code variable.
  var code = `document.getElementById('cvsRegularButton').addEventListener("click", function(){${statements_key}});\n`;
  return code;
};


//Bloco ao Clicar no Botão de Like!
//Bloco AO CLICAR PARA CIMA
Blockly.Blocks['on_like_click'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(`Ao clicar no "Botão Like"`);
    this.appendStatementInput("KEY")
        .setCheck(null);
    this.setColour(65);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['on_like_click'] = function(block) {
  var statements_key = Blockly.JavaScript.statementToCode(block, 'KEY');
  // TODO: Assemble JavaScript into code variable.
  var code = `document.getElementById('likeButton').addEventListener("click", function(){${statements_key}});\n`;
  return code;
};



//Alterar status para ativo

Blockly.Blocks['change_status'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Alterar status para Ativo");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['change_status'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = `document.getElementById('likeButton').addEventListener("click", function(){document.getElementById('likeButton').classList.add('mdl-button--colored')});\n`;
  return code;
};
