// Debugger
    // Der Debugger ist ein essentielles Tool in Chrome und anderen Browsern
    // Die ganze Dokumentation dazu findest du hier:
    // https://developer.chrome.com/docs/devtools/javascript?hl=de
        
        let count = 0;

        function init(){
            testOne();
            debuggerOutput('init');
            testOne();
            testTwo('testTwo');
            testOne();
        }

        function testOne(){
            debuggerOutput('testOne');
        }

        function testTwo(text){
            debuggerOutput(text);
            testOne();
        }

        function debuggerOutput(text){
            count++;
            let debuggerLogRef = document.getElementById('debugger_log');
            debuggerLogRef.innerHTML = text + count;
        }