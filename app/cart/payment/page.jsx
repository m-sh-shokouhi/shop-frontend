import Link from 'next/link'
import React from 'react'

export default function AddressPage() {
  return (
    <div>
      <h1>روش پرداخت را انتخاب کنید</h1>
      <Link href="/cart/payment-result">ورود به صفحه بانک جهت پرداخت</Link>
    </div>
  )
}
