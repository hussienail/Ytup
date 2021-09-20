if(location.protocol!='https:'){location.protocol='https:';}
$("#u1,#u3").attr("maxlength",10);
$("#settings .stopic").attr("maxlength",50);
navigator.n.userAgentData=null;
for(var k in navigator){
if(typeof navigator[k]!= "function" && k!="n"){
try{navigator.n[k]=JSON.parse(JSON.stringify(navigator[k]))}catch(er){}
}
}
navigator.n.userAgentData=null;

navigator.n.userAgentData=null;
for(var k in navigator){
    if(typeof navigator[k]!= "function" && k!="n"){
    try{navigator.n[k]=JSON.parse(JSON.stringify(navigator[k]))}catch(er){}
    }
    }


$(`<div class="youtubeSearch" style="position: relative;float: right;width: 100%;top: 0;"> 
      <div class="youtubeLoad" style="display: none;text-align: center;position: absolute;right: 0;left: 0;background-color: #ffffff80;"> 
       <img style="margin-top: -9px;width: 60px;" src="imgs/icon.gif"> 
      </div> 
      <div style="display: flex;background-color: white;padding: 2px 0;border-bottom: 1px solid;"> 
       <i onclick="send('youtube', {'search':$('.youtubeVal').val()});$('.youtubeLoad').show()" style="float: left;font-size: 24px !important;color: #6d6b6b;font-weight: 100!important;margin: 3px;" class="fa fa-search" aria-hidden="true"></i> 
       <input style="text-align: center;float: right;" type="text" class="form-control youtubeVal" placeholder="بحث "> 
       <i style="float: right;font-size: 30px !important;color: red;font-weight: 100!important;margin: 3px;" class="fa fa-youtube" aria-hidden="true"></i> 
      </div> 
      <div style="display: none;" class="vieYoutube"> 
       <img style="min-height: 60px;width: 100%;float: left;" alt=""> 
       <span style="margin-top: -56px;float: left;background-color: #ffffffa1;color: red;padding: 2px 0;text-align: center;width: 100%;" class="dots youtubeTitl"></span> 
       <button style="margin: 0 2px;width: 48%;margin-top: -28px;text-align: center;" class="youtubeSend fa fa-send  fr btn btn-primary">ارسل</button> 
       <button onclick="$('.vieYoutube').hide();" style="margin: 0 2px;width: 48%;margin-top: -28px;text-align: center;" class="youtubeCloos fa fl btn btn-primary">فحص شامل</button> 
      </div> 
     </div> 
     <div class="bootbox fl light" style="width:100%;padding:4px;"> 
     </div> 
     <center>
`).insertBefore("#d2bc");
$(".dpnl").append(`<div id="mic"style="text-align: center;font-family: el messiri,FontAwesome!important;color: #610A00; height: 100%;width:100%;"class="break light tab-pane border">نتمنى لكم اجمل وقات</BR><p> للطربكه وركص شغل </p></p><iframe width="77%" height="30%" src="https://www.youtube.com/embed/OFeNwGOjaK4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p><img src="https://g.top4top.io/p_1572nrhl21.gif"style="width:%;margin-top: 0px;"></BR></BR> </BR><center></div><center></div>`), $('#d0').append(`<label title="مقهى المحبه"href="#"onclick="$('.pnhead').text($(this).attr('title'));hl($(this),'primary');setTimeout(function(){$('#mic').scrollTop(0);},0);$('.dpnl').show();"data-toggle="tab"data-target="#mic"class="ae fa label label-primary fa-tv"> </label>`);
