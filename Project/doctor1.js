	$(document).ready(function(){
		$('ul.tabs li').click(function(){
			var tab_id = $(this).attr('data-tab');

			$('ul.tabs li').removeClass('current');
			$('.tab-content').removeClass('current');

			$(this).addClass('current');
			$("#"+tab_id).addClass('current');
		});
	});

	function openChat() {
      document.getElementById('chatbox').style.display='block';
      $('.btn-chat').hide();
    }
    function closeChat() {
      document.getElementById('chatbox').style.display='none';
      $('.btn-chat').show();
    }
    $('form').submit(function () {
      var text=$(this).find("textarea[name='msg']").val();
    });