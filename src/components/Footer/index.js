import styles from './styles.module.scss'
import Image from 'next/image'
import footerImg from  '../../assets/images/footer.png'

export default function Footer() {
    return (
        <div className={styles.footer}>
            <Image 
                src={footerImg}
            />
        </div>
    )
}