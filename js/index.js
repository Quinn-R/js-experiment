function readFile(game)
{	
	var str1 = storedText(game);
	var str2 = storedImages(game);
	
	document.getElementById("text1").innerHTML = str1; 
	document.getElementById("image1").src = str2; 
}

function storedText(game)
{
	if(game == "witcher3")
	{
		return "You are looking at witcher 3"; 
		
	}
	else if(game == "skyrim")
	{
		return "You are looking at skyrim";
	}
}

function storedImages(game)
{
	if(game == "witcher3")
	{
		return "img/witcher3.jpg"; 
		
	}
	else if(game == "skyrim")
	{
		return "img/skyrim.png";
	}
}
