# PowerShell script to seed the database
# Run this script instead of curl on Windows

Invoke-RestMethod -Uri "http://localhost:3000/api/seed" -Method POST -ContentType "application/json"

Write-Host "Database seeded successfully!"
Write-Host "Super Admin login: abcsuperyouthperks@youthperks.com"
Write-Host "Password: 1234Aa5678mc"
