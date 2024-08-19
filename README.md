# Encriptador de Texto

Este proyecto es una aplicación web que permite encriptar y desencriptar textos basados en reglas simples de sustitución de caracteres. La aplicación también permite copiar el texto encriptado o desencriptado al portapapeles.

## Características

- **Encriptar**: Convierte texto ingresado en una versión encriptada usando las siguientes reglas de reemplazo:
  - `e` → `enter`
  - `i` → `imes`
  - `a` → `ai`
  - `o` → `ober`
  - `u` → `ufat`

- **Desencriptar**: Convierte un texto previamente encriptado a su versión original.

- **Validaciones**:
  - Solo se aceptan letras minúsculas sin acentos ni caracteres especiales.
  - Se muestran mensajes de advertencia si el texto ingresado no cumple con estas condiciones.

- **Copiar al portapapeles**: Permite copiar el texto encriptado o desencriptado.

## Estructura del Proyecto

- `index.html`: Contiene la estructura HTML de la aplicación.
- `css/styles.css`: Define el estilo visual de la aplicación.
- `script.js`: Contiene la lógica de encriptación, desencriptación, y manejo de eventos.

## Uso

### Encriptar Texto

1. Ingrese el texto que desea encriptar en el área de texto.
2. Haga clic en el botón "Encriptar".
3. El texto encriptado aparecerá en el área de resultados.

### Desencriptar Texto

1. Ingrese el texto que desea desencriptar en el área de texto.
2. Haga clic en el botón "Desencriptar".
3. El texto desencriptado aparecerá en el área de resultados.

### Copiar Texto

1. Después de encriptar o desencriptar un texto, haga clic en el botón "Copiar" para copiar el resultado al portapapeles.

## Requisitos

- Navegador web moderno que soporte JavaScript.
- Conexión a internet (para cargar las fuentes y los íconos desde la web).

## Créditos

- Desarrollado por Víctor Benítez.
- Iconos y gráficos proporcionados por Alura.
- Tutorial seguido de OTorresDev en [YouTube](https://www.youtube.com/watch?v=Va3C3b-D-pg).
- Se uso asistencia de chatgpt.
