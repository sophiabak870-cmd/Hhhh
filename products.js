const PRODUCTS = [

/* ================= PHONES ================= */

{
  id: 1,
  name: "VoltMart Executive X Pro",
  category: "Phones",
  price: 1299,
  oldPrice: 1499,
  stock: 4,
  sku: "VM-PH-001",
  description: "Precision engineered for executives. Aerospace aluminum body with flagship performance.",
  images: [
    "images/phone1-1.jpg",
    "images/phone1-2.jpg",
    "images/phone1-3.jpg"
  ],
  variations: {
    colors: ["Black", "Gold"],
    storage: ["128GB", "256GB", "512GB"]
  },
  specs: {
    Brand: "VoltMart",
    Display: "6.9” OLED",
    Processor: "VX Neural Engine",
    Battery: "5200mAh",
    Warranty: "2 Years International"
  },
  reviews: [
    { name: "Michael T.", rating: 5, date: "Jan 2026", verified: true, comment: "Absolute luxury and performance." },
    { name: "Sophia R.", rating: 4, date: "Feb 2026", verified: true, comment: "Premium build and smooth experience." }
  ]
},

{
  id: 2,
  name: "VoltMart Elite S",
  category: "Phones",
  price: 999,
  oldPrice: 1199,
  stock: 12,
  sku: "VM-PH-002",
  description: "Executive performance with elegant slim profile.",
  images: ["images/phone2-1.jpg","images/phone2-2.jpg"],
  variations: {
    colors: ["Black","Silver"],
    storage: ["128GB","256GB"]
  },
  specs: {
    Brand: "VoltMart",
    Display: "6.5” AMOLED",
    Processor: "VX Pro Chip",
    Battery: "4800mAh",
    Warranty: "1 Year"
  },
  reviews: [
    { name: "Daniel K.", rating: 5, date: "Feb 2026", verified: true, comment: "Best executive phone I’ve used." }
  ]
},

{
  id: 3,
  name: "VoltMart Ultra Z Fold",
  category: "Phones",
  price: 1799,
  oldPrice: 1999,
  stock: 3,
  sku: "VM-PH-003",
  description: "Luxury foldable display engineered for innovation leaders.",
  images: ["images/phone3-1.jpg","images/phone3-2.jpg"],
  variations: {
    colors: ["Black","Gold"],
    storage: ["256GB","512GB"]
  },
  specs: {
    Brand: "VoltMart",
    Display: "7.8” Fold OLED",
    Processor: "VX Ultra Core",
    Battery: "5500mAh",
    Warranty: "2 Years"
  },
  reviews: []
},

/* ================= PCs ================= */

{
  id: 4,
  name: "VoltMart TitanBook Pro",
  category: "PCs",
  price: 2499,
  oldPrice: 2799,
  stock: 5,
  sku: "VM-PC-001",
  description: "Executive workstation built for performance dominance.",
  images: ["images/pc1-1.jpg","images/pc1-2.jpg"],
  variations: {
    colors: ["Black"],
    storage: ["512GB","1TB","2TB"]
  },
  specs: {
    Processor: "VX i9 Pro",
    RAM: "32GB",
    Display: "16” 4K",
    GPU: "RTX Executive Edition"
  },
  reviews: []
},

{
  id: 5,
  name: "VoltMart Carbon Elite",
  category: "PCs",
  price: 1899,
  oldPrice: 2099,
  stock: 9,
  sku: "VM-PC-002",
  description: "Ultra-thin luxury laptop for executives on the move.",
  images: ["images/pc2-1.jpg"],
  variations: {
    colors: ["Black","Gray"],
    storage: ["512GB","1TB"]
  },
  specs: {
    Processor: "VX i7",
    RAM: "16GB",
    Display: "14” OLED"
  },
  reviews: []
},

{
  id: 6,
  name: "VoltMart Executive Desktop",
  category: "PCs",
  price: 3299,
  oldPrice: 3599,
  stock: 2,
  sku: "VM-PC-003",
  description: "Powerful enterprise desktop with luxury finish.",
  images: ["images/pc3-1.jpg"],
  variations: {
    colors: ["Black"],
    storage: ["1TB","2TB"]
  },
  specs: {
    Processor: "VX Ultra X",
    RAM: "64GB",
    GPU: "RTX Titan"
  },
  reviews: []
},

/* ================= ACCESSORIES ================= */

{
  id: 7,
  name: "VoltMart Prestige Watch",
  category: "Accessories",
  price: 799,
  oldPrice: 899,
  stock: 15,
  sku: "VM-AC-001",
  description: "Luxury executive wristwatch with smart integration.",
  images: ["images/watch1.jpg"],
  variations: {
    colors: ["Gold","Black"],
    size: ["40mm","44mm"]
  },
  specs: {
    Material: "Titanium",
    WaterResistant: "Yes",
    BatteryLife: "7 Days"
  },
  reviews: []
},

{
  id: 8,
  name: "VoltMart Gold Edition Sunglasses",
  category: "Accessories",
  price: 299,
  oldPrice: 399,
  stock: 20,
  sku: "VM-AC-002",
  description: "Premium gold frame executive eyewear.",
  images: ["images/glass1.jpg"],
  variations: {
    colors: ["Gold","Black"]
  },
  specs: {
    Material: "Gold Alloy",
    UVProtection: "100%"
  },
  reviews: []
},

{
  id: 9,
  name: "VoltMart Executive Necklace",
  category: "Accessories",
  price: 499,
  oldPrice: 599,
  stock: 10,
  sku: "VM-AC-003",
  description: "Minimal gold luxury chain for executives.",
  images: ["images/necklace1.jpg"],
  variations: {
    colors: ["Gold"]
  },
  specs: {
    Material: "18K Gold Plated"
  },
  reviews: []
},

/* ================= WEARABLES ================= */

{
  id: 10,
  name: "VoltMart Fitness Elite Band",
  category: "Wearables",
  price: 199,
  oldPrice: 249,
  stock: 25,
  sku: "VM-WR-001",
  description: "Executive health tracking band.",
  images: ["images/band1.jpg"],
  variations: {
    colors: ["Black","Gold"]
  },
  specs: {
    HeartRate: "Yes",
    SleepTracking: "Yes"
  },
  reviews: []
},

{
  id: 11,
  name: "VoltMart Smart Ring",
  category: "Wearables",
  price: 349,
  oldPrice: 399,
  stock: 6,
  sku: "VM-WR-002",
  description: "Luxury biometric smart ring.",
  images: ["images/ring1.jpg"],
  variations: {
    colors: ["Black","Gold"],
    size: ["6","7","8","9"]
  },
  specs: {
    Battery: "5 Days",
    Waterproof: "Yes"
  },
  reviews: []
},

/* ================= BABY ================= */

{
  id: 12,
  name: "VoltMart Premium Baby Monitor",
  category: "Baby",
  price: 599,
  oldPrice: 699,
  stock: 8,
  sku: "VM-BB-001",
  description: "Luxury baby monitoring system with AI detection.",
  images: ["images/baby1.jpg"],
  variations: {
    colors: ["White"]
  },
  specs: {
    Camera: "4K",
    NightVision: "Yes"
  },
  reviews: []
},

{
  id: 13,
  name: "VoltMart Royal Baby Stroller",
  category: "Baby",
  price: 899,
  oldPrice: 999,
  stock: 5,
  sku: "VM-BB-002",
  description: "Premium executive baby stroller.",
  images: ["images/baby2.jpg"],
  variations: {
    colors: ["Black","Gray"]
  },
  specs: {
    Material: "Carbon Frame",
    Foldable: "Yes"
  },
  reviews: []
},

{
  id: 14,
  name: "VoltMart Smart Baby Crib",
  category: "Baby",
  price: 1299,
  oldPrice: 1499,
  stock: 3,
  sku: "VM-BB-003",
  description: "Luxury smart crib with motion detection.",
  images: ["images/baby3.jpg"],
  variations: {
    colors: ["White"]
  },
  specs: {
    AITracking: "Yes",
    RockingSystem: "Automatic"
  },
  reviews: []
},

{
  id: 15,
  name: "VoltMart Executive Diaper Bag",
  category: "Baby",
  price: 249,
  oldPrice: 299,
  stock: 18,
  sku: "VM-BB-004",
  description: "Luxury leather diaper bag for modern parents.",
  images: ["images/baby4.jpg"],
  variations: {
    colors: ["Black","Brown"]
  },
  specs: {
    Material: "Premium Leather",
    Waterproof: "Yes"
  },
  reviews: []
}

];
