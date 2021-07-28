var names=new Array();
names[0]="Joe";
names[1]="Tim";
names[2]="Jimmy";
names[3]="Jane";
names[4]="Andy";
names[5]="Owen";
names[6]="Darren";
names[7]="Marcus";
names[8]="May";
names[9]="Shirley";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}
