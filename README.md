# 💻 Frontend - App de Gestión de Materiales

Este proyecto frontend fue desarrollado en **Angular 17+** y permite gestionar materiales, ciudades y departamentos. Se conecta a una API REST en Spring Boot ubicada en `http://localhost:8080`.

---

## 🚀 Requisitos Previos

- ✅ Node.js 18+
- ✅ Angular CLI instalado globalmente

```bash
npm install -g @angular/cli
```

---

## ⚙️ Instalación y Ejecución

1. Clona este repositorio o descarga el código.
2. Abre una terminal en la raíz del proyecto frontend.
3. Ejecuta:

```bash
npm install
ng serve --open
```

Esto abrirá automáticamente la aplicación en el navegador:

```
http://localhost:4200
```

---

## 🌐 Conexión al Backend

Para que la aplicación funcione correctamente, el backend debe estar corriendo en:

```
http://localhost:8080
```

Puedes iniciarlo desde la carpeta del backend con:

```bash
mvn spring-boot:run
```

---

## 🧭 Navegación en la App

El sistema incluye un menú de navegación con rutas:

- `/materiales` → gestión de materiales
- `/ciudades` → gestión de ciudades
- `/departamentos` → gestión de departamentos

---

## 🧪 Pruebas con Postman

El frontend se conecta a una API REST documentada.

Para probar los endpoints desde Postman:

1. Abre Postman
2. Importa la colección Postman del backend:
3. Realiza pruebas para crear y listar:

- Materiales
- Ciudades
- Departamentos

---

## 🎨 Estilos y Diseño

- Utiliza **Bootstrap 5** para formularios y tablas
- SweetAlert2 para mostrar notificaciones visuales
- Navegación moderna con barra superior (`navbar`)

---

## 🧩 Estructura del Proyecto

```
src/
├── app/
│   ├── models/              ← Clases TS: Material, Ciudad, Departamento
│   ├── services/            ← Servicios Angular para conectarse a la API
│   ├── pages/
│   │   ├── materiales/      ← Formulario + listado de materiales
│   │   ├── ciudades/        ← Formulario + listado de ciudades
│   │   └── departamentos/   ← Formulario + listado de departamentos
│   ├── app.module.ts        ← Módulo principal
│   ├── app.component.ts     ← Componente raíz
│   └── app.component.html   ← Plantilla con navbar + router
```

---

## 📦 Tecnologías Utilizadas

- Angular 17+
- Bootstrap 5
- TypeScript
- RxJS + HttpClient
- SweetAlert2

---

## 🤝 Integración completa con el backend

Esta app se comunica completamente con la API del backend Spring Boot en:

```
http://localhost:8080/api
```

Se recomienda probar primero:

1. `POST /departamentos`
2. `POST /ciudades` (asociadas a un departamento creado)
3. `POST /materiales` (asociados a una ciudad creada)

---

## ✅ Autor

Desarrollado por Yurley Loaiza
