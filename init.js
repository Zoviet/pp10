var selectors = $('.selector');

var disc = $('#discret').val();

build(disc);

$('#discret').change(function(){
	build($(this).val());
});

function build(disc) {
	
	selectors.empty();

	for (let m = 0; m < Math.pow(2,disc); m++) {
		selectors.append($('<option></option>').val(m).text(m));
	}

	for (let m = 0; m < 4; m++) {
		$('#indicators').append($('<tr></tr>').attr('id','sel'+m));
		bait(m,disc) 	
	}

	selectors.change(function(){
		var num = $(this).data('for');
		var val = $(this).val();		
		discrete(val,num,disc);
	});
}

function bait(m,disc) {
	$('#sel'+m).empty();
	for (let n = 0; n < disc; n++) {
		$('#sel'+m).append($('<td></td>').addClass('has-text-danger').html('<i class="fa fa-circle" aria-hidden="true"></i>'));
	}
}

function discrete(val,num,disc) {
	bait(num,disc);
	for (let m = 0; m < disc; m++) {
		if ((val>>m)&1) {
			console.log(m,'num'+num,'val'+val,'disc'+disc);
			$('#sel'+num).find('td:eq('+m+')').removeClass('has-text-danger').addClass('has-text-success');
		}
	}
}
