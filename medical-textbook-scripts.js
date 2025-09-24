/* Medical Textbook JavaScript - Universal JS for All Chapters */

// PDF Download functionality with proper print formatting
function downloadPDF() {
    // Hide the download button temporarily for clean PDF
    const downloadBtn = document.querySelector('.download-btn');
    const originalDisplay = downloadBtn.style.display;
    downloadBtn.style.display = 'none';
    
    // Add print-specific styles temporarily
    const printStyles = document.createElement('style');
    printStyles.media = 'print';
    printStyles.innerHTML = `
        /* Additional print optimizations */
        body { 
            font-size: 10pt !important; 
            line-height: 1.2 !important; 
        }
        
        .textbook-page { 
            transform: scale(0.95) !important; 
            transform-origin: top left !important; 
        }
        
        /* Compress spacing for better page utilization */
        .section { 
            margin-bottom: 15pt !important; 
        }
        
        .clinical-pearl { 
            margin: 8pt 0 !important; 
            padding: 10pt !important; 
        }
        
        .visual-element { 
            margin: 8pt 0 !important; 
            padding: 10pt !important; 
        }
        
        /* Better table formatting */
        .reference-range-table th, 
        .reference-range-table td { 
            padding: 3pt 5pt !important; 
            font-size: 8pt !important; 
        }
        
        /* Optimize grid layouts */
        .interpretation-item, 
        .parameter-card, 
        .risk-factor { 
            padding: 6pt !important; 
            margin-bottom: 6pt !important; 
            font-size: 9pt !important; 
        }
    `;
    
    document.head.appendChild(printStyles);
    
    // Set page title for PDF
    const originalTitle = document.title;
    const chapterTitle = document.querySelector('.page-header h1').textContent;
    document.title = chapterTitle + ' - Medical Textbook';
    
    // Trigger print dialog
    window.print();
    
    // Restore original state after print dialog
    setTimeout(() => {
        downloadBtn.style.display = originalDisplay;
        document.head.removeChild(printStyles);
        document.title = originalTitle;
    }, 1000);
}

// Table of contents generator (if needed for longer chapters)
function generateTableOfContents() {
    const sections = document.querySelectorAll('.section h2');
    const tocContainer = document.createElement('div');
    tocContainer.className = 'table-of-contents';
    tocContainer.innerHTML = '<h3>Chapter Contents</h3>';
    
    const tocList = document.createElement('ul');
    
    sections.forEach((section, index) => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        
        // Create anchor ID if it doesn't exist
        if (!section.parentElement.id) {
            section.parentElement.id = `section-${index + 1}`;
        }
        
        link.href = `#${section.parentElement.id}`;
        link.textContent = section.textContent;
        link.style.textDecoration = 'none';
        link.style.color = '#3498db';
        
        listItem.appendChild(link);
        tocList.appendChild(listItem);
    });
    
    tocContainer.appendChild(tocList);
    return tocContainer;
}

// Highlight search functionality for long documents
function highlightText(searchTerm) {
    const walker = document.createTreeWalker(
        document.querySelector('.content'),
        NodeFilter.SHOW_TEXT,
        null,
        false
    );
    
    const textNodes = [];
    let node;
    
    while (node = walker.nextNode()) {
        textNodes.push(node);
    }
    
    // Remove existing highlights
    document.querySelectorAll('.highlight').forEach(el => {
        el.outerHTML = el.innerHTML;
    });
    
    if (!searchTerm.trim()) return;
    
    textNodes.forEach(textNode => {
        const text = textNode.textContent;
        const regex = new RegExp(`(${searchTerm})`, 'gi');
        
        if (regex.test(text)) {
            const highlightedText = text.replace(regex, '<span class="highlight" style="background-color: yellow; padding: 2px;">$1</span>');
            const wrapper = document.createElement('div');
            wrapper.innerHTML = highlightedText;
            textNode.parentNode.replaceChild(wrapper, textNode);
            wrapper.outerHTML = wrapper.innerHTML;
        }
    });
}

// Print preparation function
function preparePrintVersion() {
    // Add page break classes strategically
    const sections = document.querySelectorAll('.section');
    const sectionsPerPage = Math.ceil(sections.length / 3); // Aim for 3 pages
    
    sections.forEach((section, index) => {
        if (index > 0 && index % sectionsPerPage === 0) {
            section.classList.add('page-break-before');
        }
    });
    
    // Optimize images for print
    document.querySelectorAll('img').forEach(img => {
        img.style.maxWidth = '100%';
        img.style.height = 'auto';
    });
}

// Initialize chapter functionality
function initializeChapter() {
    // Prepare print version on load
    preparePrintVersion();
    
    // Add smooth scrolling to anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Ctrl/Cmd + P for print
        if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
            e.preventDefault();
            downloadPDF();
        }
        
        // Ctrl/Cmd + F for find (enhanced)
        if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
            // Browser's native search will handle this
            return true;
        }
    });
}

// Mobile responsiveness enhancements
function handleMobileView() {
    const isMobile = window.innerWidth <= 768;
    const downloadBtn = document.querySelector('.download-btn');
    
    if (isMobile) {
        // Move download button to bottom on mobile
        downloadBtn.style.position = 'relative';
        downloadBtn.style.margin = '20px auto';
        downloadBtn.style.display = 'flex';
        downloadBtn.style.justifyContent = 'center';
        
        // Append to content area
        const content = document.querySelector('.content');
        content.appendChild(downloadBtn);
    }
}

// Enhanced print styles injection
function injectPrintOptimizations() {
    const style = document.createElement('style');
    style.media = 'print';
    style.innerHTML = `
        @page {
            margin: 0.5in;
            size: A4 portrait;
        }
        
        /* Ensure content fits within page margins */
        .content {
            max-width: 100% !important;
            margin: 0 !important;
            padding: 10pt !important;
        }
        
        /* Optimize font sizes for readability */
        h1 { font-size: 18pt !important; }
        h2 { font-size: 14pt !important; }
        h3 { font-size: 12pt !important; }
        h4 { font-size: 11pt !important; }
        p, li, td { font-size: 9pt !important; }
        
        /* Prevent orphans and widows */
        p { orphans: 3; widows: 3; }
        
        /* Better table handling */
        table { 
            page-break-inside: avoid; 
            font-size: 8pt !important;
        }
        
        /* Optimize visual elements */
        .visual-element {
            page-break-inside: avoid;
            margin: 6pt 0 !important;
        }
        
        /* Clinical pearls optimization */
        .clinical-pearl {
            page-break-inside: avoid;
            margin: 6pt 0 !important;
            padding: 8pt !important;
        }
    `;
    
    document.head.appendChild(style);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeChapter();
    injectPrintOptimizations();
    
    // Handle window resize for mobile
    window.addEventListener('resize', handleMobileView);
    handleMobileView(); // Initial check
    
    // Add loading state for images
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
    });
});

// Export functions for external use if needed
window.MedicalTextbook = {
    downloadPDF: downloadPDF,
    highlightText: highlightText,
    generateTableOfContents: generateTableOfContents,
    preparePrintVersion: preparePrintVersion
};
