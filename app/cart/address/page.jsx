import Link from 'next/link'
import React from 'react'

export default function AddressPage() {
  return (
    <div>
      <h1>آدرس مورد نظر را انتخاب کنید</h1>
      <Link href="/cart/payment">مرحله بعد (انتخاب روش پرداخت)</Link>
    </div>
  )
}
