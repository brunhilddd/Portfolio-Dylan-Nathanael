from PIL import Image
import os

# List of files to convert
files = [
    ('sokrates.png', 'sokrates.webp'),
    ('multigrosir.png', 'multigrosir.webp'),
    ('aurel-louhan.png', 'aurel-louhan.webp')
]

for png_file, webp_file in files:
    if os.path.exists(png_file):
        print(f"Converting {png_file} to {webp_file}...")
        img = Image.open(png_file)
        img.save(webp_file, 'WEBP', quality=85, method=6)
        print(f"✓ Converted {webp_file}")
    else:
        print(f"✗ File not found: {png_file}")

print("\nConversion complete!")
