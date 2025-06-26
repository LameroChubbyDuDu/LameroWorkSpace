let helloWorldPopup;

// Open the popup when we enter a given zone
WA.room.onEnterLayer("floorLayer").subscribe(() => {
    helloWorldPopup = WA.ui.openPopup("popupRectangle", 'Hello world!', [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});

// Close the popup when we leave the zone.
WA.room.onLeaveLayer("floorLayer").subscribe(() => {
    helloWorldPopup.close();
})

WA.chat.sendChatMessage('Hello world', 'Mr Robot');