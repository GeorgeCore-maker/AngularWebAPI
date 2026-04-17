# 👥 Employee Management Portal

Sistema de gestión de empleados y departamentos desarrollado con **Angular 18** y **PrimeNG**, conectado a una Web API ASP.NET con SQL Server.

## 🎯 Objetivo

Este frontend permite la administración completa de empleados y departamentos de una empresa, proporcionando una interfaz moderna, intuitiva y responsive para:

- ✅ **Gestión de Departamentos**: Crear, editar, eliminar y listar departamentos
- ✅ **Gestión de Empleados**: CRUD completo con información detallada
- ✅ **Subida de Fotos**: Carga y visualización de fotos de perfil
- ✅ **Interfaz Moderna**: Diseño responsive con componentes PrimeNG
- ✅ **Validaciones**: Formularios reactivos con validación en tiempo real

## 🛠️ Tecnologías Utilizadas

- **Angular 18** - Framework principal
- **PrimeNG 17** - Biblioteca de componentes UI
- **PrimeFlex** - Sistema de utilidades CSS
- **TypeScript** - Lenguaje de programación
- **SCSS** - Preprocesador CSS
- **Standalone Components** - Arquitectura moderna de Angular

## 📋 Características

### 🏢 Módulo de Departamentos
- Lista de departamentos en tabla interactiva
- Modal para crear/editar departamentos
- Confirmación de eliminación
- Notificaciones toast para feedback

### 👤 Módulo de Empleados
- Tabla con foto de perfil, información y acciones
- Modal avanzado con:
  - Subida de fotos con preview
  - Selector de fecha (calendario compacto)
  - Dropdown de departamentos
  - Validaciones de formulario
- Gestión de imágenes cuadradas con avatar por defecto

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js (versión 18 o superior)
- Angular CLI 18.2.21
- Servidor Web API ejecutándose en `http://localhost:61962`

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd AngularWebAPI/UI
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar la conexión API**
   Verificar que las URLs en `src/app/shared.service.ts` sean correctas:
   ```typescript
   readonly apiUrl = 'http://localhost:61962/api/';
   readonly PhotoURL = 'http://localhost:61962/Photos/';
   ```

4. **Ejecutar en desarrollo**
   ```bash
   ng serve
   ```
   Navegar a `http://localhost:4200`

## 📁 Estructura del Proyecto

```
src/app/
├── department/                 # Módulo de departamentos
│   ├── department.component.*  # Lista y gestión de departamentos
│   └── show-department/        # Modal crear/editar departamento
├── employee/                   # Módulo de empleados
│   ├── employee.component.*    # Lista y gestión de empleados
│   └── show-employee/          # Modal crear/editar empleado
├── shared.service.ts          # Servicio HTTP compartido
├── prime.module.ts            # Módulo de componentes PrimeNG
└── app.component.*            # Componente principal con navegación
```

## 🔧 Scripts Disponibles

```bash
# Servidor de desarrollo
ng serve

# Compilar para producción
ng build

# Ejecutar pruebas unitarias
ng test

# Generar componente
ng generate component nombre-componente

# Verificar código
ng lint
```

## 📡 API Endpoints Utilizados

### Departamentos
- `GET /api/Department` - Listar departamentos
- `POST /api/Department` - Crear departamento
- `PUT /api/Department` - Actualizar departamento
- `DELETE /api/Department/{id}` - Eliminar departamento

### Empleados
- `GET /api/Employee` - Listar empleados
- `POST /api/Employee` - Crear empleado
- `PUT /api/Employee` - Actualizar empleado
- `DELETE /api/Employee/{id}` - Eliminar empleado
- `POST /api/Employee/SaveFile` - Subir foto de empleado

## 🎨 Características de UI/UX

- **Responsive Design**: Adaptable a móviles, tablets y desktop
- **Tema Moderno**: Colores y tipografía profesional
- **Componentes Interactivos**: Tablas, modales, calendarios, dropdowns
- **Feedback Visual**: Toasts, confirmaciones, estados de carga
- **Accesibilidad**: Navegación por teclado y lectores de pantalla

## 🔄 Flujo de Trabajo

1. **Departamentos**: Crear departamentos antes de asignar empleados
2. **Empleados**: Crear empleados seleccionando departamento existente
3. **Fotos**: Subir fotos opcionales (máx. 1MB, formatos de imagen)
4. **Edición**: Modificar información mediante modales intuitivos
5. **Eliminación**: Confirmación antes de eliminar registros

## 📝 Notas de Desarrollo

- **Arquitectura**: Componentes standalone sin NgModules
- **Estado**: Gestión local de estado con servicios
- **Styling**: SCSS con variables globales y componentes modulares
- **Validación**: Reactive forms con validadores personalizados
- **HTTP**: Interceptores para manejo de errores y loading

## 🤝 Contribución

1. Fork el proyecto
2. Crear rama feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abrir Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.
