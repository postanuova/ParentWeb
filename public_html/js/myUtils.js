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