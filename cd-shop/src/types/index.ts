// 商品関連の型定義
export interface Product {
  id: number
  title: string
  artist: string
  price: number
  description?: string
  image?: string
  genre?: string
  releaseDate?: string
  stock?: number
  createdAt?: Date
  updatedAt?: Date
}

// ユーザー関連の型定義
export interface User {
  id: number
  email: string
  name: string
  role: 'user' | 'admin'
  createdAt?: Date
  updatedAt?: Date
}

// 注文関連の型定義
export interface Order {
  id: number
  userId: number
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  total: number
  items: OrderItem[]
  shippingAddress: Address
  createdAt?: Date
  updatedAt?: Date
}

export interface OrderItem {
  id: number
  orderId: number
  productId: number
  quantity: number
  price: number
  product?: Product
}

// 住所関連の型定義
export interface Address {
  id?: number
  name: string
  postalCode: string
  prefecture: string
  city: string
  address: string
  phone?: string
}

// API レスポンス関連の型定義
export interface ApiResponse<T> {
  success: boolean
  data?: T
  message?: string
  error?: string
}

// ページネーション関連の型定義
export interface PaginationParams {
  page: number
  limit: number
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

// 検索・フィルター関連の型定義
export interface ProductSearchParams {
  query?: string
  genre?: string
  minPrice?: number
  maxPrice?: number
  artist?: string
}