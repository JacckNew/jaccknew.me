#!/usr/bin/env python3
"""
High-quality PNG icon generator for PWA and Apple devices
Only generates necessary PNG files while keeping SVG as primary favicon
"""
from PIL import Image, ImageDraw
import os

def create_high_quality_terminal_icon(size=512, padding_ratio=0.05):
    """Create high-quality terminal icon with anti-aliasing"""
    # Calculate padding for better visual balance
    padding = int(size * padding_ratio)
    content_size = size - (padding * 2)
    
    # Colors
    bg_color = (168, 85, 247, 255)  # #a855f7
    white_color = (255, 255, 255, 255)
    header_color = (139, 92, 246, 180)  # Semi-transparent #8b5cf6
    
    # Create high-resolution image for better anti-aliasing
    scale_factor = 4  # 4x supersampling for anti-aliasing
    temp_size = size * scale_factor
    temp_padding = padding * scale_factor
    temp_content = content_size * scale_factor
    
    # Create temporary high-res image
    temp_img = Image.new('RGBA', (temp_size, temp_size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(temp_img)
    
    # Scale all measurements
    corner_radius = int(6 * scale_factor * (content_size / 32))
    header_height = int(6 * scale_factor * (content_size / 32))
    
    # Main terminal window background with rounded corners
    draw.rounded_rectangle(
        [temp_padding, temp_padding, temp_size - temp_padding, temp_size - temp_padding],
        radius=corner_radius,
        fill=bg_color
    )
    
    # Terminal header bar
    header_padding = int(2 * scale_factor * (content_size / 32))
    draw.rounded_rectangle(
        [temp_padding + header_padding, temp_padding + header_padding,
         temp_size - temp_padding - header_padding, temp_padding + header_height],
        radius=int(corner_radius * 0.6),
        fill=header_color
    )
    
    # Three dots in header (circles with better positioning)
    dot_radius = int(1.5 * scale_factor * (content_size / 32))
    dot_y = temp_padding + int(header_height / 2)
    dot_spacing = int(4 * scale_factor * (content_size / 32))
    start_x = temp_padding + int(6 * scale_factor * (content_size / 32))
    
    for i in range(3):
        dot_x = start_x + (i * dot_spacing)
        draw.ellipse([dot_x - dot_radius, dot_y - dot_radius,
                     dot_x + dot_radius, dot_y + dot_radius], fill=white_color)
    
    # Terminal prompt ">" symbol with smooth lines
    chevron_width = int(2.5 * scale_factor * (content_size / 32))
    chevron_y_center = temp_padding + int(18 * scale_factor * (content_size / 32))
    chevron_x_start = temp_padding + int(8 * scale_factor * (content_size / 32))
    chevron_size = int(4 * scale_factor * (content_size / 32))
    
    # Draw chevron with anti-aliased lines
    points = [
        (chevron_x_start, chevron_y_center - chevron_size),
        (chevron_x_start + chevron_size, chevron_y_center),
        (chevron_x_start, chevron_y_center + chevron_size)
    ]
    
    for i in range(len(points) - 1):
        x1, y1 = points[i]
        x2, y2 = points[i + 1]
        # Use line with proper width for better anti-aliasing
        draw.line([x1, y1, x2, y2], fill=white_color, width=chevron_width)
    
    # Terminal cursor line
    cursor_x = temp_padding + int(16 * scale_factor * (content_size / 32))
    cursor_y = temp_padding + int(19 * scale_factor * (content_size / 32))
    cursor_width = int(6 * scale_factor * (content_size / 32))
    cursor_height = int(2.5 * scale_factor * (content_size / 32))
    
    draw.rounded_rectangle([cursor_x, cursor_y, cursor_x + cursor_width, cursor_y + cursor_height],
                          radius=int(cursor_height / 2), fill=white_color)
    
    # Downsample for anti-aliasing
    final_img = temp_img.resize((size, size), Image.LANCZOS)
    return final_img

def create_maskable_icon(size=512):
    """Create maskable icon with safe zone for PWA"""
    safe_zone = int(size * 0.1)  # 10% safe zone
    
    # Create circular background
    img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # Draw circle background with gradient effect
    bg_color = (168, 85, 247, 255)
    draw.ellipse([safe_zone, safe_zone, size - safe_zone, size - safe_zone], fill=bg_color)
    
    # Create terminal icon at 70% size and center it
    terminal_size = int(size * 0.7)
    offset = (size - terminal_size) // 2
    
    terminal_img = create_high_quality_terminal_icon(terminal_size, padding_ratio=0.02)
    
    # Create a mask for the terminal icon to blend better
    mask = Image.new('L', (terminal_size, terminal_size), 0)
    mask_draw = ImageDraw.Draw(mask)
    mask_draw.ellipse([0, 0, terminal_size, terminal_size], fill=255)
    
    # Paste with soft edges
    img.paste(terminal_img, (offset, offset), terminal_img)
    
    return img

def generate_required_icons():
    """Generate only the necessary PNG icons"""
    print("Generating high-quality PNG icons...")
    
    # Apple Touch Icon (180x180) - Required for iOS
    apple_icon = create_high_quality_terminal_icon(180, padding_ratio=0.08)
    apple_icon.save('public/apple-touch-icon.png', 'PNG', optimize=True)
    print("✓ Created public/apple-touch-icon.png (180x180)")
    
    # PWA Icons
    icon_192 = create_high_quality_terminal_icon(192, padding_ratio=0.08)
    icon_192.save('public/icon-192x192.png', 'PNG', optimize=True)
    print("✓ Created public/icon-192x192.png (192x192)")
    
    icon_512 = create_high_quality_terminal_icon(512, padding_ratio=0.08)
    icon_512.save('public/icon-512x512.png', 'PNG', optimize=True)
    print("✓ Created public/icon-512x512.png (512x512)")
    
    # Maskable icon for better PWA support
    maskable = create_maskable_icon(512)
    maskable.save('public/icon-maskable-512x512.png', 'PNG', optimize=True)
    print("✓ Created public/icon-maskable-512x512.png (maskable)")
    
    print("\n🎉 All high-quality PNG icons generated!")
    print("📝 SVG favicon (/favicon.svg) remains the primary favicon for optimal quality")

if __name__ == "__main__":
    generate_required_icons()
