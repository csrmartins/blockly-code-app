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
