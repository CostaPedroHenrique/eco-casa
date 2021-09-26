import styles from './styles.module.scss'
import Image from 'next/image'

import pedroImg from '../../assets/images/pedroImg.png'
import arthurImg from '../../assets/images/arthurImg.png'
import gabrielaImg from '../../assets/images/gabrielaImg.png'
import luizaImg from '../../assets/images/luizaImg.png'
import mauricioImg from '../../assets/images/mauricioImg.png'

export default function Team() {
    return (
        <div>
            <div className={styles.title}>
                <h1>Nosso time</h1>
            </div>
            <div className={styles.team}>
                <div className={styles.member}>
                    <span>“Onde existe preservação da natureza, existe futuro.”</span>
                    <div>
                        <Image
                            src={arthurImg}
                        /> 
                        <div className={styles.details}>
                            <span>Arthur Cezar</span>
                            <span>Backend developer</span>
                        </div>
                        <span>— Paola Rhoden</span>
                    </div>
                </div>

                <div className={styles.member}>
                    <span>“Preservar a natureza é a chave para manter o equilíbrio ambiental.”</span>
                    <div>
                        <Image
                            src={luizaImg}
                        />
                        <div className={styles.details}>
                            <span>Luiza de Sá</span>
                            <span>Jornalista, gestora de projetos, produtora</span>
                        </div>
                        <span>— Paola Rhoden</span>
                    </div>
                </div>

                <div className={styles.member}>
                    <span>“Preservar a natureza é a chave para manter o equilíbrio ambiental.”</span>
                    <div>
                        <Image
                            src={gabrielaImg}
                        />
                        <div className={styles.details}>
                            <span>Gabriela Souza</span>
                            <span>Execução Orçamentária - UFRN</span>
                        </div>
                        <span>— Paola Rhoden</span>
                    </div>
                </div>

                <div className={styles.member}>
                    <span>“Preservar a natureza é a chave para manter o equilíbrio ambiental.”</span>
                    <div>
                        <Image
                            src={mauricioImg}
                        />
                        <div className={styles.details}>
                            <span>Maurício Freitas</span>
                            <span>UX/UI</span>
                        </div>
                        <span>— Paola Rhoden</span>
                    </div>
                </div>

                <div className={styles.member}>
                    <span>“Preservar a natureza é a chave para manter o equilíbrio ambiental.”</span>
                    <div>
                        <Image
                            src={pedroImg}
                        />
                        <div className={styles.details}>
                            <span>Pedro Henrique</span>
                            <span>FullStack developer</span>
                        </div>
                        <span>— Paola Rhoden</span>
                    </div>
                </div>
            </div>
        </div>
    )
}