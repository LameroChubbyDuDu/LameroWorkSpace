let o;WA.room.onEnterLayer("floorLayer").subscribe(()=>{o=WA.ui.openPopup("popupRectangle","Hello world!",[{label:"Close",className:"primary",callback:e=>{e.close()}}])});WA.room.onLeaveLayer("floorLayer").subscribe(()=>{o.close()});WA.chat.sendChatMessage("Hello world","Mr Robot");
//# sourceMappingURL=script-ab6206b6.js.map
