from PIL import Image
import os

# List of files to convert with high quality
files = [
    ('sokrates.png', 'sokrates.webp'),
    ('multigrosir.png', 'multigrosir.webp'),
    ('aurel-louhan.png', 'aurel-louhan.webp')
]

for png_file, webp_file in files:
    if os.path.exists(png_file):
        print(f"Converting {png_file} to {webp_file} with high quality...")
        img = Image.open(png_file)
        # Use lossless WebP for maximum quality
        img.save(webp_file, 'WEBP', lossless=True, quality=100, method=6)
        file_size = os.path.getsize(webp_file) / 1024
        print(f"✓ Converted {webp_file} ({file_size:.1f} KB)")
    else:
        print(f"✗ File not found: {png_file}")

print("\nHigh-quality conversion complete!")
