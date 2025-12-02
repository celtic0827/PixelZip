# PNG2JPG BatchBox

**High-Performance Client-Side Image Conversion Container**

PNG2JPG BatchBox is a secure, browser-based tool designed to batch convert PNG images to JPG format and bundle them into a single ZIP archive. 

## Features

*   **Zero-Upload Privacy:** All image processing happens locally in your browser. No files are ever sent to a server.
*   **Batch Processing:** Convert multiple files simultaneously with a high-tech dashboard interface.
*   **Smart ZIP Bundling:** Automatically packages converted files into a flat ZIP archive (no nested directories) for immediate use.
*   **Customization:**
    *   Adjust JPG Quality (compression level).
    *   Set Matte Color (fill color for transparency replacement).
*   **Cyberpunk UI:** Dark mode interface with neon accents and "glassmorphism" effects.

## Tech Stack

*   **Core:** React 19, TypeScript
*   **Styling:** Tailwind CSS (Custom Cyberpunk Theme)
*   **Processing:** Native Canvas API for image conversion
*   **Compression:** JSZip for archiving
*   **Icons:** Lucide React

## Usage

1.  **Input:** Drag and drop PNG files into the "Drop Zone" or click to browse.
2.  **Configure:** Adjust the **Quality** slider and select a **Matte Color** for transparency replacement in the Control Panel.
3.  **Execute:** Click **Execute Batch** to process images.
4.  **Export:** Once complete, click **Export ZIP Archive** to download your converted images.
