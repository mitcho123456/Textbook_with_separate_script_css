#!/usr/bin/env python3
"""
Script to create a print-ready HTML file with embedded CSS and cover image
"""

import base64
import os

# File paths
html_file = 'complete_medical_textbook.html'
css_file = 'medical-textbook-styles.css'
cover_image = 'BTInterpretation.png'
output_file = 'complete_medical_textbook_print.html'

# Read the original HTML
with open(html_file, 'r', encoding='utf-8') as f:
    html_content = f.read()

# Read the CSS
with open(css_file, 'r', encoding='utf-8') as f:
    css_content = f.read()

# Encode the cover image as base64
with open(cover_image, 'rb') as f:
    cover_image_data = base64.b64encode(f.read()).decode('utf-8')
    cover_image_base64 = f'data:image/png;base64,{cover_image_data}'

# Enhanced CSS for print with color preservation
print_css_additions = """
/* Enhanced Print Styles for Publisher-Grade PDF */
* {
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
    color-adjust: exact !important;
}

@page {
    size: A4 portrait;
    margin: 20mm;
}

@page:first {
    margin: 0;
}

body {
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
}

.cover-page {
    width: 100%;
    height: 100vh;
    page-break-after: always;
    margin: 0;
    padding: 0;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
}

.cover-page img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

/* Force all gradients and colors to print */
.clinical-pearl,
.page-header,
.section-icon,
.reference-range-table th,
.critical-values,
.parameter-card.critical,
.risk-factor {
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
    color-adjust: exact !important;
}

/* Ensure text is always visible on colored backgrounds */
.clinical-pearl,
.clinical-pearl h3,
.clinical-pearl p,
.clinical-pearl ul,
.clinical-pearl li {
    color: white !important;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
}

.page-header,
.page-header h1,
.page-header .subtitle {
    color: white !important;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
}

.reference-range-table th {
    color: white !important;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
}

.critical-values,
.critical-values h3,
.critical-values p,
.critical-values ul,
.critical-values li {
    color: white !important;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
}

/* Print-specific adjustments */
@media print {
    .cover-page {
        page-break-after: always;
    }

    .book-cover {
        display: none !important;
    }

    .download-btn {
        display: none !important;
    }

    .section {
        page-break-inside: avoid;
    }

    .clinical-pearl {
        page-break-inside: avoid;
    }
}
"""

# Create the new HTML with embedded CSS and cover image
new_html = f"""<!DOCTYPE html>
<!-- Created by Dr Michael Banovic MBBS MSc IM(Edin) MRCGP -->
<!-- Print-ready version with embedded styles and cover image -->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blood Test Interpretation for Primary Care - Complete Medical Textbook</title>
    <meta name="author" content="Dr Michael Banovic MBBS MSc IM(Edin) MRCGP">
    <style>
/* External CSS from medical-textbook-styles.css */
{css_content}

/* Additional print enhancements */
{print_css_additions}
    </style>
</head>
<body>

<!-- COVER PAGE WITH IMAGE -->
<div class="cover-page">
    <img src="{cover_image_base64}" alt="Blood Test Interpretation Cover" />
</div>

"""

# Find where the body starts in the original HTML and extract content after <body>
body_start = html_content.find('<body>')
body_end = html_content.find('</body>')

if body_start != -1 and body_end != -1:
    body_content = html_content[body_start + 6:body_end].strip()

    # Remove the old book cover section
    if '<!-- BOOK COVER -->' in body_content:
        cover_start = body_content.find('<!-- BOOK COVER -->')
        cover_end = body_content.find('</div>', cover_start)
        if cover_end != -1:
            # Find the complete closing div
            cover_section = body_content[cover_start:cover_end + 6]
            body_content = body_content.replace(cover_section, '')

    new_html += body_content

new_html += """
</body>
</html>
"""

# Write the new HTML file
with open(output_file, 'w', encoding='utf-8') as f:
    f.write(new_html)

print(f"Created {output_file} successfully!")
print(f"- Embedded CSS from {css_file}")
print(f"- Embedded cover image from {cover_image}")
print(f"- Added print color preservation rules")
print(f"File size: {len(new_html)} bytes")
