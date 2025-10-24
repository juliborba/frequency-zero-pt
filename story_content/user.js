window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  var p = GetPlayer();
// user: trim + lowercase
p.SetVar("v_user", (p.GetVar("v_user") || "").trim().toLowerCase());
// pass: só trim (senha normalmente é case sensitive)
p.SetVar("v_pass", (p.GetVar("v_pass") || "").trim());
// token: trim (vamos comparar como texto)
p.SetVar("v_token", (p.GetVar("v_token") || "").trim());
}

};
