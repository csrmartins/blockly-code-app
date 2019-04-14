//Função para Rodar o Código JavaScript
function runCode() {
  console.log('Run code CLicked');
  // Generate JavaScript code and run it.
  Blockly.JavaScript.addReservedWords('code');
  window.LoopTrap = 1000;
  Blockly.JavaScript.INFINITE_LOOP_TRAP =
      'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';
  var code = Blockly.JavaScript.workspaceToCode(workspace);
  Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
  try {
    console.log(code, 'Try Eval Code!');
    eval(code);
  } catch (e) {
    alert(e);
  }
}




function loadProject() {
  console.log('Load Project Clicked');
  var xml = Blockly.Xml.textToDom(project.txt);
  console.log(xml, 'this is xml');
  Blockly.Xml.domToWorkspace(xml, workspace);
}

function bringProject(txt){
  console.log('bringProject was called!!');
  var xml = Blockly.Xml.textToDom(txt);
  console.log(xml, 'this is xml');
  Blockly.Xml.domToWorkspace(xml, workspace);
}
