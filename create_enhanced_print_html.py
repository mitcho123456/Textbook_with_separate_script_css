#!/usr/bin/env python3
"""
Enhanced script to create a print-ready HTML with maximum color preservation
"""

import base64
import os

# File paths
html_file = 'complete_medical_textbook.html'
css_file = 'medical-textbook-styles.css'
cover_image = 'BTInterpretation.png'
output_file = 'complete_medical_textbook_print_enhanced.html'

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

# Maximum color preservation CSS
enhanced_print_css = """
/* Maximum Color Preservation for Print */
html, body, * {
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
    color-adjust: exact !important;
}

@page {
    size: A4 portrait;
    margin: 15mm;
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
    height: 297mm; /* A4 height */
    page-break-after: always;
    margin: 0;
    padding: 0;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.cover-page img {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    object-fit: contain;
}

/* Clinical Pearls - Maximum Visibility */
.clinical-pearl {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%) !important;
    background-color: #f5576c !important; /* Fallback */
    color: white !important;
    padding: 20px !important;
    padding-left: 60px !important;
    border-radius: 10px !important;
    margin: 20px 0 !important;
    border-left: 5px solid #ffd700 !important;
    position: relative !important;
    page-break-inside: avoid !important;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
}

.clinical-pearl::before {
    content: "★" !important;
    position: absolute !important;
    top: 15px !important;
    left: 15px !important;
    background: #ffd700 !important;
    color: #8e44ad !important;
    border-radius: 50% !important;
    width: 35px !important;
    height: 35px !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    font-size: 1.5em !important;
    font-weight: bold !important;
    line-height: 35px !important;
    text-align: center !important;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
}

.clinical-pearl h3,
.clinical-pearl p,
.clinical-pearl ul,
.clinical-pearl li,
.clinical-pearl strong,
.clinical-pearl em {
    color: white !important;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
}

/* Page Header */
.page-header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
    background-color: #764ba2 !important; /* Fallback */
    color: white !important;
    padding: 30px !important;
    text-align: center !important;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
}

.page-header h1,
.page-header .subtitle,
.page-header * {
    color: white !important;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
}

/* Section Icons */
.section-icon {
    width: 40px !important;
    height: 40px !important;
    border-radius: 50% !important;
    background: linear-gradient(135deg, #3498db, #2980b9) !important;
    background-color: #2980b9 !important; /* Fallback */
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    margin-right: 15px !important;
    color: white !important;
    font-size: 1.2em !important;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
}

/* Reference Tables */
.reference-range-table th {
    background: linear-gradient(135deg, #3498db, #2980b9) !important;
    background-color: #2980b9 !important; /* Fallback */
    color: white !important;
    padding: 12px !important;
    text-align: left !important;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
}

.reference-range-table tr:nth-child(even) {
    background: #f8f9fa !important;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
}

/* Critical Values */
.critical-values {
    background: linear-gradient(135deg, #ff6b6b, #ee5a52) !important;
    background-color: #ee5a52 !important; /* Fallback */
    color: white !important;
    padding: 20px !important;
    border-radius: 10px !important;
    margin: 20px 0 !important;
    page-break-inside: avoid !important;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
}

.critical-values h3,
.critical-values p,
.critical-values ul,
.critical-values li,
.critical-values * {
    color: white !important;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
}

/* Risk Factors */
.risk-factor {
    background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%) !important;
    background-color: #fecfef !important; /* Fallback */
    padding: 15px !important;
    border-radius: 10px !important;
    text-align: center !important;
    color: #2c3e50 !important;
    font-weight: 500 !important;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
}

/* Red Flags */
.red-flag-item {
    background: #fff5f5 !important;
    border-left: 4px solid #e53e3e !important;
    border-radius: 5px !important;
    padding: 15px !important;
    padding-left: 50px !important;
    position: relative !important;
    page-break-inside: avoid !important;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
}

.red-flag-item::before {
    content: "▲" !important;
    position: absolute !important;
    top: 15px !important;
    left: 15px !important;
    font-size: 1.3em !important;
    color: #e53e3e !important;
    font-weight: bold !important;
}

/* Flow Steps */
.flow-step {
    background: white !important;
    border: 2px solid #3498db !important;
    border-radius: 10px !important;
    padding: 20px !important;
    position: relative !important;
    page-break-inside: avoid !important;
}

.flow-step::after {
    content: "↓" !important;
    position: absolute !important;
    bottom: -15px !important;
    left: 50% !important;
    transform: translateX(-50%) !important;
    background: #3498db !important;
    color: white !important;
    width: 30px !important;
    height: 30px !important;
    border-radius: 50% !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    font-weight: bold !important;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
}

.flow-step:last-child::after {
    display: none !important;
}

/* Highlight Boxes */
.highlight-box {
    background: #e8f4f8 !important;
    border: 1px solid #3498db !important;
    border-radius: 8px !important;
    padding: 15px !important;
    margin: 15px 0 !important;
    page-break-inside: avoid !important;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
}

/* Visual Elements */
.visual-element {
    background: #f8f9fa !important;
    border: 2px solid #e9ecef !important;
    border-radius: 10px !important;
    padding: 20px !important;
    margin: 20px 0 !important;
    text-align: center !important;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
}

/* References Section */
.references-section {
    background: #f8f9fa !important;
    border: 2px solid #e9ecef !important;
    border-radius: 10px !important;
    padding: 25px !important;
    margin: 30px 0 !important;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
}

/* Parameter Cards */
.parameter-card.critical {
    border-left-color: #8e44ad !important;
    background: linear-gradient(135deg, #ffeaa7, #fab1a0) !important;
    background-color: #fab1a0 !important; /* Fallback */
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
}

.parameter-card.normal {
    border-left-color: #27ae60 !important;
}

.parameter-card.abnormal-low {
    border-left-color: #3498db !important;
}

.parameter-card.abnormal-high {
    border-left-color: #e74c3c !important;
}

/* Print-specific adjustments */
@media print {
    .cover-page {
        page-break-after: always !important;
    }

    .book-cover {
        display: none !important;
    }

    .download-btn {
        display: none !important;
    }

    .section {
        page-break-inside: avoid !important;
    }

    .clinical-pearl {
        page-break-inside: avoid !important;
    }

    .critical-values {
        page-break-inside: avoid !important;
    }

    .red-flag-item {
        page-break-inside: avoid !important;
    }

    .flow-step {
        page-break-inside: avoid !important;
    }

    .highlight-box {
        page-break-inside: avoid !important;
    }
}
"""

# Create the new HTML
new_html = f"""<!DOCTYPE html>
<!-- Created by Dr Michael Banovic MBBS MSc IM(Edin) MRCGP -->
<!-- Enhanced print-ready version with maximum color preservation -->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blood Test Interpretation for Primary Care - Complete Medical Textbook</title>
    <meta name="author" content="Dr Michael Banovic MBBS MSc IM(Edin) MRCGP">
    <style>
/* External CSS from medical-textbook-styles.css */
{css_content}

/* Enhanced print styles with maximum color preservation */
{enhanced_print_css}
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
print(f"- Added ENHANCED print color preservation with fallback colors")
print(f"File size: {len(new_html)} bytes")
