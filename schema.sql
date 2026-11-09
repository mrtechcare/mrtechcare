-- Cloudflare D1 SQL Schema for MrTech Care Platform

-- 1. Users Table
CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  phone TEXT UNIQUE NOT NULL,
  name TEXT,
  email TEXT,
  company_name TEXT,
  role TEXT DEFAULT 'customer',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 2. OTP Verifications Table (with rate limiting and expiry)
CREATE TABLE IF NOT EXISTS otp_verifications (
  id TEXT PRIMARY KEY,
  phone TEXT NOT NULL,
  otp_code TEXT NOT NULL,
  expires_at INTEGER NOT NULL,
  attempts INTEGER DEFAULT 0,
  verified INTEGER DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 3. Sessions Table (for server-side session validation with HTTP-only cookies)
CREATE TABLE IF NOT EXISTS sessions (
  id TEXT PRIMARY KEY,
  user_phone TEXT NOT NULL,
  session_token TEXT UNIQUE NOT NULL,
  expires_at INTEGER NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 4. Service Orders Table (Customer Service History)
CREATE TABLE IF NOT EXISTS service_orders (
  id TEXT PRIMARY KEY,
  order_number TEXT UNIQUE NOT NULL,
  user_phone TEXT NOT NULL,
  customer_name TEXT,
  device_type TEXT NOT NULL,
  device_model TEXT,
  service_title TEXT NOT NULL,
  service_category TEXT NOT NULL,
  status TEXT DEFAULT 'diagnosing', -- pending, diagnosing, in_progress, completed, delivered, cancelled
  estimated_amount INTEGER,
  final_amount INTEGER,
  technician_note TEXT,
  booking_date DATETIME DEFAULT CURRENT_TIMESTAMP,
  completion_date DATETIME,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 5. Customer Reviews Table (with validation before publication)
CREATE TABLE IF NOT EXISTS customer_reviews (
  id TEXT PRIMARY KEY,
  user_phone TEXT NOT NULL,
  customer_name TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  service_category TEXT NOT NULL,
  comment TEXT NOT NULL,
  is_verified_customer INTEGER DEFAULT 0,
  is_approved INTEGER DEFAULT 0, -- Must be approved before public display
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 6. Quotations Table (Separated Individual vs Corporate)
CREATE TABLE IF NOT EXISTS quotations (
  id TEXT PRIMARY KEY,
  quote_number TEXT UNIQUE NOT NULL,
  quote_type TEXT NOT NULL, -- 'individual' or 'corporate'
  contact_person TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  company_name TEXT,
  gst_number TEXT,
  workstation_count INTEGER,
  fleet_scope TEXT,
  services_required TEXT NOT NULL,
  preferred_sla TEXT,
  project_details TEXT NOT NULL,
  status TEXT DEFAULT 'received', -- received, reviewing, quoted, accepted, declined
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_users_phone ON users(phone);
CREATE INDEX IF NOT EXISTS idx_sessions_token ON sessions(session_token);
CREATE INDEX IF NOT EXISTS idx_orders_phone ON service_orders(user_phone);
CREATE INDEX IF NOT EXISTS idx_reviews_approved ON customer_reviews(is_approved);
CREATE INDEX IF NOT EXISTS idx_quotations_type ON quotations(quote_type);
