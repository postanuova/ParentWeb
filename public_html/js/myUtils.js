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