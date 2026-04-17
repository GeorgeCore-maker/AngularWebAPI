# 🚀 Deployment Guide - Employee Management System

## 📋 Opciones de Deployment

### 1. 🌐 GitHub Pages (Frontend Only) - AUTOMÁTICO
El frontend se desplegará automáticamente en: `https://georgecore-maker.github.io/AngularWebAPI/`

**Configuración:**
- ✅ **Ya configurado** con GitHub Actions
- ✅ **Deploy automático** en cada push a `main`
- ✅ **URL pública** disponible para pruebas

### 2. 🔧 Backend Deployment Options

#### A) 🌊 Heroku (Recomendado para Demo)
```bash
# 1. Install Heroku CLI
# 2. Create Heroku app
heroku create your-employee-api

# 3. Add SQL Server add-on
heroku addons:create jawsdb-maria:kitefin

# 4. Deploy
git subtree push --prefix=WebAPI heroku main
```

#### B) ☁️ Azure App Service
```bash
# 1. Create App Service
az webapp create --resource-group myResourceGroup --plan myAppServicePlan --name your-employee-api

# 2. Deploy from GitHub
az webapp deployment source config --name your-employee-api --resource-group myResourceGroup --repo-url https://github.com/GeorgeCore-maker/AngularWebAPI --branch main --manual-integration
```

#### C) 🐳 Railway (Fácil y Rápido)
1. Conectar repo a Railway.app
2. Seleccionar carpeta `WebAPI`
3. Auto-deploy configurado

## 🔗 URLs de Producción

Una vez deployado el backend, actualizar:

**Frontend (Environment Production):**
```typescript
// UI/src/environments/environment.prod.ts
export const environment = {
  production: true,
  apiUrl: 'https://your-employee-api.herokuapp.com/api/',
  photoUrl: 'https://your-employee-api.herokuapp.com/Photos/'
};
```

## 🗄️ Base de Datos

### Opción 1: SQL Server en la Nube
- **Azure SQL Database**
- **AWS RDS SQL Server**
- **Google Cloud SQL**

### Opción 2: PostgreSQL (Con adaptación)
- **Heroku Postgres**
- **Railway PostgreSQL**
- **Supabase**

## 📝 Pasos para Deployment Completo

### 1. **Preparar el Repositorio**
```bash
cd C:\Users\USUARIO\Documents\AngularWebAPI
git init
git add .
git commit -m "Initial commit: Employee Management System"
git remote add origin https://github.com/GeorgeCore-maker/AngularWebAPI.git
git push -u origin main
```

### 2. **Activar GitHub Pages**
1. Ir a Settings > Pages
2. Source: GitHub Actions
3. El workflow ya está configurado

### 3. **Configurar Backend**
Elegir una de las opciones arriba y seguir los pasos específicos.

### 4. **Configurar Base de Datos**
```sql
-- Ejecutar setup-database.sql en tu servidor de BD
-- O usar el script de migración automática
```

### 5. **Actualizar URLs**
- Actualizar `environment.prod.ts` con URLs reales
- Hacer push para re-deployar

## 🌍 URLs Finales

### Frontend (GitHub Pages)
```
https://georgecore-maker.github.io/AngularWebAPI/
```

### Backend (Ejemplo con Heroku)
```
https://your-employee-api.herokuapp.com/api/
```

### Base de Datos
```
Conexión configurada en Web.config del backend
```

## 🔧 Troubleshooting

### Error CORS
Agregar en Web.config del API:
```xml
<system.webServer>
  <httpProtocol>
    <customHeaders>
      <add name="Access-Control-Allow-Origin" value="https://georgecore-maker.github.io" />
      <add name="Access-Control-Allow-Methods" value="GET,POST,PUT,DELETE,OPTIONS" />
      <add name="Access-Control-Allow-Headers" value="Content-Type" />
    </customHeaders>
  </httpProtocol>
</system.webServer>
```

### Error de Conexión BD
- Verificar connection string
- Verificar firewall del servidor
- Verificar permisos de usuario

### Error 404 en Angular
- Verificar base-href en build
- Configurar redirect rules en servidor

## 📱 Testing URLs

Una vez deployado, las URLs serán:

**🎨 Frontend:**
- Producción: `https://georgecore-maker.github.io/AngularWebAPI/`
- Preview: Se actualiza automáticamente con cada commit

**🚀 Backend:**
- Depende del servicio elegido
- Ejemplo: `https://your-app-name.herokuapp.com/`

**📊 API Endpoints:**
- Departments: `{backend_url}/api/Department`
- Employees: `{backend_url}/api/Employee`
- Upload: `{backend_url}/api/Employee/SaveFile`

## ✅ Checklist Final

- [ ] Código subido a GitHub
- [ ] GitHub Actions funcionando
- [ ] Frontend deployado en GitHub Pages
- [ ] Backend deployado en servicio cloud
- [ ] Base de datos configurada
- [ ] URLs actualizadas en environments
- [ ] CORS configurado
- [ ] Testing completo

¡Tu aplicación estará disponible globalmente una vez completados estos pasos! 🌟
