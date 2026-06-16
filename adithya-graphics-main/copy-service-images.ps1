$src = "C:\Users\PUSHPAKATH111\Downloads\Website Elements\Website cover photo\Web Bammer12.0.png"
$dest = "C:\Users\PUSHPAKATH111\Downloads\adithya-graphics-main\adithya-graphics-main\public\images\services"

New-Item -ItemType Directory -Path $dest -Force | Out-Null
$names = @(
    "business-card.jpg",
    "logo-branding.jpg",
    "menu.jpg",
    "packaging.jpg",
    "poster.jpg",
    "event.jpg",
    "video.jpg"
)

foreach ($name in $names) {
    Copy-Item -Path $src -Destination (Join-Path $dest $name) -Force
}

Get-ChildItem -Path $dest | Select-Object -ExpandProperty Name
