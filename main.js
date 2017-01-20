$(".grid-img").click(function(){
  $("#current-img").attr("src",$(this).find("img").attr("src"));
})

$("#mark-btn").click(function(){
  $(".grid-img").each(function() {
    if($(this).find(">img").attr("src")==$("#current-img").attr("src")){
      $(this).removeClass("unchecked").addClass("checked");
    }
  })
})

$("#unmark-btn").click(function(){
  $(".grid-img").each(function() {
    if($(this).find(">img").attr("src")==$("#current-img").attr("src")){
      $(this).removeClass("checked").addClass("unchecked");
    }
  })
})


//Function to get pixel data and store in to the database..

$(function() {
$("#test").click(function(e) {
  var offset = $(this).offset();
  var relativeX = (e.pageX - offset.left);
  var relativeY = (e.pageY - offset.top - 0.5);
    // alert(relativeX+':'+relativeY);
  $(".position").val("afaf");

    $.saveClicks = function() {
        $(this).bind('mousedown.clickmap', function(evt) {
            $.post('php/clickmap.php', {
                x:evt.relativeX,
                y:evt.relativeY,
                l:escape(document.location.pathname)
            });
        });
    };
});
});



//Function to activate marking..

//$("#mark-btn").click(function(){
//  $(".grid-img").each(function() {
//    if($(this).find(">img").attr("src")==$("#current-img").attr("src")){
//
//    }
//  })
//})


//Function to select the pixels and change them when grid image is clicked..

$('#current-img').ready(function(){

                $('#current-img').click(function (ev) {
                     if ($(".grid-img").click(function(){
                         $(".marker").remove() ;
                     }))
                    $("body").append(
                        $('<div class="marker"></div>').css({
                            position: 'absolute',
                            top: ev.pageY + 'px',
                            left: ev.pageX + 'px',
                            width: '10px',
                            height: '10px',
                            background: '#000000'

                        })
                    );
                });

            });


//Function of tree structure of folders..

$( document ).ready( function( ) {
    $( '.tree li' ).each( function() {
        if( $( this ).children( 'ul' ).length > 0 ) {
            $( this ).addClass( 'parent' );
        }
    });

    $( '.tree li.parent > a' ).click( function( ) {
        $( this ).parent().toggleClass( 'active' );
        $( this ).parent().children( 'ul' ).slideToggle( 'fast' );
    });

    $( '#all' ).click( function() {

        $( '.tree li' ).each( function() {
            $( this ).toggleClass( 'active' );
            $( this ).children( 'ul' ).slideToggle( 'fast' );
        });
    });

});


//Function to select main image from the list of images..

$(".sample-img").click(function(){
    $(".grid-img").attr("src",$(this).find("img").attr("src"));
})