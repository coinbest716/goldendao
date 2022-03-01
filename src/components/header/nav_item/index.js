import React, { useCallback, useEffect, useState } from 'react'

export default function NavItem(prop) {
  return (
    <a
      href={prop.href}
      className="nav-item hover:text-lightest_gold text-white px-[25px] h-full pt-[12px] cursor-pointer"
    >
      {prop.name}
    </a>
  )
}
