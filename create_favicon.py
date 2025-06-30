#!/usr/bin/env python3
"""
Script to create terminal-style favicon based on uploaded design
"""
from PIL import Image, ImageDraw
import os

def create_terminal_favicon(size=32):
    """Create a terminal-style favicon based on the uploaded purple design"""
    # Colors from the uploaded image
    bg_color = (168, 85, 247, 255)  # Purple #a855f7
    white_color = (255, 255, 255, 255)  # White
    header_color = (168, 85, 247, 180)  # Semi-transparent purple for header
    
    # Create the image with transparent background
    img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # Scale factor for different sizes
    scale = size / 32
    
    # Draw main terminal window with rounded corners (approximated)
    margin = int(1 * scale)
    corner_radius = int(6 * scale)
    
    # Main background rectangle
    draw.rounded_rectangle(
        [margin, margin, size - margin, size - margin], 
        radius=corner_radius, 
        fill=bg_color
    )
    
    # Terminal header bar
    header_height = int(6 * scale)
    draw.rounded_rectangle(
        [margin + int(1 * scale), margin + int(1 * scale), 
         size - margin - int(1 * scale), margin + header_height], 
        radius=int(3 * scale), 
        fill=header_color
    )
    
    # Three dots in header
    dot_radius = max(1, int(1 * scale))
    dot_y = margin + int(3 * scale)
    dot_spacing = int(4 * scale)
    start_x = int(6 * scale)
    
    for i in range(3):
        dot_x = start_x + (i * dot_spacing)
        draw.ellipse([dot_x - dot_radius, dot_y - dot_radius, 
                     dot_x + dot_radius, dot_y + dot_radius], fill=white_color)
    
    # Terminal prompt symbol ">" (chevron)
    chevron_width = int(2 * scale)
    chevron_y_center = int(18 * scale)
    chevron_x_start = int(8 * scale)
    chevron_size = int(4 * scale)
    
    # Draw chevron as two lines forming ">"
    points = [
        (chevron_x_start, chevron_y_center - chevron_size),
        (chevron_x_start + chevron_size, chevron_y_center),
        (chevron_x_start, chevron_y_center + chevron_size)
    ]
    
    # Draw the chevron lines
    for i in range(len(points) - 1):
        x1, y1 = points[i]
        x2, y2 = points[i + 1]
        draw.line([x1, y1, x2, y2], fill=white_color, width=chevron_width)
    
    # Terminal cursor (horizontal line)
    cursor_x = int(16 * scale)
    cursor_y = int(19 * scale)
    cursor_width = int(6 * scale)
    cursor_height = int(2 * scale)
    
    draw.rectangle([cursor_x, cursor_y, cursor_x + cursor_width, cursor_y + cursor_height], 
                  fill=white_color)
    
    return img

def create_multiple_sizes():
    """Create terminal favicon in multiple sizes and formats"""
    sizes = [16, 32, 48, 64, 128, 180, 192, 256, 512]
    
    for size in sizes:
        img = create_terminal_favicon(size)
        filename = f'favicon_{size}x{size}.png'
        img.save(filename)
        print(f"Created {filename}")
    
    # Create the main favicon.png (32x32)
    main_favicon = create_terminal_favicon(32)
    main_favicon.save('public/favicon.png')
    print("Created public/favicon.png")
    
    # Create Apple Touch Icon (180x180)
    apple_icon = create_terminal_favicon(180)
    apple_icon.save('public/apple-touch-icon.png')
    print("Created public/apple-touch-icon.png")
    
    # Create different sized icons for manifest
    icon_192 = create_terminal_favicon(192)
    icon_192.save('public/icon-192x192.png')
    print("Created public/icon-192x192.png")
    
    icon_512 = create_terminal_favicon(512)
    icon_512.save('public/icon-512x512.png')
    print("Created public/icon-512x512.png")
    
    # Create multi-size ICO file
    ico_sizes = [16, 32, 48]
    icons = []
    
    for size in ico_sizes:
        icon_img = create_terminal_favicon(size)
        icons.append(icon_img)
    
    # Save as ICO file
    if icons:
        icons[0].save('public/favicon.ico', format='ICO', 
                     sizes=[(16, 16), (32, 32), (48, 48)],
                     append_images=icons[1:] if len(icons) > 1 else [])
        print("Created public/favicon.ico")

def create_maskable_icon():
    """Create a maskable icon for PWA with safe zone"""
    size = 512
    safe_zone = int(size * 0.1)  # 10% safe zone around the edges
    
    # Create image with transparent background
    img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # Draw a full circle background for maskable icon
    bg_color = (168, 85, 247, 255)  # Purple
    draw.ellipse([safe_zone, safe_zone, size - safe_zone, size - safe_zone], fill=bg_color)
    
    # Create a smaller terminal icon in the center
    terminal_size = int(size * 0.6)  # 60% of the full size
    offset = (size - terminal_size) // 2
    
    terminal_img = create_terminal_favicon(terminal_size)
    
    # Paste the terminal icon onto the circular background
    img.paste(terminal_img, (offset, offset), terminal_img)
    
    img.save('public/icon-maskable-512x512.png')
    print("Created public/icon-maskable-512x512.png")

if __name__ == "__main__":
    print("Creating terminal-style favicons based on uploaded design...")
    create_multiple_sizes()
    create_maskable_icon()
    print("All favicons created successfully!")
    print("\nFiles created:")
    print("- public/favicon.png (32x32)")
    print("- public/favicon.ico (multi-size)")
    print("- public/favicon.svg (vector)")
    print("- public/apple-touch-icon.png (180x180)")
    print("- public/icon-192x192.png")
    print("- public/icon-512x512.png")
    print("- public/icon-maskable-512x512.png")
