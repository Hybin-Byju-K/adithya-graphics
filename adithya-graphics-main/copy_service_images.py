import pathlib
import shutil

src = pathlib.Path(r"C:\Users\PUSHPAKATH111\Downloads\Website Elements\Website cover photo\Web Bammer12.0.png")
dest = pathlib.Path(r"C:\Users\PUSHPAKATH111\Downloads\adithya-graphics-main\adithya-graphics-main\public\images\services")
dest.mkdir(parents=True, exist_ok=True)

print('SRC_EXISTS', src.exists())
print('SRC', src)

if not src.exists():
    raise FileNotFoundError(f"Source not found: {src}")

names = [
    'business-card.jpg',
    'logo-branding.jpg',
    'menu.jpg',
    'packaging.jpg',
    'poster.jpg',
    'event.jpg',
    'video.jpg',
]
for name in names:
    shutil.copy2(src, dest / name)

print('COPIED')
print('\n'.join(sorted(p.name for p in dest.iterdir())))
