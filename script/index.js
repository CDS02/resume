let data;
const intro=(d)=>{
    var intr=document.createElement("div");
    $("h1#tit").html(`<h1 id="#tit">${d.fname} ${d["lname"]}</h1>`);
    
    var tx=`
    <div id="inf">
    <h2>Contact me</h2>
    <ul id="inf_d">
    <li><i class="fa fa-envelope" aria-hidden="true"></i></i>${d["email"]}</li>
    <li><i class="fa fa-phone" aria-hidden="true"></i>${d["phone"]}</li>
    <li><i class="fa fa-map-marker" aria-hidden="true"></i>${d["Address"]}</li>
    </ul>
    </div>
    `;
    intr.innerHTML=tx;
    $("#intro").append(tx);
    $("#intro").css("display","none");
    
    }
const edul=(d)=>{
    var txto=`
    <h1>Education Timeline</h1>
    <div id="eto_b">
    <img src=${d["g_img"]}>
    <div id="edu_b">
    <h1>${d["g_des"]}</h1>
    <h2>${d["g_college"]}</h2>
    <p>${d["g_time"]}</p>
    <p>${d["g_place"]}</p>
    </div>
    </div>
    <div id="eto_a">
    <img src=${d["b_img"]}>
    <div id="edu_a">
    <h1>${d["b_des"]}</h1>
    <h2>${d["b_college"]}</h2>
    <p>${d["b_time"]}</p>
    <p>${d["b_place"]}</p>
    </div>
    </div>
    `;
    var newele=document.createElement("div");
    newele.innerHTML=txto;
    console.log(d);
    $("#edu").append(newele);


} 
$(document).ready(()=>{
    $.getJSON("./data/info.JSON",(info)=>{
        data = info;
        console.log(info);
        console.log(data[0]);
        intro(data[0]);
        edul(data[2]);
        $("#intro").slideToggle(700);
        
    })
    
});

