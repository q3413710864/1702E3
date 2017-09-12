window.onload = main();

function main() {

    
    Live2D.init();
    
    var chara = [];
    var canvas = [];
    var charaNum = 4;
    
//  for (var i = 0; i < charaNum; i++) {
        chara = new Simple();
        canvas = initCanvas("moxing");
        chara.initLoop(canvas);
//  }
    
    return;
}


function initCanvas(canvasId) {
    
    
	var canvas = document.getElementById(canvasId);
    
    
    canvas.addEventListener("webglcontextlost", function(e) {
        Simple.myerror("context lost");
        loadLive2DCompleted = false;
        initLive2DCompleted = false;
        
        var cancelAnimationFrame = 
            window.cancelAnimationFrame || 
            window.mozCancelAnimationFrame;
        cancelAnimationFrame(requestID); 
        
        e.preventDefault(); 
    }, false);
    
    
	canvas.addEventListener("webglcontextrestored" , function(e){
        Simple.myerror("webglcontext restored");
        Simple.initLoop(canvas); 
    }, false);
    
    return canvas;
}
