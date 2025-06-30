#!/usr/bin/env python3
"""
Script to create a new favicon with purple background and white lines
"""
from PIL import Image, ImageDraw
import os

def create_favicon():
    # Create a new image with purple background
    size = 32  # Standard favicon size
    background_color = '#8B5CF6'  # Purple color
    line_color = '#FFFFFF'  # White color
    
    # Create the image
    img = Image.new('RGBA', (size, size), background_color)
    draw = ImageDraw.Draw(img)
    
    # Create a simple geometric design with white lines
    # Draw a stylized "J" or abstract lines pattern
    line_width = 2
    
    # Vertical line on the left
    draw.rectangle([6, 4, 6 + line_width, 28], fill=line_color)
    
    # Horizontal line at top
    draw.rectangle([6, 4, 20, 4 + line_width], fill=line_color)
    
    # Curved bottom part (approximated with rectangles)
    draw.rectangle([6, 24, 18, 24 + line_width], fill=line_color)
    draw.rectangle([16, 20, 16 + line_width, 28], fill=line_color)
    
    # Additional diagonal accent line
    draw.rectangle([22, 8, 26, 8 + line_width], fill=line_color)
    draw.rectangle([24, 8, 24 + line_width, 16], fill=line_color)
    
    return img

def create_multiple_sizes():
    """Create favicon in multiple sizes"""
    sizes = [16, 32, 48, 64, 128, 256]
    
    for size in sizes:
        # Create base image
        background_color = '#8B5CF6'  # Purple color
        line_color = '#FFFFFF'  # White color
        
        img = Image.new('RGBA', (size, size), background_color)
        draw = ImageDraw.Draw(img)
        
        # Scale line width based on size
        line_width = max(1, size // 16)
        
        # Scale the design proportionally
        scale = size / 32
        
        # Vertical line on the left
        x1 = int(6 * scale)
        y1 = int(4 * scale)
        x2 = int((6 + 2) * scale)
        y2 = int(28 * scale)
        draw.rectangle([x1, y1, x2, y2], fill=line_color)
        
        # Horizontal line at top
        draw.rectangle([x1, y1, int(20 * scale), int((4 + 2) * scale)], fill=line_color)
        
        # Bottom horizontal line
        draw.rectangle([x1, int(24 * scale), int(18 * scale), int((24 + 2) * scale)], fill=line_color)
        
        # Right vertical line
        draw.rectangle([int(16 * scale), int(20 * scale), int((16 + 2) * scale), int(28 * scale)], fill=line_color)
        
        # Accent lines
        draw.rectangle([int(22 * scale), int(8 * scale), int(26 * scale), int((8 + 2) * scale)], fill=line_color)
        draw.rectangle([int(24 * scale), int(8 * scale), int((24 + 2) * scale), int(16 * scale)], fill=line_color)
        
        # Save the image
        filename = f'favicon_{size}x{size}.png'
        img.save(filename)
        print(f"Created {filename}")
    
    # Create the main favicon.png (32x32)
    main_favicon = Image.new('RGBA', (32, 32), background_color)
    draw = ImageDraw.Draw(main_favicon)
    
    line_width = 2
    line_color = '#FFFFFF'
    
    # Same design for main favicon
    draw.rectangle([6, 4, 8, 28], fill=line_color)
    draw.rectangle([6, 4, 20, 6], fill=line_color)
    draw.rectangle([6, 24, 18, 26], fill=line_color)
    draw.rectangle([16, 20, 18, 28], fill=line_color)
    draw.rectangle([22, 8, 26, 10], fill=line_color)
    draw.rectangle([24, 8, 26, 16], fill=line_color)
    
    # Save to public directory
    public_path = 'public/favicon.png'
    main_favicon.save(public_path)
    print(f"Created new {public_path}")
    
    # Also create favicon.ico
    ico_sizes = [(16, 16), (32, 32), (48, 48)]
    icons = []
    
    for size in ico_sizes:
        icon_img = Image.new('RGBA', size, background_color)
        icon_draw = ImageDraw.Draw(icon_img)
        
        scale = size[0] / 32
        line_width = max(1, int(2 * scale))
        
        # Scale and draw the design
        icon_draw.rectangle([int(6 * scale), int(4 * scale), int(8 * scale), int(28 * scale)], fill=line_color)
        icon_draw.rectangle([int(6 * scale), int(4 * scale), int(20 * scale), int(6 * scale)], fill=line_color)
        icon_draw.rectangle([int(6 * scale), int(24 * scale), int(18 * scale), int(26 * scale)], fill=line_color)
        icon_draw.rectangle([int(16 * scale), int(20 * scale), int(18 * scale), int(28 * scale)], fill=line_color)
        icon_draw.rectangle([int(22 * scale), int(8 * scale), int(26 * scale), int(10 * scale)], fill=line_color)
        icon_draw.rectangle([int(24 * scale), int(8 * scale), int(26 * scale), int(16 * scale)], fill=line_color)
        
        icons.append(icon_img)
    
    # Save as ICO file
    icons[0].save('public/favicon.ico', format='ICO', sizes=[(16, 16), (32, 32), (48, 48)])
    print("Created public/favicon.ico")

if __name__ == "__main__":
    create_multiple_sizes()
