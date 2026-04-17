# Railway Backend Deployment Configuration

## 🚀 Deploy Backend to Railway

### 1. Prerequisites
- Railway account (free): https://railway.app
- GitHub account connected to Railway

### 2. Setup Steps

1. **Create Railway Project**
   - Go to https://railway.app
   - Connect with GitHub
   - Create new project from GitHub repo
   - Select "Deploy from GitHub repo"
   - Choose: GeorgeCore-maker/AngularWebAPI

2. **Configure Service**
   - Select "WebAPI/WebApplication1" folder as root
   - Railway will auto-detect .NET Framework project
   - Set environment variables:
     - `ASPNETCORE_ENVIRONMENT` = `Production`
     - `PORT` = `${{ PORT }}`

3. **Database Setup**
   - Add PostgreSQL plugin in Railway
   - Get connection string from Railway dashboard
   - Update Web.config with new connection string

### 3. Alternative: Heroku Deployment

1. **Install Heroku CLI**
2. **Create Heroku App**
   ```bash
   heroku create your-employee-api
   ```

3. **Add SQL Server Add-on**
   ```bash
   heroku addons:create jawsdb-maria:kitefin
   ```

4. **Deploy**
   ```bash
   git subtree push --prefix=WebAPI/WebApplication1 heroku main
   ```

### 4. Update Frontend URLs

After backend deployment, update:
```typescript
// UI/src/environments/environment.prod.ts
export const environment = {
  production: true,
  apiUrl: 'https://your-app-name.railway.app/api/',
  photoUrl: 'https://your-app-name.railway.app/Photos/'
};
```

### 5. Quick Test URLs

Once deployed, test these endpoints:
- GET `{backend_url}/api/Department`
- GET `{backend_url}/api/Employee`
- POST `{backend_url}/api/Department`
- POST `{backend_url}/api/Employee`
