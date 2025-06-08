'use client';
import { useState } from 'react';
import Link from 'next/link';

import { useCart } from '@/context/CartContext';
import ThemeToggle from '../ThemeToggle'; 
import { FaCartArrowDown } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import CallbackModal from '@/components/modals/CallbackModal';
import SmallThemeLogo from '../SmallThemeLogo';


export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { totalItems, totalPrice } = useCart();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <Link href="/">
            <SmallThemeLogo />
          </Link>
        </div>
        
        <nav className="header-nav">
          <ul className="nav-menu">
            <li>
              <Link href="/" className="nav-link">
                Главная
              </Link>
            </li>
            <li>
              <Link href="/catalog" className="nav-link">
                Каталог товаров
              </Link>
            </li>
            <li>
              <Link href="/blog" className="nav-link">
                Блог
              </Link>
            </li>
            <li>
              <Link href="/about" className="nav-link">
                О нас
              </Link>
            </li>
          </ul>
        </nav>

        <div className="header-contacts">
          <p>📞 +7 900 111 22 33</p>
          <button className="read-more" onClick={openModal}>Заказать звонок</button>
        </div>

        <div className="header-actions">
          <ThemeToggle />
          <div className="cart-summary">
            <span>{totalPrice.toFixed(2)} ₽</span>
            <Link href="/cart" passHref>
              <button className="cart-btn">
                <FaCartArrowDown size={24} />
                {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
              </button>
            </Link>
          </div>
          <Link href="/account" passHref>
            <button className="cart-btn">
              <CiUser size={24}/>
            </button>
          </Link>
        </div>    
      </div>
    <CallbackModal isOpen={isModalOpen} onClose={closeModal} />
    </header>
  );
}