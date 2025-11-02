// src/lib/cms.js

import { promises as fs } from 'fs';
import path from 'path';

/**
 * Obtiene los datos de la página de inicio desde el mock del CMS.
 * En un proyecto real, esta función haría una llamada a una API (ej. fetch).
 * @returns {Promise<object>} Los datos parseados del archivo JSON.
 */
export async function getHomepageData() {
  // Construye la ruta al archivo JSON de forma segura.
  const filePath = path.join(process.cwd(), 'mocks', 'cms', 'homepage.json');
  
  // Lee el contenido del archivo.
  const fileContent = await fs.readFile(filePath, 'utf8');
  
  // Parsea el contenido JSON a un objeto de JavaScript.
  const data = JSON.parse(fileContent);
  
  return data;
}