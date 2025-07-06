-- Step 1: Create Table
CREATE TABLE IF NOT EXISTS Products (
    ProductID INTEGER PRIMARY KEY,
    ProductName TEXT,
    Category TEXT,
    Price REAL
);

-- Step 2: Insert Sample Data
INSERT INTO Products (ProductID, ProductName, Category, Price) VALUES
(1, 'Product A', 'Electronics', 1000),
(2, 'Product B', 'Electronics', 950),
(3, 'Product C', 'Electronics', 950),
(4, 'Product D', 'Clothing', 500),
(5, 'Product E', 'Clothing', 700),
(6, 'Product F', 'Clothing', 700),
(7, 'Product G', 'Furniture', 1500),
(8, 'Product H', 'Furniture', 1400);

-- Step 3: Apply ROW_NUMBER() to Rank Products Within Each Category
SELECT
    ProductID,
    ProductName,
    Category,
    Price,
    ROW_NUMBER() OVER (PARTITION BY Category ORDER BY Price DESC) AS RowNum
FROM Products;

-- Step 4: Apply RANK() to See How Ties are Handled
SELECT
    ProductID,
    ProductName,
    Category,
    Price,
    RANK() OVER (PARTITION BY Category ORDER BY Price DESC) AS RankNum
FROM Products;

-- Step 5: Apply DENSE_RANK() to See Ties Without Gaps
SELECT
    ProductID,
    ProductName,
    Category,
    Price,
    DENSE_RANK() OVER (PARTITION BY Category ORDER BY Price DESC) AS DenseRankNum
FROM Products;
