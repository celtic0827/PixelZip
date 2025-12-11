import JSZip from 'jszip';

export const generateId = () => Math.random().toString(36).substr(2, 9);

// Robust JSZip initialization for different ESM environments
export const getZip = () => {
  if (typeof JSZip === 'function') {
    return new JSZip();
  } else if ((JSZip as any).default && typeof (JSZip as any).default === 'function') {
    return new (JSZip as any).default();
  }
  throw new Error("JSZip could not be initialized");
};