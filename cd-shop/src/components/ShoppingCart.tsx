'use client'

import { useState } from 'react'
import { Product } from '@/types'

interface CartItem extends Product {
  quantity: number
}

interface ShoppingCartProps {
  isOpen: boolean
  onClose: () => void
}

export default function ShoppingCart({ isOpen, onClose }: ShoppingCartProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id)
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (productId: number) => {
    setCartItems(prev => prev.filter(item => item.id !== productId))
  }

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    )
  }

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div className="bg-gradient-to-br from-pink-50 to-purple-50 w-full max-w-md h-full shadow-2xl transform transition-transform duration-300">
        <div className="p-6 border-b border-pink-200 bg-gradient-to-r from-pink-100 to-purple-100">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center">
              🛒 ショッピングカート
            </h2>
            <button
              onClick={onClose}
              className="text-gray-600 hover:text-gray-800 text-2xl font-bold rounded-full w-8 h-8 flex items-center justify-center hover:bg-pink-200 transition-colors"
            >
              ×
            </button>
          </div>
          <p className="text-sm text-gray-600 mt-1">
            {getTotalItems()}個のアイテム
          </p>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🎵</div>
              <p className="text-gray-500 text-lg">カートは空です</p>
              <p className="text-gray-400 text-sm mt-2">お気に入りのCDを追加してください♪</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white rounded-2xl p-4 shadow-md border border-pink-100">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-200 to-purple-200 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">💿</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 text-sm">{item.title}</h3>
                      <p className="text-gray-600 text-xs">{item.artist}</p>
                      <p className="text-pink-600 font-bold text-sm">¥{item.price.toLocaleString()}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 rounded-full bg-pink-100 text-pink-600 hover:bg-pink-200 transition-colors flex items-center justify-center font-bold"
                      >
                        -
                      </button>
                      <span className="w-8 text-center font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 rounded-full bg-pink-100 text-pink-600 hover:bg-pink-200 transition-colors flex items-center justify-center font-bold"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-400 hover:text-red-600 transition-colors"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="p-6 border-t border-pink-200 bg-gradient-to-r from-pink-100 to-purple-100">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold text-gray-800">合計:</span>
              <span className="text-2xl font-bold text-pink-600">
                ¥{getTotalPrice().toLocaleString()}
              </span>
            </div>
            <button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-2xl font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
              🎉 レジに進む
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

// カート管理用のカスタムフック
export function useShoppingCart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id)
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (productId: number) => {
    setCartItems(prev => prev.filter(item => item.id !== productId))
  }

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    )
  }

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0)
  }

  const clearCart = () => {
    setCartItems([])
  }

  return {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    getTotalItems,
    clearCart
  }
}