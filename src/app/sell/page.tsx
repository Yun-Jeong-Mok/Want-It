'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import './sell.css'
import Link from 'next/link'

const Sell = () => {
  const [sellHistory, setSellHistory] = useState([]) // 판매 내역을 상태로 관리

  const fetchSellHistory = async () => {
    // API에서 판매 내역을 가져오는 비동기 함수 정의
    try {
      const response = await fetch('API_URL_HERE')
      if (!response.ok) {
        throw new Error('Fail')
      }
      const data = await response.json()
      setSellHistory(data)
    } catch (error) {
      console.error('Error : ', (error as Error).message)
    }
  }

  useEffect(() => {
    fetchSellHistory()
  }, [])

  return (
    <div>
      <div className="myPage">
        <h1 className="text-3xl font-bold">My Page</h1>
        <div className="profile">
          <Image
            src="/profile.jpg"
            alt="basic profile"
            width={150}
            height={150}
            className="basicProfile object-cover mt-10"
          />
          <b className="name text-5xl">이름</b>
        </div>
      </div>

      <div className="page">
        <div className="myPageMenu">
          <div className="menuMyInfo">
            <Link href="/mypage" className="mt-10 mb-2 text-2xl font-bold">
              내 정보
            </Link>
            <Link href="/profile" className="mb-2">
              프로필 관리
            </Link>
          </div>
          <div className="menuShopInfo">
            <h2 className="mt-7 mb-2 text-2xl font-bold">쇼핑 정보</h2>
            <Link href="/purchase" className="mb-2">
              구매 내역
            </Link>
            <Link href="/sell" className="mb-2">
              판매 내역
            </Link>
            <Link href="/save" className="mb-2">
              찜
            </Link>
          </div>
        </div>

        <div>
          <h2> 판매 내역 </h2>
          {sellHistory.length > 0 ? (
            <ul>
              {sellHistory.map((sell, index) => (
                <li key={index}>
                  <span>{sell.productName}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p>판매 내역이 없습니다.</p>
          )}
        </div>
      </div>
    </div>
  )
}
export default Sell