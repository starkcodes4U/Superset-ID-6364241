
-- Create Employees table
CREATE TABLE Employees (
    EmployeeID INT IDENTITY(1,1) PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    DepartmentID INT,
    Salary DECIMAL(10,2),
    JoinDate DATE
);
GO

-- Stored Procedure to retrieve employees by DepartmentID
CREATE PROCEDURE sp_GetEmployeesByDepartment
    @DepartmentID INT
AS
BEGIN
    SELECT *
    FROM Employees
    WHERE DepartmentID = @DepartmentID;
END;
GO

-- Stored Procedure to Insert Employee
CREATE PROCEDURE sp_InsertEmployee
    @FirstName VARCHAR(50),
    @LastName VARCHAR(50),
    @DepartmentID INT,
    @Salary DECIMAL(10,2),
    @JoinDate DATE
AS
BEGIN
    INSERT INTO Employees (FirstName, LastName, DepartmentID, Salary, JoinDate)
    VALUES (@FirstName, @LastName, @DepartmentID, @Salary, @JoinDate);
END;
GO

-- Example: Insert some employees
EXEC sp_InsertEmployee 'John', 'Doe', 1, 50000.00, '2024-06-29';
EXEC sp_InsertEmployee 'Jane', 'Smith', 1, 52000.00, '2024-06-15';
EXEC sp_InsertEmployee 'Mark', 'Lee', 2, 48000.00, '2024-05-20';
GO

-- Example: Retrieve employees from Department 1
EXEC sp_GetEmployeesByDepartment 1;
GO

-- Example: Retrieve employees from Department 2
EXEC sp_GetEmployeesByDepartment 2;
GO
