switch(new Date().getDay()){

	case 0:
		day = "<div class='date_today'>Sunday</div>";
	break;
	
	case 1:
		day = "<div class='date_today'>Monday</div>";
	break;

	case 2:
		day = "<div class='date_today'>Tuesday</div>";
	break;
	
	case 3:
		day = "<div class='date_today'>Wednesday</div>";
	break;
		
	case 4:
		day = "<div class='date_today'>Thursday</div>";
	break;
	
	case 5:
		day = "<div class='date_today'>Friday</div>";
	break;
	
	case 6:
		day = "<div class='date_today'>Saturday</div>";	

}
document.getElementById("datefinder").innerHTML = " <div class='today_is'> Today is</div> " + day;