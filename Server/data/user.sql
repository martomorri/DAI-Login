USE [master]
GO
CREATE LOGIN [DAI-Login] WITH PASSWORD=N'DAI-Login', DEFAULT_DATABASE=[DAI-Login], CHECK_EXPIRATION=OFF,
CHECK_POLICY=OFF
GO

USE [DAI-Login]
GO
CREATE USER [DAI-Login] FOR LOGIN [DAI-Login]
GO
USE [DAI-Login]
GO
ALTER ROLE [db_owner] ADD MEMBER [DAI-Login]
GO