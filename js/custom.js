'use strict'
/**
 * @file custom.js
 * @author Daniel Santos <dfsantosbu@unal.edu.co>
 * @version 1
 */

 function displayOptions(){
  document.getElementById("sub-progress").style.display = "inline";
 }

 function displayRightMenu(){
  document.getElementById("sidenav-right").style.width = "280px";
  document.getElementById("bell1").style.display = "none";
 }


 function hideRightMenu(){
  document.getElementById("sidenav-right").style.width = "0px";
  document.getElementById("bell1").style.display = "inline";
 }