# 🏢 Employee Management System

**Sistema completo de gestión de empleados y departamentos** con Angular 18, Web API ASP.NET y SQL Server.

[![Angular](https://img.shields.io/badge/Angular-18-red?logo=angular)](https://angular.io/)
[![ASP.NET](https://img.shields.io/badge/ASP.NET-Web_API-blue?logo=dotnet)](https://dotnet.microsoft.com/)
[![SQL Server](https://img.shields.io/badge/SQL_Server-Database-orange?logo=microsoftsqlserver)](https://www.microsoft.com/sql-server/)
[![PrimeNG](https://img.shields.io/badge/PrimeNG-17-green?logo=primeng)](https://primeng.org/)

## 🎯 Descripción

Sistema full-stack para la administración de empleados y departamentos empresariales, con interfaz moderna y funcionalidades completas de CRUD, incluyendo manejo de fotografías y reportes.

### ✨ Características Principales

- 👥 **Gestión de Empleados**: CRUD completo con fotos de perfil
- 🏢 **Gestión de Departamentos**: Administración de departamentos organizacionales  
- 📸 **Subida de Imágenes**: Sistema de carga y visualización de fotos
- 📊 **Interfaz Moderna**: UI responsive con PrimeNG y PrimeFlex
- 🔒 **API RESTful**: Backend robusto con Web API ASP.NET
- 💾 **Base de Datos**: Almacenamiento en SQL Server

## 🏗️ Arquitectura del Proyecto

```
AngularWebAPI/
├── 🎨 UI/                     # Frontend Angular 18
│   ├── src/app/
│   │   ├── department/        # Módulo de departamentos
│   │   ├── employee/          # Módulo de empleados
│   │   ├── shared.service.ts  # Servicios HTTP
│   │   └── prime.module.ts    # Componentes PrimeNG
│   └── package.json
│
└── 🚀 WebAPI/                 # Backend ASP.NET
    ├── WebApplication1/
    │   ├── Controllers/       # Controladores API
    │   ├── Models/           # Modelos de datos
    │   ├── Photos/           # Almacenamiento de imágenes
    │   └── Web.config        # Configuración
    └── WebApplication1.sln
```

## 🚀 Inicio Rápido

### 📋 Prerrequisitos

- **Node.js** 18+ y **npm**
- **Visual Studio** 2019+ o **Visual Studio Code**
- **SQL Server** (Express/LocalDB suficiente)
- **Angular CLI** 18+

### ⚡ Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <url-repositorio>
   cd AngularWebAPI
   ```

2. **Configurar Backend (WebAPI)**
   ```bash
   cd WebAPI
   # Abrir WebApplication1.sln en Visual Studio
   # Configurar cadena de conexión en Web.config
   # Ejecutar/Debug (F5)
   ```

3. **Configurar Frontend (Angular)**
   ```bash
   cd UI
   npm install
   ng serve
   ```

4. **Acceder a la aplicación**
   - Frontend: `http://localhost:4200`
   - API: `http://localhost:61962/api`

## 🎛️ Configuración

### 🔗 Conexión API

Verificar URLs en `UI/src/app/shared.service.ts`:
```typescript
readonly apiUrl = 'http://localhost:61962/api/';
readonly PhotoURL = 'http://localhost:61962/Photos/';
```

### 🗄️ Base de Datos

Configurar cadena de conexión en `WebAPI/WebApplication1/Web.config`:
```xml
<connectionStrings>
  <add name="DefaultConnection" 
       connectionString="Data Source=.;Initial Catalog=EmployeeDB;Integrated Security=True"
       providerName="System.Data.SqlClient" />
</connectionStrings>
```

## 📱 Funcionalidades

### 🏢 Módulo Departamentos
- ✅ Listar departamentos en tabla
- ✅ Crear nuevos departamentos
- ✅ Editar departamentos existentes
- ✅ Eliminar con confirmación
- ✅ Búsqueda y filtrado

### 👤 Módulo Empleados  
- ✅ Lista con fotos y información
- ✅ Formulario completo de empleado
- ✅ Subida y preview de fotos
- ✅ Selector de departamento
- ✅ Calendario para fecha de ingreso
- ✅ Validaciones de formulario

### 📊 Características Técnicas
- ✅ Componentes standalone Angular
- ✅ Reactive Forms con validación
- ✅ HTTP Interceptors
- ✅ Manejo de errores global
- ✅ Responsive design
- ✅ Toast notifications
- ✅ Modal dialogs
- ✅ File upload

## 🛠️ Tecnologías Utilizadas

### Frontend
- **Angular 18** - Framework SPA
- **TypeScript** - Lenguaje principal  
- **PrimeNG 17** - Componentes UI
- **PrimeFlex** - CSS Utilities
- **SCSS** - Preprocesador CSS
- **RxJS** - Programación reactiva

### Backend  
- **ASP.NET Web API** - API RESTful
- **C#** - Lenguaje servidor
- **Entity Framework** - ORM
- **SQL Server** - Base de datos
- **IIS Express** - Servidor desarrollo

## 🔄 API Endpoints

### 🏢 Departamentos
```http
GET    /api/Department              # Listar
POST   /api/Department              # Crear
PUT    /api/Department              # Actualizar  
DELETE /api/Department/{id}         # Eliminar
```

### 👤 Empleados
```http
GET    /api/Employee                # Listar
POST   /api/Employee                # Crear
PUT    /api/Employee                # Actualizar
DELETE /api/Employee/{id}           # Eliminar
POST   /api/Employee/SaveFile       # Subir foto
```

## 📁 Estructura de Datos

### Departamento
```json
{
  "DepartmentId": 1,
  "DepartmentName": "Recursos Humanos"
}
```

### Empleado
```json
{
  "EmployeeId": 1,
  "EmployeeName": "Juan Pérez",
  "Department": 1,
  "DateOfJoining": "2024-01-15",
  "PhotoFileName": "juan_perez.jpg"
}
```

## 🎨 Capturas de Pantalla

### 📋 Lista de Empleados
- Tabla responsive con fotos
- Acciones de editar/eliminar
- Botón crear nuevo empleado

### ✏️ Modal de Empleado
- Formulario completo
- Subida de foto con preview
- Validaciones en tiempo real
- Calendario para fechas

### 🏢 Gestión de Departamentos
- CRUD completo
- Confirmaciones de eliminación
- Feedback visual con toasts

## 🤝 Contribuir

1. **Fork** el proyecto
2. **Crear rama** feature (`git checkout -b feature/nueva-funcionalidad`)
3. **Commit** cambios (`git commit -m 'Agregar funcionalidad X'`)
4. **Push** rama (`git push origin feature/nueva-funcionalidad`)
5. **Abrir** Pull Request

## 📝 Scripts Útiles

### Frontend (UI/)
```bash
ng serve                # Servidor desarrollo
ng build               # Build producción  
ng test                # Pruebas unitarias
ng generate component  # Generar componente
```

### Backend (WebAPI/)
```bash
# En Visual Studio:
F5                     # Ejecutar/Debug
Ctrl+F5               # Ejecutar sin debug
```

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT**. Ver [LICENSE](LICENSE) para más detalles.

## 📞 Contacto

- **Proyecto**: Employee Management System
- **Tecnologías**: Angular 18 + ASP.NET Web API
- **Estado**: ✅ Funcional y completo

---

⭐ **¡Dale una estrella si te gusta el proyecto!** ⭐
