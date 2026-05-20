const { MongoClient } = require('mongodb');

async function testConnection() {
  const uri = 'mongodb+srv://syeedibrahimali_db_user:VpN3qI0Jzb8l5Du2@cluster0.u7f5z7o.mongodb.net/youthperks?retryWrites=true&w=majority';
  
  try {
    console.log('Testing MongoDB Atlas connection...');
    const client = new MongoClient(uri);
    await client.connect();
    console.log('✅ MongoDB Atlas connected successfully!');
    
    // Test database operations
    const db = client.db();
    const collections = await db.listCollections().toArray();
    console.log('📁 Collections:', collections.map(c => c.name));
    
    await client.close();
    console.log('✅ Connection closed');
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message);
  }
}

testConnection();
