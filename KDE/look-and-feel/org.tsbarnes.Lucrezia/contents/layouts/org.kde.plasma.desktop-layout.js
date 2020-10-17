var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "ItemGeometriesHorizontal": "",
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "540",
                    "DialogWidth": "720"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                },
                "/General": {
                    "ToolBoxButtonState": "topcenter",
                    "ToolBoxButtonX": "774",
                    "sortMode": "-1",
                    "toolTips": "true"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "file:///home/thea/Pictures/Wallpapers/alone.jpg",
                    "SlidePaths": "/usr/share/plasma/wallpapers\\,/usr/share/wallpapers\\,/home/thea/Pictures/Wallpapers"
                },
                "/Wallpaper/org.kde.latte.slideshow/General": {
                    "Image": "file:///home/thea/Pictures/Wallpapers/SCBlueDarkWallpaper.png",
                    "SlidePaths": "/usr/share/plasma/wallpapers,/usr/share/wallpapers,/home/thea/Pictures/Wallpapers"
                },
                "/Wallpaper/org.kde.potd/General": {
                    "FillMode": "2",
                    "Provider": "bing"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        }
    ],
    "panels": [
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);
