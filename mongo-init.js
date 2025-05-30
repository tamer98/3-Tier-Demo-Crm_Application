db = db.getSiblingDB("demo_crmDB");  // Switch to "mydatabase"

db.createCollection("users");  // Create an empty "users" collection

db.users.insertOne({ name: "Admin User", email: "admin@example.com" });  // Insert sample data

// Create a non-root application user
db.createUser({
    user: "user",
    pwd: "user_pass",
    roles: [
      {
        role: "readWrite",
        db: "demo_crmDB"
      }
    ]
  });
  
print("Database and collection initialized successfully!");
