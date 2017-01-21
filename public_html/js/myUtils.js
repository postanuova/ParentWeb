/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function testLibary() {
  alert("library fetched!");
}

function buildNudeCount(nudeCount) {
  if (nudeCount == 0)
    return "No nudes detected";
  if (nudeCount == 1)
    return nudeCount + " nude detected";
  if (nudeCount > 1)
    return nudeCount + " nudes detected";
}

function buildMediaIconGroup(hasText, hasImage, hasVideo, hasAudio) {
  var htmlOutput = "";
  if (hasText)
    htmlOutput += "<img src='../images/whatsappHasMessage.png' style='max-width:10%;' alt='-'/>";
  if (hasImage)
    htmlOutput += "&nbsp;<img src='../images/whatsappHasPicture.png' style='max-width:10%;' alt='-'/>";
  if (hasVideo)
    htmlOutput += "&nbsp;<img src='../images/photoHasVideo.png' style='max-width:10%;' alt='-'/>";
  if (hasAudio)
    htmlOutput += "&nbsp;<img src='../images/whatsappHasVocalMessage.png' style='max-width:10%;' alt='-'/>";
  return htmlOutput;
}

function enableOnlyButton(timeFrame) {
  if (timeFrame == "day") {
    $("#dayBtn").addClass("ui-btn-active");
    $("#weekBtn").removeClass("ui-btn-active");
    $("#monthBtn").removeClass("ui-btn-active");
  }
  if (timeFrame == "week") {
    $("#dayBtn").removeClass("ui-btn-active");
    $("#weekBtn").addClass("ui-btn-active");
    $("#monthBtn").removeClass("ui-btn-active");
  }
  if (timeFrame == "month") {
    $("#dayBtn").removeClass("ui-btn-active");
    $("#weekBtn").removeClass("ui-btn-active");
    $("#monthBtn").addClass("ui-btn-active");
  }
}





var accountUrl = "http://92.222.83.28/parent/account2.php";
function doGetAccountJson() {
  console.log("doGetAccountJson");
  //window.alert("doGetHomeJson " + timeFrame);
  $.ajax({
    url: accountUrl,
    //url: 'file:///home/chris/proxy/home2.php',

    type: 'GET',
    crossDomain: true,
    jsonp: 'callback',
    jsonpCallback: 'ciao',
    dataType: 'jsonp',
    /*  data: {
     format: 'jsonp'
     },*/
    contentType: 'application/json',
    error: function (jqXHR, textStatus, errorThrown) {
      console.log("doGetAccountJson error");
//            deviceAR = "{\"devices\":[{\"id\":\"356a192b7913b04c54574d18c28d46e6395428ab\",\"name\":\"iPhonediAle\"},{\"id\":\"da4b9237bacccdf19c0760cab7aec4a8359010b0\",\"name\":\"iPhonediJoe\"},{\"id\":\"77de68daecd823babbb58edb1c8e14d7106e83bb\",\"name\":\"iPhone\",\"profiled\":false}]}";
//
//            deviceAR = JSON.parse(deviceAR);        
//    console.log(deviceAR);
//            populateDeviceMenu(deviceAR);
    },
    success: function (json, textStatus, jqXHR) {
      console.log("doGetAccountJson success");
      populateDeviceMenu(json);
    }
  });
}

//        function doGetHomeJsonLocal(timeFrame) {
//          var jsonHomeDay = JSON.parse("{\"meta\":[],\"data\":{\"notifications\":null,\"whatsapp\":{\"count\":114,\"latests\":{\"count\":12,\"has_text\":true,\"has_image\":true,\"has_video\":false,\"has_audio\":true,\"list\":[{\"id\":\"374707453\",\"first_name\":\"Sara\",\"last_name\":\"\",\"phone_number\":\"34634932907\"},{\"id\":\"446329876\",\"first_name\":\"Martina\",\"last_name\":\"\",\"phone_number\":\"34634501533\"},{\"id\":\"733818272\",\"first_name\":\"Valentina\",\"last_name\":\"\",\"phone_number\":\"34634568032\"},{\"id\":\"1883492084\",\"first_name\":\"Alessia\",\"last_name\":\"\",\"phone_number\":\"34634248145\"},{\"id\":\"1373938670\",\"is_group\":true,\"title\":\"Home\"}]},\"increase\":{\"list\":[{\"id\":\"1249076410\",\"first_name\":\"Francesca\",\"last_name\":\"\",\"phone_number\":\"34634379805\"},{\"id\":\"1673278242\",\"first_name\":\"Federica\",\"last_name\":\"\",\"phone_number\":\"34634118632\"},{\"id\":\"374707453\",\"first_name\":\"Sara\",\"last_name\":\"\",\"phone_number\":\"34634493031\"},{\"id\":\"1467554728\",\"is_group\":true,\"title\":\"Piano\"},{\"id\":\"1320340042\",\"is_group\":true,\"title\":\"Bar\"},{\"id\":\"2117263245\",\"is_group\":true,\"title\":\"School\"}]},\"nude\":{\"count\":1}},\"photo\":{\"count\":88,\"has_image\":true,\"has_video\":true,\"places\":{\"count\":3,\"list\":[{\"id\":\"1\",\"name\":\"Adeje\"},{\"id\":\"2\",\"name\":\"Arona\"},{\"id\":\"3\",\"name\":\"aaaaaaaaaaaaaaa\"}]},\"nude\":{\"count\":4}},\"visit\":{\"count\":85,\"places\":{\"count\":23,\"list\":[{\"id\":\"2\",\"name\":\"Ladispoli\"},{\"id\":\"1\",\"name\":\"BeverlyHills\"},{\"id\":\"2\",\"name\":\"Napa\"},{\"id\":\"1\",\"name\":\"PaloAlto\"},{\"id\":\"1\",\"name\":\"MountainView\"},{\"id\":\"2\",\"name\":\"LasVegas\"},{\"id\":\"2\",\"name\":\"Seattle\"},{\"id\":\"2\",\"name\":\"Adeje\"},{\"id\":\"2\",\"name\":\"PlayaParaiso\"},{\"id\":\"1\",\"name\":\"CallaoSalvaje\"}]}},\"geofence\":{\"count\":32,\"geofences\":[{\"id\":\"Lincontro\",\"name\":\"RistoranteL'Incontro\",\"latitude\":28.120483,\"longitude\":-16.7775494,\"radius\":100,\"enter\":true,\"leave\":true,\"week\":6,\"start\":\"1156\",\"stop\":\"2126\",\"count\":3},{\"id\":\"Ale\",\"name\":\"Ale\",\"latitude\":28.120483,\"longitude\":-16.7775494,\"radius\":100,\"enter\":true,\"leave\":true,\"week\":2,\"start\":\"0455\",\"stop\":\"2012\",\"count\":7},{\"id\":\"SiamMall\",\"name\":\"CentroComercialSiamMall\",\"latitude\":28.120483,\"longitude\":-16.7775494,\"radius\":100,\"enter\":true,\"leave\":true,\"week\":105,\"start\":\"1043\",\"stop\":\"2312\",\"count\":5},{\"id\":\"Michele\",\"name\":\"UfficiodiMichele\",\"latitude\":28.120483,\"longitude\":-16.7775494,\"radius\":100,\"enter\":true,\"leave\":true,\"week\":76,\"start\":\"0810\",\"stop\":\"2135\",\"count\":2}]}},\"pagination\":{\"eof\":true}}");
//          var jsonHomeWeek = JSON.parse("{\"meta\":[],\"data\":{\"notifications\":null,\"whatsapp\":{\"count\":119,\"latests\":{\"count\":18,\"has_text\":true,\"has_image\":true,\"has_video\":true,\"has_audio\":true,\"list\":[{\"id\":\"777950004\",\"first_name\":\"Claudia\",\"last_name\":\"\",\"phone_number\":\"34634724240\"},{\"id\":\"1842796096\",\"first_name\":\"Beatrice\",\"last_name\":\"\",\"phone_number\":\"34634841306\"},{\"id\":\"386170735\",\"first_name\":\"Ismaele\",\"last_name\":\"\",\"phone_number\":\"34634464144\"},{\"id\":\"178928522\",\"first_name\":\"Michela\",\"last_name\":\"\",\"phone_number\":\"34634467025\"},{\"id\":\"1373938670\",\"is_group\":true,\"title\":\"Home\"}]},\"increase\":{\"list\":[{\"id\":\"446329876\",\"first_name\":\"Martina\",\"last_name\":\"\",\"phone_number\":\"34634997853\"},{\"id\":\"733818272\",\"first_name\":\"Valentina\",\"last_name\":\"\",\"phone_number\":\"34634553250\"},{\"id\":\"1883492084\",\"first_name\":\"Alessia\",\"last_name\":\"\",\"phone_number\":\"34634487178\"},{\"id\":\"712328370\",\"is_group\":true,\"title\":\"Afternoon\"},{\"id\":\"1467554728\",\"is_group\":true,\"title\":\"Piano\"},{\"id\":\"1320340042\",\"is_group\":true,\"title\":\"Bar\"}]},\"nude\":{\"count\":2}},\"photo\":{\"count\":58,\"has_image\":true,\"has_video\":true,\"places\":{\"count\":3,\"list\":[{\"id\":\"1\",\"name\":\"Adeje\"},{\"id\":\"2\",\"name\":\"Arona\"},{\"id\":\"3\",\"name\":\"aaaaaaaaaaaaaaa\"}]},\"nude\":{\"count\":5}},\"visit\":{\"count\":59,\"places\":{\"count\":27,\"list\":[{\"id\":\"1\",\"name\":\"Ladispoli\"},{\"id\":\"1\",\"name\":\"BeverlyHills\"},{\"id\":\"2\",\"name\":\"Napa\"},{\"id\":\"1\",\"name\":\"PaloAlto\"},{\"id\":\"2\",\"name\":\"MountainView\"},{\"id\":\"2\",\"name\":\"LasVegas\"},{\"id\":\"2\",\"name\":\"Seattle\"},{\"id\":\"1\",\"name\":\"Adeje\"},{\"id\":\"2\",\"name\":\"PlayaParaiso\"},{\"id\":\"1\",\"name\":\"CallaoSalvaje\"}]}},\"geofence\":{\"count\":25,\"geofences\":[{\"id\":\"Lincontro\",\"name\":\"RistoranteL'Incontro\",\"latitude\":28.120483,\"longitude\":-16.7775494,\"radius\":100,\"enter\":true,\"leave\":true,\"week\":97,\"start\":\"0116\",\"stop\":\"1459\",\"count\":7},{\"id\":\"Ale\",\"name\":\"Ale\",\"latitude\":28.120483,\"longitude\":-16.7775494,\"radius\":100,\"enter\":true,\"leave\":true,\"week\":114,\"start\":\"0221\",\"stop\":\"1446\",\"count\":7},{\"id\":\"SiamMall\",\"name\":\"CentroComercialSiamMall\",\"latitude\":28.120483,\"longitude\":-16.7775494,\"radius\":100,\"enter\":true,\"leave\":true,\"week\":83,\"start\":\"0937\",\"stop\":\"2354\",\"count\":7},{\"id\":\"Michele\",\"name\":\"UfficiodiMichele\",\"latitude\":28.120483,\"longitude\":-16.7775494,\"radius\":100,\"enter\":true,\"leave\":true,\"week\":70,\"start\":\"0016\",\"stop\":\"1354\",\"count\":6}]}},\"pagination\":{\"eof\":true}}");
//          var jsonHomeMonth = JSON.parse("{\"meta\":[],\"data\":{\"notifications\":null,\"whatsapp\":{\"count\":187,\"latests\":{\"count\":22,\"has_text\":true,\"has_image\":true,\"has_video\":true,\"has_audio\":true,\"list\":[{\"id\":\"418289079\",\"first_name\":\"Giada\",\"last_name\":\"\",\"phone_number\":\"34634789142\"},{\"id\":\"777950004\",\"first_name\":\"Claudia\",\"last_name\":\"\",\"phone_number\":\"34634721027\"},{\"id\":\"1842796096\",\"first_name\":\"Beatrice\",\"last_name\":\"\",\"phone_number\":\"34634710733\"},{\"id\":\"386170735\",\"first_name\":\"Ismaele\",\"last_name\":\"\",\"phone_number\":\"34634690446\"},{\"id\":\"1373938670\",\"is_group\":true,\"title\":\"Home\"}]},\"increase\":{\"list\":[{\"id\":\"672560819\",\"first_name\":\"Elena\",\"last_name\":\"\",\"phone_number\":\"34634215505\"},{\"id\":\"758985266\",\"first_name\":\"Laura\",\"last_name\":\"\",\"phone_number\":\"34634388474\"},{\"id\":\"1716491075\",\"first_name\":\"Alice\",\"last_name\":\"\",\"phone_number\":\"34634851556\"},{\"id\":\"575284333\",\"is_group\":true,\"title\":\"Family\"},{\"id\":\"1373938670\",\"is_group\":true,\"title\":\"Home\"},{\"id\":\"210963790\",\"is_group\":true,\"title\":\"Music\"}]},\"nude\":{\"count\":3}},\"photo\":{\"count\":55,\"has_image\":true,\"has_video\":true,\"places\":{\"count\":3,\"list\":[{\"id\":\"1\",\"name\":\"Adeje\"},{\"id\":\"2\",\"name\":\"Arona\"},{\"id\":\"3\",\"name\":\"aaaaaaaaaaaaaaa\"}]},\"nude\":{\"count\":6}},\"visit\":{\"count\":57,\"places\":{\"count\":19,\"list\":[{\"id\":\"2\",\"name\":\"BeverlyHills\"},{\"id\":\"1\",\"name\":\"Napa\"},{\"id\":\"1\",\"name\":\"PaloAlto\"},{\"id\":\"1\",\"name\":\"MountainView\"},{\"id\":\"1\",\"name\":\"LasVegas\"},{\"id\":\"2\",\"name\":\"Seattle\"},{\"id\":\"2\",\"name\":\"Adeje\"},{\"id\":\"2\",\"name\":\"PlayaParaiso\"},{\"id\":\"2\",\"name\":\"CallaoSalvaje\"},{\"id\":\"2\",\"name\":\"Miraverde\"}]}},\"geofence\":{\"count\":25,\"geofences\":[{\"id\":\"Lincontro\",\"name\":\"RistoranteL'Incontro\",\"latitude\":28.120483,\"longitude\":-16.7775494,\"radius\":100,\"enter\":true,\"leave\":true,\"week\":98,\"start\":\"0037\",\"stop\":\"1531\",\"count\":7},{\"id\":\"Ale\",\"name\":\"Ale\",\"latitude\":28.120483,\"longitude\":-16.7775494,\"radius\":100,\"enter\":true,\"leave\":true,\"week\":31,\"start\":\"0917\",\"stop\":\"1931\",\"count\":1},{\"id\":\"SiamMall\",\"name\":\"CentroComercialSiamMall\",\"latitude\":28.120483,\"longitude\":-16.7775494,\"radius\":100,\"enter\":true,\"leave\":true,\"week\":33,\"start\":\"1213\",\"stop\":\"1439\",\"count\":7},{\"id\":\"Michele\",\"name\":\"UfficiodiMichele\",\"latitude\":28.120483,\"longitude\":-16.7775494,\"radius\":100,\"enter\":true,\"leave\":true,\"week\":124,\"start\":\"0946\",\"stop\":\"1759\",\"count\":7}]}},\"pagination\":{\"eof\":true}}");
//          if (timeFrame == "day")
//            populateHome(jsonHomeDay);
//          if (timeFrame == "week")
//            populateHome(jsonHomeWeek);
//          if (timeFrame == "month")
//            populateHome(jsonHomeMonth);
//        }

function populateDeviceMenu(json) {
  //console.log("populateDeviceMenu + json " + json.devices);
  var deviceAR = json.data.devices;
  //var deviceAR = json;
  var template = $.templates("#deviceListTemplate");
  var htmlOutput = template.render(deviceAR);
  htmlOutput = "<form>" +
          "<div class='ui-field-contain' >" +
          "<select name='select-native-1' id='select-native-1' class='my-header-select'>" +
          htmlOutput +
          "</select>" +
          "</div>" +
          "</form>";
  //console.log(htmlOutput);
  $("#deviceMenuDiv").html(htmlOutput);
}