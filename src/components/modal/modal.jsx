import React from 'react';
import styles from './modal.module.css';

export default function Modal({ onClose, children }) {
    return (
        <div className={styles.modalBackdrop}>
            <div className={styles.modalContent}>
                <button className={styles.closeButton} onClick={onClose}>
                    &times;
                </button>
                <div className={styles.modalMessage}>{children}</div>
            </div>
        </div>
    );
}
