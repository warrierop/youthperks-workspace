const { simpleDB } = require('./src/lib/simple-db.ts');

async function seedDatabase() {
  try {
    await simpleDB.seedDatabase();
    console.log('✅ Database seeded successfully!');
    console.log('📧 Super Admin login: abcsuperyouthperks@youthperks.com');
    console.log('🔑 Password: 1234Aa5678mc');
  } catch (error) {
    console.error('❌ Error seeding database:', error);
  }
}

seedDatabase();
