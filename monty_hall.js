//simulation for monty hall problem

var PLAY_COUNT = 10000;
var correct_count_for_first_select= 0;
var correct_count_for_second_select = 0;
for (var play=0; play<PLAY_COUNT; ++play)
{
	var correct = random_select();
	var player_first_select = random_select(); 
	var chairman_select;
	if (player_first_select == correct) {
		chairman_select = remain_select_of2(correct);
	}
	else {
		chairman_select = remain_select_of1(correct,player_first_select);
	}
	var player_second_select = remain_select_of1(player_first_select,chairman_select);
	if (player_first_select == correct) ++correct_count_for_first_select;
	if (player_second_select == correct) ++correct_count_for_second_select;
}

window.alert("first select: "+(correct_count_for_first_select)/PLAY_COUNT+" second select: "+(correct_count_for_second_select)/PLAY_COUNT);

function random_select()
{
	return Math.floor(Math.random()*3);
}
function remain_select_of1(select1,select2)
{
	var select=3-select1-select2;
	return select;
}
function remain_select_of2(select1)
{
	var select = random_select();
	if (select == select1) ++select;
	if (select>2) select = 0;
	return select;
}

