-- =============================================
-- Employee Management System Database Setup
-- =============================================

-- Create Database
CREATE DATABASE [EmployeeManagementDB]
GO

USE [EmployeeManagementDB]
GO

-- =============================================
-- Create Department Table
-- =============================================
CREATE TABLE [dbo].[Department](
    [DepartmentId] [int] IDENTITY(1,1) NOT NULL,
    [DepartmentName] [varchar](100) NOT NULL,
    [CreatedDate] [datetime] NOT NULL DEFAULT (GETDATE()),
    [ModifiedDate] [datetime] NULL,
    
    CONSTRAINT [PK_Department] PRIMARY KEY CLUSTERED ([DepartmentId] ASC)
) ON [PRIMARY]
GO

-- =============================================
-- Create Employee Table
-- =============================================
CREATE TABLE [dbo].[Employee](
    [EmployeeId] [int] IDENTITY(1,1) NOT NULL,
    [EmployeeName] [varchar](100) NOT NULL,
    [Department] [int] NOT NULL,
    [DateOfJoining] [date] NOT NULL,
    [PhotoFileName] [varchar](255) NULL DEFAULT('anonymous.png'),
    [CreatedDate] [datetime] NOT NULL DEFAULT (GETDATE()),
    [ModifiedDate] [datetime] NULL,
    
    CONSTRAINT [PK_Employee] PRIMARY KEY CLUSTERED ([EmployeeId] ASC),
    CONSTRAINT [FK_Employee_Department] FOREIGN KEY([Department]) 
        REFERENCES [dbo].[Department] ([DepartmentId])
        ON DELETE CASCADE
        ON UPDATE CASCADE
) ON [PRIMARY]
GO

-- =============================================
-- Create Indexes for Performance
-- =============================================
CREATE NONCLUSTERED INDEX [IX_Employee_Department] ON [dbo].[Employee]
(
    [Department] ASC
) ON [PRIMARY]
GO

CREATE NONCLUSTERED INDEX [IX_Employee_DateOfJoining] ON [dbo].[Employee]
(
    [DateOfJoining] ASC
) ON [PRIMARY]
GO

-- =============================================
-- Insert Sample Departments
-- =============================================
INSERT INTO [dbo].[Department] ([DepartmentName]) VALUES
('Recursos Humanos'),
('Tecnología'),
('Finanzas'),
('Marketing'),
('Ventas'),
('Operaciones'),
('Legal'),
('Innovación'),
('Compras'),
('Logística')
GO

-- =============================================
-- Insert Sample Employees
-- =============================================
INSERT INTO [dbo].[Employee] ([EmployeeName], [Department], [DateOfJoining], [PhotoFileName]) VALUES
('Ana García López', 1, '2024-01-15', 'anonymous.png'),
('Carlos Rodríguez Mesa', 2, '2023-03-22', 'anonymous.png'),
('María José Fernández', 3, '2023-07-10', 'anonymous.png'),
('Luis Alberto Martín', 2, '2022-09-05', 'anonymous.png'),
('Elena Sánchez Torres', 4, '2024-02-18', 'anonymous.png'),
('Javier Moreno Cruz', 5, '2021-11-30', 'anonymous.png'),
('Carmen Jiménez Ruiz', 1, '2023-12-08', 'anonymous.png'),
('Diego Herrera Vega', 6, '2022-04-14', 'anonymous.png'),
('Patricia Molina Gil', 7, '2023-08-25', 'anonymous.png'),
('Roberto Castro Peña', 2, '2024-03-01', 'anonymous.png')
GO

-- =============================================
-- Create Views for Reporting
-- =============================================
CREATE VIEW [dbo].[vw_EmployeeDetails] AS
SELECT 
    e.EmployeeId,
    e.EmployeeName,
    d.DepartmentName,
    e.DateOfJoining,
    e.PhotoFileName,
    DATEDIFF(YEAR, e.DateOfJoining, GETDATE()) as YearsOfService,
    e.CreatedDate,
    e.ModifiedDate
FROM Employee e
INNER JOIN Department d ON e.Department = d.DepartmentId
GO

-- =============================================
-- Create Stored Procedures
-- =============================================

-- Get All Employees with Department Info
CREATE PROCEDURE [dbo].[sp_GetAllEmployees]
AS
BEGIN
    SET NOCOUNT ON;
    
    SELECT 
        e.EmployeeId,
        e.EmployeeName,
        e.Department,
        d.DepartmentName,
        e.DateOfJoining,
        e.PhotoFileName
    FROM Employee e
    INNER JOIN Department d ON e.Department = d.DepartmentId
    ORDER BY e.EmployeeName
END
GO

-- Get Employee by ID
CREATE PROCEDURE [dbo].[sp_GetEmployeeById]
    @EmployeeId INT
AS
BEGIN
    SET NOCOUNT ON;
    
    SELECT 
        e.EmployeeId,
        e.EmployeeName,
        e.Department,
        d.DepartmentName,
        e.DateOfJoining,
        e.PhotoFileName
    FROM Employee e
    INNER JOIN Department d ON e.Department = d.DepartmentId
    WHERE e.EmployeeId = @EmployeeId
END
GO

-- Insert New Employee
CREATE PROCEDURE [dbo].[sp_InsertEmployee]
    @EmployeeName VARCHAR(100),
    @Department INT,
    @DateOfJoining DATE,
    @PhotoFileName VARCHAR(255) = 'anonymous.png'
AS
BEGIN
    SET NOCOUNT ON;
    
    INSERT INTO Employee (EmployeeName, Department, DateOfJoining, PhotoFileName)
    VALUES (@EmployeeName, @Department, @DateOfJoining, @PhotoFileName)
    
    SELECT SCOPE_IDENTITY() as EmployeeId
END
GO

-- Update Employee
CREATE PROCEDURE [dbo].[sp_UpdateEmployee]
    @EmployeeId INT,
    @EmployeeName VARCHAR(100),
    @Department INT,
    @DateOfJoining DATE,
    @PhotoFileName VARCHAR(255)
AS
BEGIN
    SET NOCOUNT ON;
    
    UPDATE Employee 
    SET 
        EmployeeName = @EmployeeName,
        Department = @Department,
        DateOfJoining = @DateOfJoining,
        PhotoFileName = @PhotoFileName,
        ModifiedDate = GETDATE()
    WHERE EmployeeId = @EmployeeId
END
GO

-- Delete Employee
CREATE PROCEDURE [dbo].[sp_DeleteEmployee]
    @EmployeeId INT
AS
BEGIN
    SET NOCOUNT ON;
    
    DELETE FROM Employee 
    WHERE EmployeeId = @EmployeeId
END
GO

-- =============================================
-- Grant Permissions (Adjust as needed)
-- =============================================
-- GRANT SELECT, INSERT, UPDATE, DELETE ON Department TO [YourAppUser]
-- GRANT SELECT, INSERT, UPDATE, DELETE ON Employee TO [YourAppUser]
-- GRANT EXECUTE ON [dbo].[sp_GetAllEmployees] TO [YourAppUser]
-- GRANT EXECUTE ON [dbo].[sp_GetEmployeeById] TO [YourAppUser]
-- GRANT EXECUTE ON [dbo].[sp_InsertEmployee] TO [YourAppUser]
-- GRANT EXECUTE ON [dbo].[sp_UpdateEmployee] TO [YourAppUser]
-- GRANT EXECUTE ON [dbo].[sp_DeleteEmployee] TO [YourAppUser]

PRINT 'Database setup completed successfully!'
GO
