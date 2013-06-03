<script type="text/javascript">
        $(document).ready(function show() {
            document.getElementById(arguments[0]).style.display='block';
            for (var i = 1; i < arguments.length; i++) {
                // alert(arguments[i]);
                 document.getElementById(arguments[i]).style.display='none';
            }
            return false;
        })

        $(document).ready(function() {
            
            animationClick('button', '#Home', 'tada');

            function animationClick(element, anielement, animation){
                element = $(element);
                anielement = $(anielement);
                element.click(
                    function() {
                        anielement.addClass('animated ' + animation);          
                        //wait for animation to finish before removing classes
                        window.setTimeout( function(){
                        anielement.removeClass('animated ' + animation);
                        }, 2000);           
                    });
            }
        });    
</script>