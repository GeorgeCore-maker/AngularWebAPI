# 🚀 Angular Employee Management System

Sistema completo de gestión de empleados con Angular 18 y .NET Core 8.

## 🌐 **DEMO EN VIVO**
👉 **https://georgecore-maker.github.io/AngularWebAPI/**

## ✨ Características

### Frontend (Angular 18)
- ✅ CRUD completo de empleados
- ✅ Subida de fotos con vista previa
- ✅ Interfaz moderna con PrimeNG 17
- ✅ Responsive design
- ✅ Modo demo funcional
- ✅ Validaciones y notificaciones

### Backend (.NET Core 8)
- ✅ Web API REST completa
- ✅ Entity Framework Core
- ✅ Swagger para documentación
- ✅ CORS configurado
- ✅ Docker ready

## 🛠️ Desarrollo Local

### Prerrequisitos
- Node.js 18+
- .NET 8 SDK
- SQL Server (para backend)

### Frontend
```bash
cd UI
npm install
npm start
# http://localhost:4200
```

### Backend
```bash
cd BackendCore
dotnet run
# https://localhost:7000/swagger
```

## 📁 Estructura del Proyecto

```
AngularWebAPI/
├── UI/                    # Frontend Angular 18
├── BackendCore/          # Backend .NET Core 8
├── Database/             # Scripts SQL
└── .github/workflows/    # GitHub Actions
```

## 🚀 Deployment

### Frontend
- **Automático:** GitHub Actions → GitHub Pages
- **URL:** https://georgecore-maker.github.io/AngularWebAPI/

### Backend (Railway - 5 minutos)
1. Ve a [railway.app](https://railway.app) y conecta GitHub
2. Deploy desde `BackendCore/`
3. Actualizar `UI/src/environments/environment.prod.ts` con la URL

---

**🎯 El sistema está 100% funcional en modo demo. Para conectar con base de datos real, deployar el backend siguiendo la guía en `RAILWAY_BACKEND_DEPLOY.md`**
