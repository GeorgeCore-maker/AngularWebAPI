# 🚀 Guía Rápida de Deployment

## ✅ **Status Actual**

### Frontend ✅ DEPLOYED
- **URL:** https://georgecore-maker.github.io/AngularWebAPI/
- **Estado:** Funcional con datos mock
- **Deploy:** Automático con GitHub Actions

### Backend ⏳ PENDIENTE
- **Opciones disponibles:** Railway, Heroku, Azure, Docker
- **Recomendado:** Railway (.NET Core)

---

## 🚀 **Deploy Backend en Railway (5 minutos)**

### Paso 1: Crear cuenta en Railway
1. Ir a https://railway.app
2. Conectar con GitHub
3. Autorizar acceso al repo

### Paso 2: Crear proyecto
1. Click "Deploy from GitHub repo"
2. Seleccionar: `GeorgeCore-maker/AngularWebAPI`
3. Railway detectará el Dockerfile.core automáticamente

### Paso 3: Configurar variables (opcional)
```bash
ASPNETCORE_ENVIRONMENT=Production
```

### Paso 4: Deploy automático
- Railway buildeará y desplegará automáticamente
- URL generada: `https://[random-name].railway.app`

### Paso 5: Actualizar frontend
```typescript
// UI/src/environments/environment.prod.ts
export const environment = {
  production: true,
  apiUrl: 'https://[tu-app].railway.app/api/',
  photoUrl: 'https://[tu-app].railway.app/Photos/'
};
```

### Paso 6: Re-deploy frontend
```bash
git add .
git commit -m "Connect to Railway backend"
git push
```

---

## 🐳 **Alternativa: Docker Local**

```bash
# 1. Build image
docker build -f Dockerfile.core -t employee-api .

# 2. Run container
docker run -p 8080:80 employee-api

# 3. Test API
curl http://localhost:8080/api/Department
```

---

## 🌐 **URLs Finales**

| Componente | URL | Estado |
|------------|-----|---------|
| Frontend Demo | https://georgecore-maker.github.io/AngularWebAPI/ | ✅ Activo |
| Backend Railway | https://[tu-app].railway.app/api/ | ⏳ Por configurar |
| Swagger Docs | https://[tu-app].railway.app/swagger/ | ⏳ Por configurar |
| GitHub Repo | https://github.com/GeorgeCore-maker/AngularWebAPI | ✅ Activo |

---

## 🔧 **Troubleshooting**

### Error CORS
Si hay problemas de CORS después del deploy, el backend ya incluye:
```csharp
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", builder =>
    {
        builder.AllowAnyOrigin()
               .AllowAnyMethod()
               .AllowAnyHeader();
    });
});
```

### Error 404 en rutas
GitHub Pages ya incluye el archivo 404.html para manejo de rutas SPA.

### Error de build
Si el backend no se despliega, verificar que Dockerfile.core esté en la raíz del repo.

---

## 🎉 **Resultado Final**

Una vez completado, tendrás:
- ✅ Frontend funcionando con backend real
- ✅ API REST completa con Swagger
- ✅ Base de datos en memoria (expandible a SQL Server)
- ✅ Subida de archivos funcional
- ✅ CORS configurado
- ✅ Deploy automático

**Tiempo estimado:** 5-10 minutos 🚀
