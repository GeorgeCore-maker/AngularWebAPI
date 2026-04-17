using Microsoft.EntityFrameworkCore;

namespace BackendCore.Models;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<Department> Departments { get; set; }
    public DbSet<Employee> Employees { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Department>(entity =>
        {
            entity.HasKey(e => e.DepartmentId);
            entity.Property(e => e.DepartmentName).HasMaxLength(100).IsRequired();
        });

        modelBuilder.Entity<Employee>(entity =>
        {
            entity.HasKey(e => e.EmployeeId);
            entity.Property(e => e.EmployeeName).HasMaxLength(100).IsRequired();
            entity.Property(e => e.PhotoFileName).HasMaxLength(255).HasDefaultValue("anonymous.png");
            
            entity.HasOne<Department>()
                  .WithMany()
                  .HasForeignKey(e => e.Department)
                  .OnDelete(DeleteBehavior.Restrict);
        });
    }
}

public class Department
{
    public int DepartmentId { get; set; }
    public string DepartmentName { get; set; } = string.Empty;
}

public class Employee
{
    public int EmployeeId { get; set; }
    public string EmployeeName { get; set; } = string.Empty;
    public int Department { get; set; }
    public DateTime DateOfJoining { get; set; }
    public string PhotoFileName { get; set; } = "anonymous.png";
}

public static class SeedData
{
    public static void Initialize(AppDbContext context)
    {
        context.Database.EnsureCreated();

        if (context.Departments.Any())
            return; // DB has been seeded

        var departments = new[]
        {
            new Department { DepartmentName = "Recursos Humanos" },
            new Department { DepartmentName = "Tecnología" },
            new Department { DepartmentName = "Finanzas" },
            new Department { DepartmentName = "Marketing" },
            new Department { DepartmentName = "Ventas" },
            new Department { DepartmentName = "Operaciones" },
            new Department { DepartmentName = "Legal" },
            new Department { DepartmentName = "Innovación" },
            new Department { DepartmentName = "Compras" },
            new Department { DepartmentName = "Logística" }
        };

        context.Departments.AddRange(departments);
        context.SaveChanges();

        var employees = new[]
        {
            new Employee { EmployeeName = "Ana García López", Department = 1, DateOfJoining = new DateTime(2024, 1, 15) },
            new Employee { EmployeeName = "Carlos Rodríguez Mesa", Department = 2, DateOfJoining = new DateTime(2023, 3, 22) },
            new Employee { EmployeeName = "María José Fernández", Department = 3, DateOfJoining = new DateTime(2023, 7, 10) },
            new Employee { EmployeeName = "Luis Alberto Martín", Department = 2, DateOfJoining = new DateTime(2022, 9, 5) },
            new Employee { EmployeeName = "Elena Sánchez Torres", Department = 4, DateOfJoining = new DateTime(2024, 2, 18) },
            new Employee { EmployeeName = "Javier Moreno Cruz", Department = 5, DateOfJoining = new DateTime(2021, 11, 30) },
            new Employee { EmployeeName = "Carmen Jiménez Ruiz", Department = 1, DateOfJoining = new DateTime(2023, 12, 8) },
            new Employee { EmployeeName = "Diego Herrera Vega", Department = 6, DateOfJoining = new DateTime(2022, 4, 14) },
            new Employee { EmployeeName = "Patricia Molina Gil", Department = 7, DateOfJoining = new DateTime(2023, 8, 25) },
            new Employee { EmployeeName = "Roberto Castro Peña", Department = 2, DateOfJoining = new DateTime(2024, 3, 1) }
        };

        context.Employees.AddRange(employees);
        context.SaveChanges();
    }
}
