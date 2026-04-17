# Database Connection Strings Examples

## Local Development
```xml
<connectionStrings>
  <add name="DefaultConnection" 
       connectionString="Data Source=.;Initial Catalog=EmployeeManagementDB;Integrated Security=True"
       providerName="System.Data.SqlClient" />
</connectionStrings>
```

## SQL Server Express LocalDB
```xml
<connectionStrings>
  <add name="DefaultConnection" 
       connectionString="Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\EmployeeManagementDB.mdf;Integrated Security=True"
       providerName="System.Data.SqlClient" />
</connectionStrings>
```

## Azure SQL Database
```xml
<connectionStrings>
  <add name="DefaultConnection" 
       connectionString="Server=tcp:your-server.database.windows.net,1433;Initial Catalog=EmployeeManagementDB;Persist Security Info=False;User ID=your-username;Password=your-password;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;"
       providerName="System.Data.SqlClient" />
</connectionStrings>
```

## Docker SQL Server
```xml
<connectionStrings>
  <add name="DefaultConnection" 
       connectionString="Data Source=localhost,1433;Initial Catalog=EmployeeManagementDB;User ID=sa;Password=YourPassword123"
       providerName="System.Data.SqlClient" />
</connectionStrings>
```

## Setup Instructions

1. **Choose the appropriate connection string** for your environment
2. **Replace the placeholders** with your actual values
3. **Update Web.config** in the WebAPI project
4. **Run the setup-database.sql** script to create tables and sample data
5. **Test the connection** by running the API

## Security Notes

- **Never commit passwords** to version control
- **Use environment variables** or Azure Key Vault for production
- **Enable SSL/TLS** for database connections in production
- **Use least privilege** database accounts for the application
