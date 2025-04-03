import React from 'react'
import Link from 'next/link'
// List products in the cart
export default function CartPage() {
  return (
    <div>
      <h1>محصولات درون سبد خرید</h1>
      <Link href={"/cart/address"}>مرحله بعد</Link>
    </div>
  )
}
