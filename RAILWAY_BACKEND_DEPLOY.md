# Deployment del Backend a Railway

## Pasos rápidos para deployar:

1. **Crear cuenta en Railway:**
   - Ve a [railway.app](https://railway.app)
   - Regístrate con tu cuenta de GitHub

2. **Conectar el repositorio:**
   - Selecciona "Deploy from GitHub repo"
   - Autoriza Railway a acceder a tu repositorio `AngularWebAPI`

3. **Configurar el servicio:**
   - Selecciona el directorio `BackendCore`
   - Railway detectará automáticamente el `Dockerfile.core`

4. **Variables de entorno:**
   ```
   ASPNETCORE_ENVIRONMENT=Production
   ASPNETCORE_URLS=http://0.0.0.0:$PORT
   ```

5. **Configurar base de datos (opcional):**
   - Agregar PostgreSQL desde Railway dashboard
   - Actualizar `ConnectionStrings:DefaultConnection` en `appsettings.json`

## URLs esperadas:
- Backend: `https://[tu-proyecto].railway.app`
- Swagger: `https://[tu-proyecto].railway.app/swagger`
- API Base: `https://[tu-proyecto].railway.app/api`

## Después del deployment:
1. Copiar la URL del backend de Railway
2. Actualizar `UI/src/environments/environment.prod.ts`:
   ```typescript
   export const environment = {
     production: true,
     apiUrl: 'https://[tu-proyecto].railway.app/api'
   };
   ```
3. Hacer commit y push para actualizar el frontend

## Verificación:
- Visita `https://[tu-proyecto].railway.app/swagger` para verificar la API
- Verifica CORS visitando el frontend y probando las operaciones
