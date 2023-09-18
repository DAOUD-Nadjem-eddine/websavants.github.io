
// if(window.innerWidth<640){
//     console.log("hhhhhhhhhhhhhhhhhhhhhhhhhh")
//     document.getElementById('background').src="img/bg3.png";
// }else if(window.innerWidth<1563){
//     console.log("jjjjjjjjjjjjjjjjjjjjjjjjj")
//     document.getElementById('background').src="img/bg2.png";
// }else{
// console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk")
// document.getElementById('background').src="img/bg1.png";
// }

if(window.innerWidth<640){
        document.getElementById('background').src="img/bg3.png";
        document.getElementById('pc3').src="img/picture.png"
    }else if(window.innerWidth<1563){
        document.getElementById('background').src="img/bg2.png";
    }else{
    document.getElementById('background').src="img/bg1.png";
    }



if(window.innerWidth<640){
    var elements = document.getElementsByClassName("image-wrapper");

// Loop through each element and set its height based on the calculation
for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var newHeight = window.innerWidth * 1 / 2.35 + "px"; // Calculate the new height
    element.style.height = newHeight; // Set the calculated height to the element
    }
}
else{
    // Get all elements with the class name "image-wrapper"
var elements = document.getElementsByClassName("image-wrapper");

// Loop through each element and set its height based on the calculation
for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var newHeight = window.innerWidth * 9 / 16 + "px"; // Calculate the new height
    element.style.height = newHeight; // Set the calculated height to the element
    }



    var gradientRibbon=document.getElementsByClassName("card");

    for(var i = 0; i < gradientRibbon.length; i++) {
        var blueribbon=gradientRibbon[i];
        var Nwheight=blueribbon.innerwidth * 0.11 + "px";
        blueribbon.style.height=Nwheight;
         
        // var toppos=window.innerWidth * 9 / 16 + "px"; 
        // blueribbon.style.top=toppos;
    // 
    // blueribbon.style.top="886,5px";
    }
    var explanationTeam=document.getElementsByClassName("serv-explanation");
    for(var i=0;i<explanationTeam.length;i++){
        var teamExp=explanationTeam[i];
        var margTop="8%";
        teamExp.style.marginTop=margTop;
    }
    var pcImage1=document.getElementsByClassName("pc1");
    var TeamDdiv=document.getElementsByClassName("serv-explanation");
    var imgdivpc1=document.getElementsByClassName("imgpcDiv");

    for(var i=0; i<pcImage1.length;i++){
        var imagePc1=pcImage1[i];
        var newHeight = TeamDdiv.innerWidth * 9 / 16 + "px";
        imagePc1.style.height=newHeight;

    }
    for(var i=0; i<imgdivpc1.length;i++){
        var divImgpc=imgdivpc1[i];
        var newheight=divImgpc.innerWidth * 9 / 16 +"px";
        imagePc1.style.height=newheight;

    }


}
