define(['util/template/2.0',
    'gallery/jquery/jqueryLatest'
], function (template, $, Nav) {
    var exports = {
        init: function () {
            Nav.initEvent(function(){});
            $(document).ready(function(){
             Judgment(); 
            });
             
             
        }

    };
    exports.init();
    
    function Judgment(){
    	
    }
    
    
 });