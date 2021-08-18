$('.toggle').click(function(e) {
    e.preventDefault();  
    var $this = $(this);

    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(350);
    } else {
        $this.parent().parent().find('li .inner').removeClass('show');
        $this.parent().parent().find('li .inner').slideUp(350);
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
    }

    return false;
});


function swap_order() {
   var mainFrameOne = document.getElementById("categorical"); 
   var mainFrameTwo = document.getElementById("chronological");

   mainFrameOne.style.display = (
       mainFrameOne.style.display == "none" ? "block" : "none"); 
   mainFrameTwo.style.display = (
       mainFrameTwo.style.display == "none" ? "block" : "none"); 
}