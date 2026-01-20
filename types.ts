
export enum View {
  DASHBOARD = 'DASHBOARD',
  PHARMACY = 'PHARMACY',
  TELEMEDICINE = 'TELEMEDICINE',
  RECORDS = 'RECORDS'
}

export interface User {
  name: string;
  email: string;
  avatar: string;
}

export interface HealthMetric {
  label: string;
  value: string;
  unit: string;
  trend: 'up' | 'down' | 'stable';
  color: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  rating: number;
  availability: string;
  image: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}
