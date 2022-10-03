import React from 'react';
import { ArrowRight } from 'react-feather';
import styles from './styles.module.css';
import PrimaryIconButton from '../../buttons/PrimaryIconButton';

export default function InputEmail() {
  return (
    <form className={styles.container}>
      <input type="email" className={styles.email} placeholder="Seu melhor e-mail" required />
      <PrimaryIconButton Icon={ArrowRight} />
    </form>
  );
}
